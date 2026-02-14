import { frame, SpringOptions, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

interface UseFollowMouseProps {
  springConfig?: SpringOptions;
}
export function useFollowMouse(props: UseFollowMouseProps) {
  const { springConfig } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const followMouse = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor || !container) return;

      frame.read(() => {
        const containerRect = container.getBoundingClientRect();
        const relativeX =
          e.clientX - containerRect.left - cursor.offsetWidth / 2;
        const relativeY =
          e.clientY - containerRect.top - cursor.offsetHeight / 2;

        x.set(relativeX);
        y.set(relativeY);
      });
    };
    container?.addEventListener('mousemove', followMouse);
    return () => container?.removeEventListener('mousemove', followMouse);
  }, []);

  const cursorXSpring = useSpring(x, springConfig);
  const cursorYSpring = useSpring(y, springConfig);

  return {
    containerRef,
    cursorRef,
    cursorXSpring,
    cursorYSpring,
  };
}
