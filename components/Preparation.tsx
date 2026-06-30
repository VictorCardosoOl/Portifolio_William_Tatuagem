import React, { useState, useRef } from 'react';
import { CUIDADOS_PRE, CUIDADOS_POS } from '@/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PreparationAndAftercare: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'pre' | 'pos' | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const preRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo([preRef.current, posRef.current], 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="cuidados" 
      ref={containerRef} 
      className="min-h-screen w-full flex flex-col bg-paper-light dark:bg-[#121212] transition-colors duration-500 border-t border-ink-light dark:border-white/5 relative overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row flex-1 h-full relative">
          
          {/* LADO PRÉ */}
          <div 
            ref={preRef}
            className={`flex flex-col justify-center p-8 md:p-16 lg:p-24 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-paper-light dark:bg-[#161616] relative
              ${hoveredSide === 'pre' ? 'md:flex-[1.8] shadow-2xl z-10' : hoveredSide === 'pos' ? 'md:flex-[0.6] opacity-50 blur-[3px] grayscale' : 'md:flex-1'}
              w-full min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-ink-light dark:border-white/10
            `}
            onMouseEnter={() => setHoveredSide('pre')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Watermark Number */}
            <div className={`absolute -right-10 md:-right-20 top-10 font-serif font-black italic text-[15rem] md:text-[25rem] leading-none text-ink-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none transition-transform duration-1000 ${hoveredSide === 'pre' ? 'translate-x-10 scale-110' : ''}`}>
                1
            </div>

            <div className="max-w-2xl w-full z-10 relative">
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-px bg-ink-medium"></span>
                    <h3 className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-gray-400">
                        A Base
                    </h3>
                </div>

                <h2 className={`font-serif italic font-light text-5xl md:text-7xl text-ink-black dark:text-white mb-12 transition-all duration-700 origin-left ${hoveredSide === 'pre' ? 'scale-100' : 'md:scale-90'}`}>
                    Pré
                </h2>
                
                <div className={`transition-all duration-[800ms] overflow-hidden ease-in-out ${hoveredSide === 'pre' || typeof window !== 'undefined' && window.innerWidth < 768 ? 'max-h-[1200px] opacity-100 translate-y-0' : 'md:max-h-0 md:opacity-0 md:translate-y-8'}`}>
                    <ul className="space-y-8">
                        {CUIDADOS_PRE.map((item, idx) => (
                            <li key={idx} className="flex gap-6 items-start group">
                                <span className="font-sans text-xs tracking-widest text-ink-medium dark:text-gray-500 font-bold mt-1.5 transition-colors group-hover:text-ink-black dark:group-hover:text-white">0{idx + 1}</span>
                                <p className="font-sans text-base md:text-lg leading-relaxed font-light text-ink-dark dark:text-gray-300">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* CTA Desktop */}
                <div className={`hidden md:flex items-center gap-4 transition-all duration-500 mt-12 ${hoveredSide === 'pre' ? 'opacity-0 translate-y-4 invisible' : 'opacity-100 translate-y-0 visible'}`}>
                    <span className="font-sans text-xs uppercase tracking-widest text-ink-medium group-hover:text-ink-black dark:group-hover:text-white transition-colors">Como se preparar</span>
                    <span className="w-12 h-px bg-ink-medium group-hover:bg-ink-black dark:group-hover:bg-white transition-colors"></span>
                </div>
            </div>
          </div>

          {/* LADO PÓS */}
          <div 
            ref={posRef}
            className={`flex flex-col justify-center p-8 md:p-16 lg:p-24 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-[#e8e6e1] dark:bg-[#0a0a0a] relative
              ${hoveredSide === 'pos' ? 'md:flex-[1.8] shadow-2xl z-10' : hoveredSide === 'pre' ? 'md:flex-[0.6] opacity-50 blur-[3px] grayscale' : 'md:flex-1'}
              w-full min-h-[50vh] md:min-h-screen
            `}
            onMouseEnter={() => setHoveredSide('pos')}
            onMouseLeave={() => setHoveredSide(null)}
          >
             {/* Watermark Number */}
             <div className={`absolute -right-10 md:-left-20 bottom-10 font-serif font-black italic text-[15rem] md:text-[25rem] leading-none text-ink-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none transition-transform duration-1000 ${hoveredSide === 'pos' ? '-translate-x-10 scale-110' : ''}`}>
                2
            </div>

            <div className="max-w-2xl w-full z-10 relative ml-auto md:ml-0 md:pl-12 lg:pl-24">
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-px bg-ink-medium"></span>
                    <h3 className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-gray-400">
                        O Ritual
                    </h3>
                </div>

                <h2 className={`font-serif italic font-light text-5xl md:text-7xl text-ink-black dark:text-white mb-12 transition-all duration-700 origin-left ${hoveredSide === 'pos' ? 'scale-100' : 'md:scale-90'}`}>
                    Pós-Cicatrização
                </h2>

                <div className={`transition-all duration-[800ms] overflow-hidden ease-in-out ${hoveredSide === 'pos' || typeof window !== 'undefined' && window.innerWidth < 768 ? 'max-h-[1200px] opacity-100 translate-y-0' : 'md:max-h-0 md:opacity-0 md:translate-y-8'}`}>
                    <ul className="space-y-8">
                        {CUIDADOS_POS.map((item, idx) => (
                            <li key={idx} className="flex gap-6 items-start group">
                                <span className="font-sans text-xs tracking-widest text-ink-medium dark:text-gray-500 font-bold mt-1.5 transition-colors group-hover:text-ink-black dark:group-hover:text-white">0{idx + 1}</span>
                                <p className="font-sans text-base md:text-lg leading-relaxed font-light text-ink-dark dark:text-gray-300">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* CTA Desktop */}
                <div className={`hidden md:flex items-center gap-4 transition-all duration-500 mt-12 ${hoveredSide === 'pos' ? 'opacity-0 translate-y-4 invisible' : 'opacity-100 translate-y-0 visible'}`}>
                    <span className="w-12 h-px bg-ink-medium group-hover:bg-ink-black dark:group-hover:bg-white transition-colors"></span>
                    <span className="font-sans text-xs uppercase tracking-widest text-ink-medium group-hover:text-ink-black dark:group-hover:text-white transition-colors">O que fazer depois</span>
                </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default PreparationAndAftercare;