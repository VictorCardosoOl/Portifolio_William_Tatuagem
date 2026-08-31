"use client";

import React, { useRef } from 'react';
import { TEXTOS_GERAIS, getWhatsAppUrl } from '@/config/data';
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
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500 pt-28 md:pt-36 pb-4 md:pb-0"
    >
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E0DC] via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      {/* Subtle Noise / Radial glow for tactile feel */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, #000 120%)' }}></div>

      {/* TOP/CENTER HERO CONTENT (Responsivo & Editorial) */}
      <div 
        ref={textWrapperRef}
        className="relative z-10 w-full max-w-screen-3xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row md:items-start md:justify-between mt-4 md:mt-12 lg:mt-20"
      >
        
        {/* ESQUERDA: Badge de Estúdio (Desktop Lateral / Mobile Topo) */}
        <div className="hero-anim-text flex items-center gap-3 mb-12 md:mb-0">
          <div className="w-12 h-px bg-ink-black/30 dark:bg-white/30 hidden md:block"></div>
          <span className="w-1.5 h-1.5 rounded-full bg-ink-black dark:bg-white animate-pulse"></span>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-ink-medium dark:text-gray-400">
            Pinheiros, SP • Studio Privado
          </span>
        </div>

        {/* DIREITA: Manifesto, Texto e CTA */}
        <div className="max-w-md md:max-w-lg lg:max-w-2xl md:text-right flex flex-col md:items-end">
          
          {/* Slogan Conceitual */}
          <div className="overflow-hidden mb-4 md:mb-6">
            <h2 className="hero-anim-text font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink-black dark:text-white font-light leading-tight">
              &ldquo;{TEXTOS_GERAIS.slogan}&rdquo;
            </h2>
          </div>

          {/* Texto Descritivo */}
          <div className="overflow-hidden">
            <p className="hero-anim-text font-sans text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-light text-gray-700 dark:text-gray-300 md:pl-16 lg:pl-24">
              {TEXTOS_GERAIS.heroTextoDescritivo}
            </p>
          </div>

          {/* Linha Divisória */}
          <div className="mt-6 md:mt-10 h-px w-20 md:w-32 bg-ink-black/20 dark:bg-white/20 md:ml-auto anim-line"></div>

          {/* CTA de Agendamento */}
          <div className="hero-anim-text mt-8 md:mt-10 flex flex-col md:items-end gap-2">
            <a 
              href={getWhatsAppUrl("Olá, William! Gostaria de solicitar um orçamento para uma tatuagem.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar sessão ou solicitar orçamento gratuito via WhatsApp"
              className="group inline-flex items-center gap-3 bg-ink-black dark:bg-white text-paper-light dark:text-ink-black px-8 py-4 font-sans text-xs md:text-sm uppercase tracking-widest md:tracking-[0.2em] font-bold hover:bg-ink-dark transition-colors shadow-sm w-fit"
              data-tracking="hero-cta-agendamento"
            >
              <span>Agendar Sessão</span>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <span className="font-sans text-[10px] md:text-xs text-ink-medium dark:text-gray-400 font-light tracking-wide">
              * Orçamento 100% gratuito
            </span>
          </div>
        </div>
      </div>

      {/* MAIN TITLE: Mask Container */}
      <div className="relative w-full overflow-hidden select-none z-0 leading-none mt-auto">
        <h1 
          ref={titleRef}
          className="font-sans font-black text-[22vw] md:text-[23vw] tracking-tighter text-primary dark:text-white leading-[0.8] text-center w-full will-change-transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;
