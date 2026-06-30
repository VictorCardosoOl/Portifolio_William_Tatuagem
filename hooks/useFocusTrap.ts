import { useEffect, RefObject } from 'react';

export const useFocusTrap = (ref: RefObject<HTMLElement | null>, isActive: boolean) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const container = ref.current;
    
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[tabindex="0"]',
      '[contenteditable]'
    ];
    
    const getFocusableElements = () => {
      return Array.from(container.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
    };

    const originalFocusedElement = document.activeElement as HTMLElement;

    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      // Focus first element
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const elements = getFocusableElements();
      if (elements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement || document.activeElement === container) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (originalFocusedElement) {
        originalFocusedElement.focus();
      }
    };
  }, [isActive, ref]);
};
