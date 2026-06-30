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

  const handleNextImage = useCallback(() => {
    if (!activeImage) return;
    const gallery = item.gallery || [item.image];
    const currentIndex = gallery.indexOf(activeImage);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % gallery.length;
      setActiveImage(gallery[nextIndex]);
    }
  }, [activeImage, item]);

  const handlePrevImage = useCallback(() => {
    if (!activeImage) return;
    const gallery = item.gallery || [item.image];
    const currentIndex = gallery.indexOf(activeImage);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
      setActiveImage(gallery[prevIndex]);
    }
  }, [activeImage, item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImage !== null) {
        if (e.key === 'Escape') {
          setActiveImage(null);
        } else if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        }
      } else {
        if (e.key === 'Escape') {
          handleClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, activeImage, handleNextImage, handlePrevImage]);


  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-paper-light dark:bg-paper-dark w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      tabIndex={-1}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-full relative">
            
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
                    {item.quote ? (
                      <p className="font-serif text-2xl italic leading-relaxed text-ink-dark dark:text-gray-300">
                          {item.quote}
                      </p>
                    ) : (
                      <p className="font-serif text-2xl italic leading-relaxed text-ink-dark dark:text-gray-300">
                          "O contraste perfeito revela a essência oculta do corpo."
                      </p>
                    )}
                    {item.description ? (
                      <p className="font-sans text-xs leading-loose uppercase tracking-widest text-ink-medium dark:text-gray-400 max-w-sm normal-case">
                          {item.description}
                      </p>
                    ) : (
                      <p className="font-sans text-xs leading-loose uppercase tracking-widest text-ink-medium dark:text-gray-400 max-w-sm">
                          Capturado para respeitar a fluidez e as sombras naturais da anatomia.
                          Desenho autoral que emula as gradações e a textura granulada das revelações cinematográficas clássicas.
                      </p>
                    )}
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
              
              {item.gallery && item.gallery.length > 0 ? (
                <div className="p-8 md:p-12 columns-1 sm:columns-2 gap-8 space-y-8 mt-20 lg:mt-0">
                  {item.gallery.map((imgUrl, idx) => (
                    <button 
                      key={idx}
                      className="w-full relative overflow-hidden cursor-zoom-in group outline-none block text-left break-inside-avoid shadow-2xl"
                      onClick={() => setActiveImage(imgUrl)}
                      type="button"
                      aria-label="Expandir foto da galeria"
                    >
                      <ProgressiveImage 
                        src={imgUrl.startsWith('http') ? `${imgUrl}&auto=format&fit=crop` : imgUrl} 
                        srcSet={imgUrl.startsWith('http') ? `${imgUrl}&w=400&auto=format&fit=crop 400w, ${imgUrl}&w=800&auto=format&fit=crop 800w, ${imgUrl}&w=1200&auto=format&fit=crop 1200w` : undefined}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        alt={`${item.title} gallery image ${idx + 1}`} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto"
                        imgClassName="modal-img-hero w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                        <span className="text-white text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">Ampliar</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  {/* Main Hero Image */}
                  <button 
                    className="w-full h-screen relative overflow-hidden cursor-zoom-in group outline-none block text-left" 
                    onClick={() => setActiveImage(item.image)}
                    type="button"
                    aria-label="Expandir foto principal"
                  >
                      <ProgressiveImage 
                        src={item.image.startsWith('http') ? `${item.image}&auto=format&fit=crop` : item.image} 
                        srcSet={item.image.startsWith('http') ? `${item.image}&w=600&auto=format&fit=crop 600w, ${item.image}&w=1200&auto=format&fit=crop 1200w, ${item.image}&w=2000&auto=format&fit=crop 2000w` : undefined}
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
                          src={item.image.startsWith('http') ? `${item.image}&auto=format&fit=crop` : item.image} 
                          srcSet={item.image.startsWith('http') ? `${item.image}&w=400&auto=format&fit=crop 400w, ${item.image}&w=800&auto=format&fit=crop 800w, ${item.image}&w=1200&auto=format&fit=crop 1200w` : undefined}
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
                        src={item.image.startsWith('http') ? `${item.image}&auto=format&fit=crop` : item.image} 
                        srcSet={item.image.startsWith('http') ? `${item.image}&w=600&auto=format&fit=crop 600w, ${item.image}&w=1200&auto=format&fit=crop 1200w, ${item.image}&w=2000&auto=format&fit=crop 2000w` : undefined}
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
                </>
              )}
            </div>
        </div>

      {activeImage && (
        <Lightbox 
          imageSrc={activeImage} 
          onClose={() => setActiveImage(null)} 
          onNext={(item.gallery && item.gallery.length > 1) ? handleNextImage : undefined}
          onPrev={(item.gallery && item.gallery.length > 1) ? handlePrevImage : undefined}
        />
      )}
    </div>
  );
};
export default ProjectDetail;
