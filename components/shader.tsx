import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'

// --- WebGL 2 Shaders ---

const particleVS = `#version 300 es
precision highp float;

in vec2 a_position;
in vec3 a_color;
in float a_size;
in float a_alpha;

out vec3 v_color;
out float v_alpha;

uniform vec2 u_resolution;
uniform float u_dpr;

void main() {
    // Convert to clip space
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);

    gl_PointSize = a_size * u_dpr * 1.8; // Enhanced bloom for professional glow
    v_color = a_color;
    v_alpha = a_alpha;
}
`

const particleFS = `#version 300 es
precision highp float;

in vec3 v_color;
in float v_alpha;

out vec4 fragColor;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    // Refined glow with tighter falloff
    float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * v_alpha;
    alpha = pow(alpha, 1.3); // Sharper edges

    // Bright core with subtle white center
    float core = 1.0 - smoothstep(0.0, 0.2, dist);
    vec3 finalColor = mix(v_color, vec3(1.0), core * 0.4);

    if (alpha <= 0.01) discard;

    // Pre-multiply alpha for additive blending
    fragColor = vec4(finalColor * alpha, alpha);
}
`

const fadeVS = `#version 300 es
precision highp float;
in vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fadeFS = `#version 300 es
precision highp float;
uniform vec3 u_background;
out vec4 fragColor;
void main() {
    // Faster fade for cleaner, more professional rays
    fragColor = vec4(u_background, 0.25);
}
`

// --- Utility Functions ---

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const fullHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  )

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0.95, b: 0.99 } // Default neon blue
}

function createShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(
  gl: WebGL2RenderingContext,
  vsSource: string,
  fsSource: string
) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource)
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
  if (!vs || !fs) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program))
    return null
  }
  return program
}

// --- Particle System ---

class Particle {
  x: number = 0
  y: number = 0
  angle: number = 0
  radius: number = 0
  radiusVel: number = 0
  angularVel: number = 0
  r: number = 0
  g: number = 0
  b: number = 0
  size: number = 0
  life: number = 0
  maxLife: number = 0
  layer: number = 0
  spiralSpeed: number = 0

  constructor(
    width: number,
    height: number,
    colors: string[],
    sizeMultiplier: number,
    speedMultiplier: number
  ) {
    this.spawn(width, height, colors, sizeMultiplier, speedMultiplier)
  }

  spawn(
    width: number,
    height: number,
    colors: string[],
    sizeMultiplier: number,
    speedMultiplier: number
  ) {
    const centerX = width / 2
    const centerY = height / 2

    this.angle = Math.random() * Math.PI * 2
    this.radius = Math.random() * 80 + 20

    this.x = centerX + Math.cos(this.angle) * this.radius
    this.y = centerY + Math.sin(this.angle) * this.radius

    this.layer = Math.random()

    // Pick a random color from the provided colors
    const colorHex = colors[Math.floor(Math.random() * colors.length)]
    const rgb = hexToRgb(colorHex)
    this.r = rgb.r
    this.g = rgb.g
    this.b = rgb.b

    if (this.layer < 0.4) {
      // Inner rays
      this.size = (Math.random() * 3 + 5) * sizeMultiplier
      this.radiusVel = (Math.random() * 50 + 70) * speedMultiplier
      this.angularVel = (Math.random() * 1.8 + 1.8) * speedMultiplier
      this.spiralSpeed = (Math.random() * 0.25 + 0.25) * speedMultiplier
      this.maxLife = Math.random() * 1.5 + 2
    } else {
      // Outer swirl particles
      this.size = (Math.random() * 2 + 2) * sizeMultiplier
      this.radiusVel = (Math.random() * 30 + 40) * speedMultiplier
      this.angularVel = (Math.random() * 2.2 + 1.2) * speedMultiplier
      this.spiralSpeed = (Math.random() * 0.35 + 0.2) * speedMultiplier
      this.maxLife = Math.random() * 2.5 + 2
    }

    this.life = this.maxLife
  }
}

// --- React Component ---

interface EnergyShaderProps extends React.ComponentPropsWithRef<'canvas'> {
  colors?: string[]
  background?: string
  size?: number
  speed?: number
}

const DEFAULT_COLORS = ['#00f2fe', '#4facfe', '#ffd700', '#00ff87']
const DEFAULT_BACKGROUND = '#0a0a0a'

export function EnergyShader({
  colors = DEFAULT_COLORS,
  background = DEFAULT_BACKGROUND,
  size = 1,
  speed = 1,
  className,
  ...props
}: EnergyShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef({ y: 0, velocity: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    })

    if (!gl) {
      console.error('WebGL 2 not supported')
      return
    }

    const particleProg = createProgram(gl, particleVS, particleFS)
    const fadeProg = createProgram(gl, fadeVS, fadeFS)
    if (!particleProg || !fadeProg) return

    const pLocs = {
      position: gl.getAttribLocation(particleProg, 'a_position'),
      color: gl.getAttribLocation(particleProg, 'a_color'),
      size: gl.getAttribLocation(particleProg, 'a_size'),
      alpha: gl.getAttribLocation(particleProg, 'a_alpha'),
      resolution: gl.getUniformLocation(particleProg, 'u_resolution'),
      dpr: gl.getUniformLocation(particleProg, 'u_dpr'),
    }

    const fLocs = {
      position: gl.getAttribLocation(fadeProg, 'a_position'),
      background: gl.getUniformLocation(fadeProg, 'u_background'),
    }

    const quadBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 50 : 100
    const particles = Array.from(
      { length: particleCount },
      () =>
        new Particle(window.innerWidth, window.innerHeight, colors, size, speed)
    )

    const particleData = new Float32Array(particleCount * 7)
    const particleBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, particleData.byteLength, gl.DYNAMIC_DRAW)

    const bgRgb = hexToRgb(background)

    let width = canvas.clientWidth
    let height = canvas.clientHeight
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)

      gl.clearColor(bgRgb.r, bgRgb.g, bgRgb.b, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)
    handleResize()

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollRef.current.velocity = currentScrollY - lastScrollY
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    let animationId: number
    let lastTime = performance.now()

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      scrollRef.current.velocity *= 0.95
      const scrollBoost = Math.abs(scrollRef.current.velocity) * 0.05

      const centerX = width / 2
      const centerY = height / 2

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]

        const radiusBoost = 1 + scrollBoost * 0.5
        p.radius += p.radiusVel * dt * radiusBoost
        p.angle += p.angularVel * dt * (1 + scrollBoost * 0.3)
        p.angle += p.spiralSpeed * (p.radius / 100) * dt

        p.x = centerX + Math.cos(p.angle) * p.radius
        p.y = centerY + Math.sin(p.angle) * p.radius

        p.life -= dt

        const maxRadius = Math.max(width, height) * 0.7
        if (p.life <= 0 || p.radius > maxRadius) {
          p.spawn(width, height, colors, size, speed)
        }

        const lifePct = p.life / p.maxLife
        const fadeIn = Math.min(1.0, lifePct * 3)
        const fadeOut = Math.min(1.0, (1 - lifePct) * 5)
        const alpha = fadeIn * fadeOut

        const offset = i * 7
        particleData[offset + 0] = p.x
        particleData[offset + 1] = p.y
        particleData[offset + 2] = p.r
        particleData[offset + 3] = p.g
        particleData[offset + 4] = p.b
        particleData[offset + 5] = p.size
        particleData[offset + 6] = alpha
      }

      gl.useProgram(fadeProg)
      gl.uniform3f(fLocs.background, bgRgb.r, bgRgb.g, bgRgb.b)
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer)
      gl.enableVertexAttribArray(fLocs.position)
      gl.vertexAttribPointer(fLocs.position, 2, gl.FLOAT, false, 0, 0)

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      gl.useProgram(particleProg)
      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer)
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, particleData)

      gl.enableVertexAttribArray(pLocs.position)
      gl.enableVertexAttribArray(pLocs.color)
      gl.enableVertexAttribArray(pLocs.size)
      gl.enableVertexAttribArray(pLocs.alpha)

      const stride = 7 * 4
      gl.vertexAttribPointer(pLocs.position, 2, gl.FLOAT, false, stride, 0)
      gl.vertexAttribPointer(pLocs.color, 3, gl.FLOAT, false, stride, 2 * 4)
      gl.vertexAttribPointer(pLocs.size, 1, gl.FLOAT, false, stride, 5 * 4)
      gl.vertexAttribPointer(pLocs.alpha, 1, gl.FLOAT, false, stride, 6 * 4)

      gl.uniform2f(pLocs.resolution, width, height)
      gl.uniform1f(pLocs.dpr, Math.min(window.devicePixelRatio || 1, 2))

      // Use pre-multiplied alpha blending instead of pure additive
      // This allows visibility on both dark and light backgrounds
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      gl.drawArrays(gl.POINTS, 0, particleCount)

      animationId = requestAnimationFrame(render)
    }

    animationId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)

      gl.deleteProgram(particleProg)
      gl.deleteProgram(fadeProg)
      gl.deleteBuffer(quadBuffer)
      gl.deleteBuffer(particleBuffer)
    }
  }, [colors, background, size, speed])

  return (
    <canvas
      ref={canvasRef}
      className={cn('size-full touch-none', className)}
      {...props}
    />
  )
}
