import React, { useState, useRef } from 'react';
import { TEXTOS_GERAIS, ITENS_CUIDADOS } from '@/data';
import { Plus, Minus, ShieldCheck, Droplet, Sun } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Aftercare: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIcon = (index: number) => {
     switch(index) {
       case 0: return <ShieldCheck className="w-4 h-4" />;
       case 1: return <Droplet className="w-4 h-4" />;
       case 2: return <Sun className="w-4 h-4" />;
       default: return <ShieldCheck className="w-4 h-4" />;
     }
  };

  useGSAP(() => {
    // Animação do Título
    gsap.from(".aftercare-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
        }
    });

    // Animação das Linhas divisórias
    gsap.from(".protocol-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: ".protocol-list",
            start: "top 80%"
        }
    });
  }, { scope: containerRef });

  return (
    <section id="cuidados" ref={containerRef} className="py-24 md:py-32 px-8 md:px-12 lg:px-16 bg-paper-light dark:bg-paper-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-screen-3xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 border-b border-ink-black/10 dark:border-white/10 pb-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 bg-accent-sepia rounded-full animate-pulse"></span>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium">
                        Protocolo de Cicatrização
                    </span>
                </div>
                <h2 className="aftercare-title font-serif font-light text-5xl md:text-7xl leading-[0.9] text-ink-black dark:text-gray-100">
                    A longevidade da arte <br/>
                    <span className="italic text-ink-medium/60 dark:text-gray-500">depende da sua dedicação.</span>
                </h2>
            </div>
            <div className="hidden md:block max-w-xs text-right">
                <p className="font-sans text-xs leading-relaxed text-ink-medium uppercase tracking-wider">
                    Siga rigorosamente as etapas abaixo para garantir a integridade do pigmento.
                </p>
            </div>
        </div>

        {/* PROTOCOL LIST (ACCORDION) */}
        <div className="protocol-list flex flex-col">
            {ITENS_CUIDADOS.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <article key={index} className="group cursor-pointer" onClick={() => toggleAccordion(index)}>
                        {/* HEADER ROW */}
                        <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-500">
                            <div className="flex items-baseline gap-6 md:gap-12">
                                <span className={`font-sans text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${isOpen ? 'text-accent-sepia' : 'text-ink-medium'}`}>
                                    {item.fase}
                                </span>
                                <h3 className={`font-serif text-3xl md:text-5xl transition-all duration-500 ${isOpen ? 'italic text-ink-black dark:text-white translate-x-4' : 'font-light text-ink-dark dark:text-gray-400 group-hover:text-ink-black dark:group-hover:text-white'}`}>
                                    {item.titulo}
                                </h3>
                            </div>
                            
                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                                <span className="md:hidden text-[10px] uppercase tracking-widest text-ink-medium">Ver Detalhes</span>
                                <div className={`w-10 h-10 rounded-full border border-ink-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-ink-black text-white rotate-180 dark:bg-white dark:text-black' : 'group-hover:border-ink-black'}`}>
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </div>
                        </div>

                        {/* EXPANDABLE CONTENT */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4 pl-0 md:pl-[calc(4rem+20px)]">
                                    
                                    {/* Description Column */}
                                    <div className="md:col-span-5">
                                        <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-dark dark:text-gray-300 italic mb-6 whitespace-pre-line">
                                            "{item.descricao}"
                                        </p>
                                        <div className="flex items-center gap-2 text-ink-medium dark:text-gray-500">
                                            {getIcon(index)}
                                            <span className="text-[10px] uppercase tracking-widest font-bold">Recomendação Oficial</span>
                                        </div>
                                    </div>

                                    {/* Steps Column */}
                                    <div className="md:col-span-6 md:col-start-7 border-l border-ink-black/10 dark:border-white/10 pl-8">
                                        <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-ink-black dark:text-white mb-6">
                                            Checklist
                                        </h4>
                                        <ul className="space-y-4">
                                            {item.lista.map((step, i) => (
                                                <li key={i} className="flex items-start group/li">
                                                    <span className="w-1.5 h-1.5 mt-2 mr-4 bg-ink-medium/40 dark:bg-white/40 rotate-45 group-hover/li:bg-accent-sepia transition-colors"></span>
                                                    <span className="font-sans text-sm md:text-base text-ink-dark dark:text-gray-400 font-light leading-relaxed group-hover/li:text-ink-black dark:group-hover/li:text-white transition-colors">
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Animated Divider Line */}
                        <div className="protocol-line h-[1px] w-full bg-ink-black/10 dark:bg-white/10 group-hover:bg-ink-black dark:group-hover:bg-white transition-colors duration-500" />
                    </article>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default Aftercare;