import React, { useRef } from 'react';
import { TEXTOS_GERAIS } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Manifesto: React.FC = () => {
  const { manifesto } = TEXTOS_GERAIS;
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Draw Lines Animation - CONNECTED TO SCROLL
    gsap.from(".manifesto-line", {
      scale: 0, 
      opacity: 0,
      ease: "none",
      scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1
      }
    });

    // 2. Central Text Reveal - EXPLOSIVE
    gsap.from(".manifesto-text-part", {
      y: 60,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.9, 
      stagger: 0.15,
      ease: "expo.out",
      scrollTrigger: {
          trigger: ".manifesto-center",
          start: "top 75%"
      }
    });

    // 3. Cards Slide In
    gsap.from(".manifesto-card", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
          trigger: ".manifesto-center",
          start: "top 60%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-paper-light dark:bg-[#121212] px-8 md:px-12 lg:px-16 transition-colors duration-500 overflow-hidden">
        <div className="w-full border-t border-ink-black/5 dark:border-white/5">
            {/* WIDE CONTAINER */}
            <div className="max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen">
                
                <div className="hidden md:flex md:col-span-1 border-r border-ink-black/5 dark:border-white/5 justify-center py-12">
                     <span className="writing-mode-vertical text-xs uppercase tracking-[0.4em] text-ink-medium dark:text-white/40 font-bold rotate-180">
                        {manifesto.titulo}, Est. 2018
                     </span>
                </div>

                <div className="manifesto-center md:col-span-7 border-r border-ink-black/5 dark:border-white/5 flex flex-col justify-center items-center py-24 md:py-0 px-6 relative">
                    {/* Hairlines using ink-light - Animated - Hidden on Mobile */}
                    <div className="hidden md:block manifesto-line origin-left absolute top-12 left-12 w-8 h-[1px] bg-ink-black/10 dark:bg-white/20"></div>
                    <div className="hidden md:block manifesto-line origin-top absolute top-12 left-12 w-[1px] h-8 bg-ink-black/10 dark:bg-white/20"></div>
                    
                    <div className="hidden md:block manifesto-line origin-right absolute bottom-12 right-12 w-8 h-[1px] bg-ink-black/10 dark:bg-white/20"></div>
                    <div className="hidden md:block manifesto-line origin-bottom absolute bottom-12 right-12 w-[1px] h-8 bg-ink-black/10 dark:bg-white/20"></div>
                    
                    {/* Content constrained for center focus but wrapper is huge */}
                    <div className="manifesto-text max-w-2xl 3xl:max-w-4xl text-center">
                        <h2 className="font-serif font-extralight text-fluid-h1 leading-[0.95] tracking-tight text-ink-black dark:text-paper-light">
                            <span className="manifesto-text-part block opacity-100">{manifesto.fraseParte1}</span>
                            <span className="manifesto-text-part block italic font-thin text-ink-medium my-4 scale-110 origin-center">
                                {manifesto.fraseDestaque}
                            </span>
                            <span className="manifesto-text-part block opacity-100">{manifesto.fraseParte2}</span>
                        </h2>
                    </div>
                </div>

                <div className="md:col-span-4 flex flex-col">
                    
                    <div className="manifesto-card flex-1 p-12 md:p-16 3xl:p-24 border-b border-ink-black/5 dark:border-white/5 hover:bg-white/40 dark:hover:bg-black/20 transition-colors duration-500 flex flex-col justify-center group">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-ink-medium">01</span>
                            <h4 className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-ink-black dark:text-paper-light">
                                {manifesto.card1Titulo}
                            </h4>
                        </div>
                        <p className="font-serif italic text-2xl 3xl:text-3xl leading-relaxed text-ink-black/80 dark:text-paper-light/80 font-light group-hover:translate-x-2 transition-transform duration-500 max-w-md whitespace-pre-line">
                            {manifesto.card1Texto}
                        </p>
                    </div>

                    <div className="manifesto-card flex-1 p-12 md:p-16 3xl:p-24 hover:bg-white/40 dark:hover:bg-black/20 transition-colors duration-500 flex flex-col justify-center group">
                         <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-ink-medium">02</span>
                            <h4 className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-ink-black dark:text-paper-light">
                                {manifesto.card2Titulo}
                            </h4>
                        </div>
                        <p className="font-serif italic text-2xl 3xl:text-3xl leading-relaxed text-ink-black/80 dark:text-paper-light/80 font-light group-hover:translate-x-2 transition-transform duration-500 max-w-md whitespace-pre-line">
                            {manifesto.card2Texto}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
};

export default Manifesto;