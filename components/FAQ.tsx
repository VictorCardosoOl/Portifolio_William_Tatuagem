import React, { useState, useRef } from 'react';
import { ITENS_FAQ, WHATSAPP_PHONE } from '../data';
import { Plus, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
        }
    });

    tl.from(".faq-sticky-content", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out"
    });

    tl.from(".faq-item", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=1.0");
  }, { scope: containerRef });

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=Olá%2C%20gostaria%20de%20tirar%20uma%20dúvida.`;

  return (
    <section id="faq" ref={containerRef} className="py-24 md:py-32 px-6 bg-[#EBE9E4] dark:bg-[#0a0a0a] transition-colors duration-1000 ease-in-out">
      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN - STICKY HEADER */}
        <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-1/3 faq-sticky-content will-change-transform">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-ink-black dark:bg-white/30"></span>
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-ink-medium">
                        SUPORTE
                    </span>
                </div>
                
                <h2 className="font-serif text-fluid-h2 text-ink-black dark:text-white leading-[0.85] mb-8">
                    Dúvidas <br/>
                    <span className="text-ink-medium/50 italic font-light">Frequentes</span>
                </h2>

                <p className="font-sans text-sm leading-relaxed text-ink-dark dark:text-gray-400 max-w-sm mb-12 font-light tracking-wide border-l border-ink-black/10 dark:border-white/10 pl-4">
                    A transparência é fundamental para um processo criativo fluido. Aqui estão as respostas para as questões mais comuns.
                </p>

                <div className="hidden lg:block">
                     <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink-black dark:text-white border-b border-ink-black/30 dark:border-white/30 pb-2 hover:opacity-60 transition-all duration-500 hover:border-ink-black dark:hover:border-white group">
                        Falar no WhatsApp <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                     </a>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN - ACCORDION LIST */}
        <div className="lg:col-span-7 lg:col-start-6 faq-list-container">
            {ITENS_FAQ.map((item, index) => {
                const isOpen = openIndex === index;
                
                return (
                    <div 
                        key={item.id} 
                        className="faq-item border-b border-ink-black/10 dark:border-white/10 last:border-0 overflow-hidden"
                    >
                        <button 
                            id={`faq-btn-${item.id}`}
                            onClick={() => toggleAccordion(index)}
                            className="w-full py-10 flex items-start justify-between gap-6 group text-left outline-none cursor-pointer"
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${item.id}`}
                        >
                            <h3 className={`font-serif text-3xl md:text-4xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform ${
                                isOpen 
                                ? 'text-ink-black dark:text-white translate-x-4' 
                                : 'text-ink-dark/70 dark:text-gray-500 group-hover:text-ink-black dark:group-hover:text-white group-hover:translate-x-2'
                            }`}>
                                {item.pergunta}
                            </h3>
                            
                            <span className={`mt-1 shrink-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] text-ink-black dark:text-white ${
                                isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100 group-hover:rotate-90'
                            }`}>
                                <Plus size={28} strokeWidth={0.8} />
                            </span>
                        </button>

                        <div 
                            id={`faq-panel-${item.id}`}
                            role="region"
                            aria-labelledby={`faq-btn-${item.id}`}
                            className={`grid transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                                isOpen ? 'grid-rows-[1fr] mb-12' : 'grid-rows-[0fr] mb-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className={`font-sans text-base leading-loose text-ink-medium dark:text-gray-400 max-w-2xl pl-4 md:pl-8 border-l border-ink-black/5 dark:border-white/5 font-light transition-all duration-700 delay-100 ${
                                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                }`}>
                                    
                                    <p className="mb-8 whitespace-pre-line">{item.resposta}</p>
                                    
                                    {item.detalhes && item.detalhes.length > 0 && (
                                        <div className="pl-6 border-l-2 border-ink-black dark:border-white py-2">
                                            <ul className="space-y-3">
                                                {item.detalhes.map((detalhe, i) => (
                                                    <li 
                                                        key={i} 
                                                        className={`flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink-black dark:text-white transition-all duration-500 ease-out`}
                                                        style={{ 
                                                            transitionDelay: isOpen ? `${200 + (i * 100)}ms` : '0ms',
                                                            opacity: isOpen ? 1 : 0,
                                                            transform: isOpen ? 'translateX(0)' : 'translateX(-10px)'
                                                        }}
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-ink-black dark:bg-white rounded-full"></span>
                                                        {detalhe}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
            {/* Mobile Footer CTA */}
            <div className="mt-16 lg:hidden">
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink-black dark:text-white border-b border-ink-black/30 dark:border-white/30 pb-2">
                    Falar no WhatsApp <ArrowRight size={14} />
                 </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;