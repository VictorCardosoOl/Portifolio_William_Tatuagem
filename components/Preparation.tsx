"use client";

import React, { useRef } from 'react';
import { CUIDADOS_PRE, CUIDADOS_POS } from '@/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PreparationAndAftercare: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Animações sutis estilo editorial
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".prep-item", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".prep-list-container",
                start: "top 80%",
            }
        });

        gsap.from(".prep-header-anim", {
            x: -30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    });
  }, { scope: containerRef });

  return (
    <section 
      id="cuidados" 
      ref={containerRef} 
      className="w-full bg-paper-light dark:bg-[#0a0a0a] py-24 md:py-32 px-8 md:px-12 lg:px-16 border-t border-ink-light dark:border-white/5 relative"
    >
        <div className="max-w-screen-3xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Sticky Header (Editorial Vibe) */}
            <div className="lg:col-span-5 relative">
                <div className="lg:sticky lg:top-32 flex flex-col gap-8">
                    <div className="prep-header-anim flex items-center gap-4">
                        <span className="w-8 h-px bg-ink-medium"></span>
                        <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-gray-400">
                            Protocolo do Estúdio
                        </h3>
                    </div>
                    
                    <h2 className="prep-header-anim font-serif italic font-light text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ink-black dark:text-white">
                        O Ritual da <br/> Cicatrização
                    </h2>

                    <p className="prep-header-anim font-sans text-sm md:text-base leading-relaxed tracking-wide font-light text-ink-dark/80 dark:text-gray-400 max-w-md">
                        A tatuagem não termina quando a agulha para. Ela é uma colaboração. Metade do resultado final depende de como você respeita a sua tela (o seu corpo) antes e depois da sessão.
                    </p>

                    {/* Decorative Elements */}
                    <div className="prep-header-anim hidden lg:block mt-12">
                         <div className="w-12 h-[1px] bg-ink-black/20 dark:bg-white/20 mb-2"></div>
                         <div className="w-8 h-[1px] bg-ink-black/20 dark:bg-white/20 mb-2"></div>
                         <div className="w-4 h-[1px] bg-ink-black/20 dark:bg-white/20"></div>
                    </div>
                </div>
            </div>

            {/* Right Column: Scrollable List */}
            <div className="lg:col-span-7 flex flex-col gap-24 prep-list-container">
                
                {/* PREPARATION BLOCK */}
                <div>
                    <h4 className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-ink-black dark:text-white mb-12 flex items-center gap-4">
                        <span className="font-serif italic text-2xl font-light text-ink-medium/50">01.</span> 
                        A Base (Pré-Sessão)
                    </h4>
                    
                    <div className="flex flex-col border-t border-ink-black/10 dark:border-white/10">
                        {CUIDADOS_PRE.map((item, idx) => (
                            <div key={idx} className="prep-item flex gap-6 md:gap-12 py-8 border-b border-ink-black/10 dark:border-white/10 group hover:bg-ink-black/5 dark:hover:bg-white/5 transition-colors -mx-6 px-6 sm:mx-0 sm:px-0 sm:hover:bg-transparent">
                                <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-ink-medium/60 mt-1">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-dark dark:text-gray-300 font-light group-hover:text-ink-black dark:group-hover:text-white transition-colors">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AFTERCARE BLOCK */}
                <div>
                    <h4 className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-ink-black dark:text-white mb-12 flex items-center gap-4">
                        <span className="font-serif italic text-2xl font-light text-ink-medium/50">02.</span> 
                        O Ritual (Pós-Cicatrização)
                    </h4>
                    
                    <div className="flex flex-col border-t border-ink-black/10 dark:border-white/10">
                        {CUIDADOS_POS.map((item, idx) => (
                            <div key={idx} className="prep-item flex gap-6 md:gap-12 py-8 border-b border-ink-black/10 dark:border-white/10 group hover:bg-ink-black/5 dark:hover:bg-white/5 transition-colors -mx-6 px-6 sm:mx-0 sm:px-0 sm:hover:bg-transparent">
                                <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-ink-medium/60 mt-1">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-dark dark:text-gray-300 font-light group-hover:text-ink-black dark:group-hover:text-white transition-colors">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default PreparationAndAftercare;