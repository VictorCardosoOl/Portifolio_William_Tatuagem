import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { X, ArrowRight, ArrowDown } from 'lucide-react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScroll } from '../context/ScrollContext';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { Lightbox } from './Lightbox';
import { ProgressiveImage } from './ProgressiveImage';

interface ProjectDetailProps {
  item: PortfolioItem;
  onClose: () => void;
}

const getEXIFData = (id: number) => {
  const data: Record<number, { camera: string; lens: string; exposure: string; specs: string }> = {
    1: { camera: "Leica M11 Mono", lens: "Summilux 50mm f/1.4 ASPH", exposure: "1/250s · f/1.4 · ISO 64", specs: "60MP Ultra-Res / Monochromatic Sensor" },
    2: { camera: "Sony A1", lens: "FE 85mm f/1.4 GM", exposure: "1/200s · f/1.4 · ISO 100", specs: "50MP 4K HDR / Studio Lighting Grade" },
    3: { camera: "Hasselblad X2D 100C", lens: "XCD 38mm f/2.5", exposure: "1/125s · f/2.8 · ISO 64", specs: "100MP Medium Format / Natural Color Solution" },
    4: { camera: "Sony A7R V", lens: "FE 90mm f/2.8 Macro G OSS", exposure: "1/160s · f/4.0 · ISO 200", specs: "61MP High Macro Detail / Ring Light Setup" },
    5: { camera: "Leica SL3", lens: "Apo-Summicron-SL 75mm f/2", exposure: "1/500s · f/2.0 · ISO 400", specs: "60MP Tri-Resolution / Editorial Contrast Profile" },
    6: { camera: "Sony A1", lens: "FE 50mm f/1.2 GM", exposure: "1/320s · f/1.2 · ISO 100", specs: "50MP Cinematic Contrast / Low Light Enhancement" },
  };
  return data[id] || { camera: "Leica M11 Mono", lens: "Summilux 50mm f/1.4 ASPH", exposure: "1/250s · f/1.4 · ISO 64", specs: "60MP Ultra-Res" };
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ item, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { stopScroll, startScroll } = useScroll();

  useFocusTrap(containerRef, true);

  // Cinematic Entrance Animation - Slow and deliberate
  useGSAP(() => {
    document.body.style.overflow = 'hidden';
    stopScroll();

    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)" },
      { 
          clipPath: "inset(0% 0% 0% 0%)", 
          duration: 1.6, 
          ease: "power3.inOut",
          onComplete: () => {
              if (containerRef.current) containerRef.current.style.clipPath = '';
          }
      }
    );

    tl.fromTo(".modal-img-hero",
      { scale: 1.15, yPercent: 5, filter: "blur(10px)" },
      { scale: 1, yPercent: 0, filter: "blur(0px)", duration: 2.2, ease: "power2.out" },
      "-=1.2"
    );

    tl.fromTo(".modal-text-anim", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" },
      "-=1.5"
    );

    return () => {
      document.body.style.overflow = '';
      startScroll();
    };
  }, { scope: containerRef });

  useEffect(() => {
    if (!containerRef.current) return;

    const modalLenis = new Lenis({
      wrapper: containerRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      modalLenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      modalLenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClose = useCallback(() => {
    if (containerRef.current) {
        const tl = gsap.timeline({
            onComplete: onClose
        });

        tl.to([".modal-text-anim", ".modal-img-hero", ".modal-img-secondary"], {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.in"
        });

        tl.to(containerRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.2,
            ease: "power3.inOut"
        }, "-=0.4");

    } else {
        onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImage !== null) {
        if (e.key === 'Escape') {
          setActiveImage(null);
        } else if (e.key === 'ArrowRight') {
          const currentIndex = PORTFOLIO_ITEMS.findIndex(p => p.image === activeImage);
          if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
            setActiveImage(PORTFOLIO_ITEMS[nextIndex].image);
          }
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = PORTFOLIO_ITEMS.findIndex(p => p.image === activeImage);
          if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
            setActiveImage(PORTFOLIO_ITEMS[prevIndex].image);
          }
        }
      } else {
        if (e.key === 'Escape') {
          handleClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, activeImage]);

  const exif = getEXIFData(item.id);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-paper-light dark:bg-paper-dark w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      tabIndex={-1}
    >
      <div className="flex flex-col lg:flex-row w-full h-full relative">
            
            {/* LEFT PANEL: TEXT & INFO */}
            <div className="lg:w-[35%] w-full lg:fixed lg:left-0 lg:top-0 lg:h-full bg-paper-light dark:bg-paper-dark text-ink-black dark:text-paper-light flex flex-col justify-between p-8 md:p-12 border-r border-ink-light dark:border-white/5 z-20 shrink-0">
              
              <div className="modal-text-anim flex justify-between items-start mb-12 lg:mb-0">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium mb-2">Exhibition 0{item.id}</p>
                  <h1 id="project-title" className="font-serif italic text-5xl md:text-6xl font-light leading-none">{item.title}</h1>
                </div>
                <button 
                    onClick={handleClose} 
                    className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-ink-medium transition-colors p-2"
                    aria-label="Fechar detalhes do projeto"
                >
                    Close <X size={20} className="group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
                </button>
              </div>

              <div className="lg:hidden modal-text-anim mb-8 text-ink-medium animate-pulse">
                <ArrowDown size={24} />
              </div>

              <div className="hidden lg:block space-y-12">
                <div className="space-y-6 modal-text-anim">
                    <div className="w-12 h-px bg-ink-black dark:bg-white mb-6"></div>
                    <p className="font-serif text-2xl italic leading-relaxed text-ink-dark dark:text-gray-300">
                        "O contraste perfeito revela a essência oculta do corpo."
                    </p>
                    <p className="font-sans text-xs leading-loose uppercase tracking-widest text-ink-medium dark:text-gray-400 max-w-sm">
                        Capturado para respeitar a fluidez e as sombras naturais da anatomia.
                        Desenho autoral que emula as gradações e a textura granulada das revelações cinematográficas clássicas.
                    </p>
                </div>

                {/* EXIF Technical Data Section */}
                <div className="border-t border-ink-light dark:border-white/5 pt-8 modal-text-anim space-y-6">
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-medium font-bold">Metadata / Capture Settings</h4>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h5 className="font-sans text-[9px] uppercase tracking-widest text-ink-medium mb-1">Camera Body</h5>
                            <p className="font-serif italic text-lg leading-tight">{exif.camera}</p>
                        </div>
                        <div>
                            <h5 className="font-sans text-[9px] uppercase tracking-widest text-ink-medium mb-1">Lens System</h5>
                            <p className="font-serif italic text-lg leading-tight">{exif.lens}</p>
                        </div>
                        <div>
                            <h5 className="font-sans text-[9px] uppercase tracking-widest text-ink-medium mb-1">Exposure Profile</h5>
                            <p className="font-serif italic text-lg leading-tight">{exif.exposure}</p>
                        </div>
                        <div>
                            <h5 className="font-sans text-[9px] uppercase tracking-widest text-ink-medium mb-1">Format Specification</h5>
                            <p className="font-serif italic text-lg leading-tight">{exif.specs}</p>
                        </div>
                    </div>
                </div>
              </div>

              <div className="pt-12 lg:pt-0 modal-text-anim">
                <button className="w-full bg-ink-black dark:bg-white text-paper-light dark:text-ink-black py-4 px-6 flex justify-between items-center group hover:bg-[#333] dark:hover:bg-[#ccc] transition-colors" type="button">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">Solicitar Agendamento</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT PANEL: VISUALS */}
            <div className="lg:w-[65%] lg:ml-[35%] w-full bg-paper-warm dark:bg-[#111] pb-24 lg:pb-0">
              
              {/* Main Hero Image */}
              <button 
                className="w-full h-screen relative overflow-hidden cursor-zoom-in group outline-none block text-left" 
                onClick={() => setActiveImage(item.image)}
                type="button"
                aria-label="Expandir foto principal"
              >
                  <ProgressiveImage 
                    src={`${item.image}&auto=format&fit=crop`} 
                    srcSet={`${item.image}&w=600&auto=format&fit=crop 600w, ${item.image}&w=1200&auto=format&fit=crop 1200w, ${item.image}&w=2000&auto=format&fit=crop 2000w`}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    alt={`${item.title} main view`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full"
                    imgClassName="modal-img-hero w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">Ampliar Foto</span>
                  </div>
              </button>

              {/* Detail Box */}
              <div className="w-full min-h-[80vh] bg-paper-light dark:bg-black p-12 md:p-24 flex items-center justify-center">
                  <button 
                    className="modal-img-secondary w-full aspect-[4/5] relative overflow-hidden shadow-2xl cursor-zoom-in group outline-none text-left"
                    onClick={() => setActiveImage(item.image)}
                    type="button"
                    aria-label="Expandir foto de detalhe"
                  >
                    <ProgressiveImage 
                      src={`${item.image}&auto=format&fit=crop`} 
                      srcSet={`${item.image}&w=400&auto=format&fit=crop 400w, ${item.image}&w=800&auto=format&fit=crop 800w, ${item.image}&w=1200&auto=format&fit=crop 1200w`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy" 
                      decoding="async" 
                      alt={`${item.title} detail view`} 
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover scale-150 origin-top-left grayscale hover:grayscale-0 transition-all duration-700 modal-img-secondary" 
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-white text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">Ampliar Foto</span>
                    </div>
                  </button>
              </div>

              {/* Texture/Artistic View - Full Height */}
              <button 
                className="modal-img-secondary w-full h-screen relative overflow-hidden grayscale cursor-zoom-in group outline-none block text-left"
                onClick={() => setActiveImage(item.image)}
                type="button"
                aria-label="Expandir foto artística"
              >
                  <ProgressiveImage 
                    src={`${item.image}&auto=format&fit=crop`} 
                    srcSet={`${item.image}&w=600&auto=format&fit=crop 600w, ${item.image}&w=1200&auto=format&fit=crop 1200w, ${item.image}&w=2000&auto=format&fit=crop 2000w`}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    loading="lazy" 
                    decoding="async" 
                    alt={`${item.title} texture view`} 
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-[3s] modal-img-secondary" 
                  />
                  <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-4 border border-white/20 z-10">
                    <p className="font-mono text-xs text-white uppercase tracking-widest">Fig 03. , Texture Analysis</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">Ampliar Foto</span>
                  </div>
              </button>

            </div>
        </div>

      {activeImage && (
        <Lightbox imageSrc={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </div>
  );
};
export default ProjectDetail;
