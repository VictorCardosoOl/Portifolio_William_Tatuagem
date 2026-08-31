"use client";

import React, { useState, useRef } from 'react';
import { CUIDADOS_PRE, CUIDADOS_POS } from '@/config/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PreparationAndAftercare: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pre' | 'pos'>('pre');
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animação de entrada da seção inteira
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".prep-anim", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    });
  }, { scope: containerRef });

  // Animação ao trocar de tab
  useGSAP(() => {
    gsap.killTweensOf('.tab-content-anim');
    
    // Anima o número de fundo
    gsap.fromTo('.watermark-anim',
        { scale: 0.9, opacity: 0, x: 20 },
        { scale: 1, opacity: 0.03, x: 0, duration: 1, ease: 'power3.out', overwrite: 'auto' }
    );

    // Anima o título e os itens
    gsap.fromTo(
      '.tab-content-anim',
      { y: 30, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.05, ease: 'expo.out', overwrite: 'auto' }
    );
  }, { scope: contentRef, dependencies: [activeTab] });

  const activeData = activeTab === 'pre' ? CUIDADOS_PRE : CUIDADOS_POS;

  return (
    <section 
      id="cuidados" 
      ref={containerRef} 
      className="w-full bg-[#fcfbf9] dark:bg-[#0f0f0f] py-14 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-500 border-t border-ink-black/5 dark:border-white/5"
    >
        <div className="max-w-screen-3xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24">
            
            {/* Esquerda: Headers e Tabs */}
            <div className="lg:w-5/12 flex flex-col gap-6 md:gap-8 lg:sticky lg:top-32 h-max">
                <div className="prep-anim flex items-center gap-4">
                    <div className="w-2.5 h-2.5 border border-ink-medium dark:border-white/60 rounded-full shrink-0"></div> 
                    <span className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-white/80">
                        Protocolo do Estúdio
                    </span>
                </div>
                
                <h2 className="prep-anim font-serif italic font-light text-4xl sm:text-5xl md:text-6xl text-ink-black dark:text-white leading-[1.1]">
                    O Ritual da <br/> Cicatrização
                </h2>

                <p className="prep-anim font-sans text-sm md:text-base leading-relaxed tracking-wide font-light text-ink-dark/80 dark:text-gray-400 max-w-sm">
                    A tatuagem é uma colaboração. Metade do resultado final depende de como você respeita a sua tela antes e depois da sessão.
                </p>

                {/* Seletor em Pílula (Segmented Control) Exclusivo para Mobile (< lg) */}
                <div className="lg:hidden flex bg-[#EDEAE3] dark:bg-[#1f1f1f] p-1 rounded-full border border-ink-black/10 dark:border-white/10 mt-2">
                    <button
                        onClick={() => setActiveTab('pre')}
                        type="button"
                        className={`flex-1 py-3 px-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            activeTab === 'pre'
                                ? 'bg-ink-black dark:bg-white text-paper-light dark:text-ink-black shadow-md'
                                : 'text-ink-medium dark:text-gray-400 hover:text-ink-black dark:hover:text-white'
                        }`}
                    >
                        01. Pré-Sessão
                    </button>
                    <button
                        onClick={() => setActiveTab('pos')}
                        type="button"
                        className={`flex-1 py-3 px-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            activeTab === 'pos'
                                ? 'bg-ink-black dark:bg-white text-paper-light dark:text-ink-black shadow-md'
                                : 'text-ink-medium dark:text-gray-400 hover:text-ink-black dark:hover:text-white'
                        }`}
                    >
                        02. Pós-Tatuagem
                    </button>
                </div>

                {/* Tabs de Seleção Verticais (Exibidas no Desktop >= lg) */}
                <div className="hidden lg:flex prep-anim flex-col">
                    <button 
                        onMouseEnter={() => setActiveTab('pre')}
                        onClick={() => setActiveTab('pre')}
                        type="button"
                        className={`relative text-left group flex items-center gap-6 py-6 border-b transition-all duration-500 ${activeTab === 'pre' ? 'border-ink-black dark:border-white' : 'border-ink-black/10 dark:border-white/10'}`}
                    >
                        {/* Indicador de linha ativo */}
                        <div className={`absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-0.5 bg-ink-black dark:bg-white transition-all duration-500 ease-out ${activeTab === 'pre' ? 'h-8 opacity-100' : 'h-0 opacity-0'}`}></div>

                        <span className={`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-all duration-500 ${activeTab === 'pre' ? 'text-ink-black dark:text-white translate-x-2' : 'text-gray-400 group-hover:text-ink-medium'}`}>01</span>
                        <span className={`font-serif text-3xl font-light italic transition-all duration-500 ${activeTab === 'pre' ? 'text-ink-black dark:text-white translate-x-2' : 'text-ink-medium/50 dark:text-gray-500 group-hover:text-ink-black dark:group-hover:text-white'}`}>Pré-Sessão</span>
                    </button>

                    <button 
                        onMouseEnter={() => setActiveTab('pos')}
                        onClick={() => setActiveTab('pos')}
                        type="button"
                        className={`relative text-left group flex items-center gap-6 py-6 border-b transition-all duration-500 ${activeTab === 'pos' ? 'border-ink-black dark:border-white' : 'border-ink-black/10 dark:border-white/10'}`}
                    >
                        {/* Indicador de linha ativo */}
                        <div className={`absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-0.5 bg-ink-black dark:bg-white transition-all duration-500 ease-out ${activeTab === 'pos' ? 'h-8 opacity-100' : 'h-0 opacity-0'}`}></div>

                        <span className={`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-all duration-500 ${activeTab === 'pos' ? 'text-ink-black dark:text-white translate-x-2' : 'text-gray-400 group-hover:text-ink-medium'}`}>02</span>
                        <span className={`font-serif text-3xl font-light italic transition-all duration-500 ${activeTab === 'pos' ? 'text-ink-black dark:text-white translate-x-2' : 'text-ink-medium/50 dark:text-gray-500 group-hover:text-ink-black dark:group-hover:text-white'}`}>Pós-Tatuagem</span>
                    </button>
                </div>
            </div>

            {/* Direita: Conteúdo Dinâmico */}
            <div className="lg:w-7/12 flex flex-col" ref={contentRef}>
                <div className="w-full bg-paper-light dark:bg-[#1a1a1a] p-6 sm:p-10 md:p-16 lg:p-20 border border-ink-black/5 dark:border-white/5 relative overflow-hidden h-full lg:min-h-[700px] shadow-sm rounded-sm transition-all duration-500">
                    
                    {/* Watermark Numérica */}
                    <div className="watermark-anim opacity-0 absolute -top-4 -right-2 md:-top-10 md:-right-6 text-[8rem] sm:text-[12rem] md:text-[20rem] leading-none font-serif text-ink-black dark:text-white select-none pointer-events-none font-thin italic">
                        0{activeTab === 'pre' ? '1' : '2'}
                    </div>

                    <h3 className="tab-content-anim opacity-0 font-sans text-xs tracking-[0.25em] uppercase font-bold text-ink-black dark:text-white mb-8 md:mb-12 border-b border-ink-black/10 dark:border-white/10 pb-4 md:pb-6 relative z-10">
                        {activeTab === 'pre' ? 'A Base (Preparação da Tela)' : 'O Ritual (Cicatrização e Reparo)'}
                    </h3>

                    <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                        {activeData.map((item, idx) => (
                            <div key={`${activeTab}-${idx}`} className="tab-content-anim opacity-0 flex gap-4 sm:gap-6 items-start">
                                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-ink-medium/60 mt-1.5 shrink-0 w-6">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed text-ink-dark dark:text-gray-300 font-light">
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
