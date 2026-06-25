import React, { createContext, useContext, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollContextType {
  stopScroll: () => void;
  startScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType>({
  stopScroll: () => {},
  startScroll: () => {},
});

export const useScroll = () => useContext(ScrollContext);

const ScrollSync: React.FC = () => {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<any>(null);

  const stopScroll = () => {
    lenisRef.current?.lenis?.stop();
  };

  const startScroll = () => {
    lenisRef.current?.lenis?.start();
  };

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      <ScrollSync />
      <ScrollContext.Provider value={{ stopScroll, startScroll }}>
        {children}
      </ScrollContext.Provider>
    </ReactLenis>
  );
};

