import { useState, useEffect } from 'react';

interface UseSmartScrollOptions {
  open: boolean;
  threshold?: number;
}

export function useSmartScroll({ open, threshold = 50 }: UseSmartScrollOptions) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (open) {
        setIsVisible(true);
        ticking = false;
        return;
      }

      if (currentScrollY < threshold) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open, threshold]);

  return isVisible;
}
