"use client";

import React, { useRef } from 'react';
import { TEXTOS_GERAIS } from '@/config/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Manifesto: React.FC = () => {
  const manifesto = TEXTOS_GERAIS.manifesto;
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
                end: "bottom 40%",
                scrub: 1
            }
        });

        tl.from(".manifesto-text-part", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        });

        gsap.fromTo(".manifesto-line",
            { scale: 0, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 1.5, 
                stagger: 0.2, 
                ease: "expo.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%"
                }
            }
        );

        gsap.fromTo(".manifesto-card",
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".manifesto-sidebar",
                    start: "top 70%"
                }
            }
        );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#F4F3F0] dark:bg-[#0a0a0a] overflow-hidden py-16 md:py-24 flex items-center justify-center min-h-[60vh]">
        


        {/* Decorative Hairlines (Corners of the section) */}
        <div className="hidden md:block manifesto-line origin-left absolute top-12 left-12 w-8 h-[1px] bg-ink-black/20 dark:bg-white/20 z-0"></div>
        <div className="hidden md:block manifesto-line origin-top absolute top-12 left-12 w-[1px] h-8 bg-ink-black/20 dark:bg-white/20 z-0"></div>
        
        <div className="hidden md:block manifesto-line origin-right absolute bottom-12 right-12 w-8 h-[1px] bg-ink-black/20 dark:bg-white/20 z-0"></div>
        <div className="hidden md:block manifesto-line origin-bottom absolute bottom-12 right-12 w-[1px] h-8 bg-ink-black/20 dark:bg-white/20 z-0"></div>

        {/* Rotated text bottom left */}
        <div className="absolute bottom-12 left-12 origin-bottom-left -rotate-180 text-ink-black/40 dark:text-white/40 hidden md:block z-0" style={{ writingMode: 'vertical-rl' }}>
            <span className="font-sans text-[8px] tracking-[0.3em] uppercase font-bold">EST. 2018 <br/> O MANIFESTO,</span>
        </div>

        <div className="max-w-screen-3xl w-full px-8 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-center">
                
                {/* Main Statement */}
                <div ref={textRef} className="md:col-span-7 flex flex-col justify-center">
                    <div className="manifesto-text max-w-2xl 3xl:max-w-4xl text-center md:text-center mx-auto">
                        <h2 className="font-serif font-extralight text-[2.5rem] md:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-ink-black dark:text-paper-light">
                            <span className="manifesto-text-part block opacity-100">{manifesto.fraseParte1}</span>
                            <span className="manifesto-text-part block italic font-thin text-ink-medium/60 my-2 md:my-4 scale-110 origin-center">
                                {manifesto.fraseDestaque}
                            </span>
                            <span className="manifesto-text-part block opacity-100">{manifesto.fraseParte2}</span>
                        </h2>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-5 flex flex-col manifesto-sidebar pt-12 md:pt-0">
                    
                    {/* Item 1 */}
                    <div className="manifesto-card pb-12">
                        <h3 className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-ink-black dark:text-white mb-6 flex items-center gap-3">
                            <span className="text-ink-medium">01</span> {manifesto.card1Titulo}
                        </h3>
                        <p className="font-serif italic text-lg md:text-xl leading-relaxed text-ink-dark/90 dark:text-gray-300 font-light">
                            {manifesto.card1Texto}
                        </p>
                    </div>

                    <div className="w-full h-px bg-ink-black/10 dark:bg-white/10 mb-12"></div>

                    {/* Item 2 */}
                    <div className="manifesto-card">
                        <h3 className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-ink-black dark:text-white mb-6 flex items-center gap-3">
                            <span className="text-ink-medium">02</span> {manifesto.card2Titulo}
                        </h3>
                        <p className="font-serif italic text-lg md:text-xl leading-relaxed text-ink-dark/90 dark:text-gray-300 font-light">
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
