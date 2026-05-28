'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let lastTime = 0;
    const raf = (time: number) => {
      if (time - lastTime > 1000 / 60) {
        lenis.raf(time);
        lastTime = time;
      }
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
