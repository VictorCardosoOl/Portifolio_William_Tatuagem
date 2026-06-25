import React, { useRef } from 'react';
import { Zap, Crown, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FlashSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const flashFeatures = [
    "Desenhos exclusivos",
    "Valores promocionais",
    "Ordem de chegada"
  ];

  const fullDayFeatures = [
    "Diária fechada (6h - 8h)",
    "Projetos autorais",
    "Privacidade total"
  ];

  useGSAP(() => {
    // Animate Header
    gsap.from(".flash-header", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%"
        }
    });

    // Animate Cards with tight stagger
    gsap.from(".flash-card", {
        y: 50,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".flash-grid",
            start: "top 85%"
        }
    });
  }, { scope: containerRef });

  return (
    <section id="flash" ref={containerRef} className="bg-paper-light dark:bg-black py-16 md:py-24 px-6 border-y border-ink-light dark:border-white/10 transition-colors duration-500">
      <div className="max-w-screen-3xl mx-auto">
        
        <div className="flash-header flex flex-col md:flex-row justify-between items-end mb-12 border-b border-ink-light dark:border-white/10 pb-6">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-ink-medium font-bold mb-4">
                Eventos & Agenda
              </p>
              <h2 className="font-serif font-light text-fluid-h2 text-ink-black dark:text-white uppercase leading-[0.8] whitespace-pre-line">
                {TEXTOS_GERAIS.tituloFlash}
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0">
               <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 text-right font-bold">
                 Próxima Abertura: {TEXTOS_GERAIS.dataProximoEvento}
               </p>
            </div>
        </div>

        <div className="flash-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-light dark:bg-white/10 border border-ink-light dark:border-white/10">
          
          {/* CARD 1: FLASH DAY */}
          <div className="flash-card relative bg-paper-light dark:bg-[#121212] text-white p-8 md:p-12 flex flex-col justify-between min-h-[450px] md:min-h-[550px] overflow-hidden group">
            
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/50 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000&auto=format&fit=crop" 
                 alt="Colorful Tattoo Art" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
               />
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-[0.1] pointer-events-none z-20 text-white">
                <Zap size={250} strokeWidth={0.2} />
            </div>

            <div className="relative z-20">
              <div className="inline-flex items-center gap-3 bg-white text-black px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-bold mb-8">
                <Zap size={10} fill="currentColor" />
                Flash Day
              </div>

              <h2 className="font-serif font-light text-fluid-h3 leading-[0.9] text-white mb-4 drop-shadow-lg">
                Sessões Rápidas <br />
                <span className="italic font-thin text-gray-200">Catálogo Pronto</span>
              </h2>

              <p className="font-sans text-sm text-gray-100 leading-relaxed tracking-wide max-w-sm mb-8 font-light drop-shadow-md">
                O estúdio abre as portas para o público. Desenhos autorais pré-definidos, 
                valores especiais e atendimento por ordem de chegada.
              </p>

              <ul className="space-y-3 mb-8">
                {flashFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-200 drop-shadow-md">
                    <CheckCircle2 size={14} className="text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-1 drop-shadow-md">
                  <Calendar size={12} />
                  Próxima Data:
                </div>
                <div className="font-serif italic text-2xl text-white drop-shadow-lg">
                  15 . OUT
                </div>
              </div>

              <button className="bg-white text-black px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors flex items-center gap-3 group w-full md:w-auto justify-center">
                Ver Designs
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>


          {/* CARD 2: FULL DAY */}
          <div className="flash-card relative bg-[#1A1A1A] text-white p-8 md:p-12 flex flex-col justify-between min-h-[450px] md:min-h-[550px] overflow-hidden group">
            
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/70 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop" 
                 alt="Abstract Texture" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
               />
            </div>

            <div className="relative z-20">
              <div className="inline-flex items-center gap-3 bg-white text-black px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-bold mb-8">
                <Crown size={10} fill="currentColor" />
                Experiência VIP
              </div>

              <h2 className="font-serif font-light text-4xl md:text-5xl leading-[0.9] text-white mb-4">
                Full Day <br />
                <span className="italic font-thin text-gray-400">& Imersão Total</span>
              </h2>

              <p className="font-sans text-sm text-gray-300 leading-relaxed tracking-wide max-w-sm mb-8 font-light">
                "Aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. 
                Ideal para fechamentos de braço/costas.
              </p>

              <ul className="space-y-3 mb-8">
                {fullDayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                    <CheckCircle2 size={14} className="text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                  <Calendar size={12} />
                  Disponibilidade:
                </div>
                <div className="font-serif italic text-2xl text-white">
                  Sob Consulta
                </div>
              </div>

              <button className="bg-transparent border border-white text-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors flex items-center gap-3 group w-full md:w-auto justify-center">
                Solicitar Orçamento
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlashSection;