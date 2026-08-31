import React from 'react';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent' | 'js',
      action: string | Date,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        'aria-hidden'?: string | boolean;
      };
    }
  }
}
