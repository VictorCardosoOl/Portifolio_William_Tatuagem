import React, { useRef } from 'react';
import { TEXTOS_GERAIS } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 2. Text Snaps in (Texto lateral entra suavemente)
    tl.fromTo(".hero-anim-text", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );

    // 3. Line Expands (Linha decorativa)
    tl.fromTo(".anim-line",
      { scaleX: 0, transformOrigin: "right center" },
      { scaleX: 1, duration: 1, ease: "expo.out" },
      "-=0.6"
    );

    // 4. Physical Parallax on Scroll (Sensação de peso apenas ao rolar a página)
    if (titleRef.current) {
      gsap.to(titleRef.current,
        {
          yPercent: 50,
          opacity: 0,
          scale: 0.9,
          filter: "blur(8px)",
          ease: "none",
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <header 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500 pb-safe-bottom"
    >
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E0DC] via-transparent to-transparent opacity-40 pointer-events-none"></div>

      {/* RIGHT SIDE: Narrative Text */}
      <div 
        ref={textWrapperRef}
        className="absolute top-[15%] right-[5%] md:top-[25%] md:right-[6%] z-10 w-full max-w-[280px] md:max-w-md text-right px-6 md:px-0"
      >
         <div className="overflow-hidden">
            <p className="hero-anim-text font-sans text-sm md:text-base leading-relaxed tracking-wide font-light text-gray-800 dark:text-gray-300">
            {TEXTOS_GERAIS.heroTextoDescritivo}
            </p>
         </div>
         <div className="mt-6 h-px w-1/2 bg-primary dark:bg-white ml-auto anim-line"></div>
      </div>

      {/* MAIN TITLE: Mask Container */}
      <div className="relative w-full overflow-hidden select-none z-0 leading-none pb-4 md:pb-0">
        <h1 
          ref={titleRef}
          className="font-sans font-black text-[23vw] md:text-[24vw] tracking-tighter text-primary dark:text-white leading-[0.8] text-center w-full will-change-transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;