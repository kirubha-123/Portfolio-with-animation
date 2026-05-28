import clsx, { ClassValue } from 'clsx';

export const cn = (...classes: ClassValue[]) => {
  return clsx(...classes);
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const observeElement = (
  element: HTMLElement,
  callback: (isVisible: boolean) => void,
  options = {}
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    },
    {
      threshold: 0.1,
      ...options,
    }
  );

  observer.observe(element);
  return () => observer.disconnect();
};

export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop / docHeight;
};
