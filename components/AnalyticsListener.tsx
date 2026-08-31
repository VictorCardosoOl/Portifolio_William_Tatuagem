"use client";

import { useEffect } from 'react';

export default function AnalyticsListener() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-tracking]');
      if (target) {
        const eventName = target.getAttribute('data-tracking');
        if (eventName && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: eventName,
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
