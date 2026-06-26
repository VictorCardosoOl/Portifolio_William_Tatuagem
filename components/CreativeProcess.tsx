import React, { useState, useRef } from 'react';
import { PROCESSO_CRIATIVO } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CreativeProcess: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.killTweensOf('.anim-text');
    gsap.fromTo(
      '.anim-text',
      { y: 20, opacity: 0, filter: 'blur(4px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.1, ease: 'power3.out', overwrite: 'auto' }
    );
  }, { scope: contentRef, dependencies: [activeProcess] });

  return (
    <section className="bg-paper-light dark:bg-[#121212] py-12 md:py-20 px-8 md:px-12 lg:px-16 transition-colors duration-500">
        <div className="max-w-screen-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-2.5 h-2.5 border border-ink-medium dark:border-white/60 rounded-full"></div> 
                <h3 className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-white/80">
                    O Processo Criativo
                </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* LISTA ESQUERDA */}
                <div className="flex-1 w-full flex flex-col">
                    {PROCESSO_CRIATIVO.map((item, index) => {
                        const isActive = activeProcess === index;
                        return (
                            <div 
                                key={item.id}
                                onMouseEnter={() => setActiveProcess(index)}
                                className={`relative cursor-pointer py-4 md:py-6 border-b border-ink-black/5 dark:border-white/5 transition-all duration-300 group`}
                            >
                                {/* Active Indicator Line */}
                                <div className={`absolute left-[-1.5rem] top-4 bottom-4 w-0.5 bg-ink-black dark:bg-white transition-all duration-500 ease-in-out ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>
                                
                                <div className="flex justify-between items-baseline">
                                    <div className="pr-4">
                                        <h4 className={`text-fluid-h3 transition-all duration-500 ${
                                            isActive 
                                            ? 'font-serif italic font-light text-ink-black dark:text-white translate-x-3' 
                                            : 'font-serif font-thin text-ink-medium/40 dark:text-gray-500 group-hover:text-ink-black'
                                        }`}>
                                            {item.titulo}
                                        </h4>
                                        <p className={`font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1 transition-all duration-300 ${
                                            isActive ? 'opacity-100 text-ink-medium dark:text-gray-300 translate-x-3' : 'opacity-0'
                                        }`}>
                                            {item.subtitulo}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className={`font-sans text-xs font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-ink-black dark:text-white opacity-100' : 'text-gray-400 opacity-20'}`}>
                                            0{item.id}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CONTEÚDO DIREITA */}
                <div className="flex-1 w-full lg:sticky lg:top-1/3 h-auto min-h-[300px] flex items-center justify-center lg:justify-start lg:pl-8 mt-6 lg:mt-0">
                    <div className="relative w-full max-w-lg" ref={contentRef}>
                        <div className="absolute -top-12 -left-6 text-[10rem] md:text-[12rem] leading-none font-serif text-ink-black opacity-[0.04] dark:text-white dark:opacity-[0.04] select-none pointer-events-none transition-all duration-700 font-thin italic">
                            0{activeProcess + 1}
                        </div>
                        <div className="relative z-10 pl-4" key={activeProcess}>
                            <h3 className="anim-text font-serif italic text-3xl md:text-4xl mb-4 text-ink-black dark:text-white border-b border-ink-black/10 dark:border-white/20 pb-3 inline-block font-light">
                                Detalhes da Etapa
                            </h3>
                            <p className="anim-text font-sans text-base md:text-lg leading-loose tracking-wide text-ink-dark dark:text-gray-300 font-light whitespace-pre-line">
                                {PROCESSO_CRIATIVO[activeProcess].descricao}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CreativeProcess;