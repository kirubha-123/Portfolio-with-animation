import gsap from 'gsap';
import { RefObject } from 'react';

export const animateTextReveal = (element: HTMLElement | null) => {
  if (!element) return;

  const chars = element.querySelectorAll('.char');
  gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
  );
};

export const animateFadeUp = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power2.out' }
  );
};

export const animateStaggerChildren = (
  container: HTMLElement | null,
  selector: string,
  stagger = 0.1
) => {
  if (!container) return;

  const children = container.querySelectorAll(selector);
  gsap.fromTo(
    children,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger, ease: 'power2.out' }
  );
};

export const animateGlowHover = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

export const animateScrollReveal = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      scrub: false,
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  });
};

export const splitTextIntoChars = (text: string): string => {
  return text
    .split('')
    .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');
};

export const splitTextIntoWords = (text: string): string => {
  return text
    .split(' ')
    .map((word) => `<span class="word">${word}</span>`)
    .join(' ');
};

export const parallaxScroll = (
  element: HTMLElement | null,
  speed = 0.5
) => {
  if (!element) return;

  gsap.to(element, {
    y: window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};
