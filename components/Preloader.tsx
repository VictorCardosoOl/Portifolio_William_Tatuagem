import React, { useRef, useState, useEffect } from 'react';
import { TEXTOS_GERAIS } from '@/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const [counter, setCounter] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useGSAP(() => {
    const failsafe = setTimeout(() => {
        onCompleteRef.current();
    }, 4000);

    const tl = gsap.timeline({
        onComplete: () => {
            clearTimeout(failsafe);
            onCompleteRef.current();
        }
    });

    if (svgPathRef.current) {
        const length = svgPathRef.current.getTotalLength();
        gsap.set(svgPathRef.current, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
        
        tl.to(svgPathRef.current, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut"
        }, 0);
    }

    if (barRef.current) {
         tl.to(barRef.current, {
            width: '100%',
            duration: 2,
            ease: 'power2.inOut'
        }, 0);
    }

    tl.to('.preloader-element', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.in'
    }, "-=0.3");

    if (containerRef.current) {
         tl.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: 'expo.inOut',
            delay: 0.1
        });
    }

    return () => {
        clearTimeout(failsafe);
    };
  }, { scope: containerRef });

  useEffect(() => {
    const interval = setInterval(() => {
        setCounter(prev => {
            if (prev < 100) return prev + 1;
            clearInterval(interval);
            return 100;
        });
    }, 20);

    return () => {
        clearInterval(interval);
    };
  }, []);

  return (
    <div 
        ref={containerRef}
        className="fixed inset-0 z-[100] w-full h-screen bg-[#111111] text-[#F4F4F0] flex flex-col justify-between p-6 md:p-12 overflow-hidden"
    >
        {/* Top: Brand */}
        <div className="preloader-element flex justify-between items-start">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold opacity-50">
                {TEXTOS_GERAIS.marca}
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold opacity-50">
                Portfolio 2024
            </span>
        </div>

        {/* Center: Animated Signature SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96">
             <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                <path 
                    ref={svgPathRef}
                    d="M 20 50 Q 50 140 80 50 T 140 50 M 160 120 Q 180 120 180 100 Q 180 80 160 80 Q 140 80 140 60 Q 140 40 160 40 Q 180 40 200 60 L 220 120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#F4F4F0] opacity-0"
                />
             </svg>
        </div>

        {/* Bottom: Counter & Bar */}
        <div className="w-full">
            <div className="preloader-element flex justify-between items-end mb-4">
                <span className="font-serif italic text-4xl md:text-6xl font-light">
                    {counter}%
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold opacity-50">
                    Loading Experience
                </span>
            </div>
            
            {/* Hairline Progress Bar */}
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <div 
                    ref={barRef} 
                    className="absolute top-0 left-0 h-full bg-[#F4F4F0] w-0"
                ></div>
            </div>
        </div>
    </div>
  );
};

export default Preloader;