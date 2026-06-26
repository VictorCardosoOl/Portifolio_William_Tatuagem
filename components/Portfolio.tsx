import React, { useState, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ProjectDetail } from './ProjectDetail';
import { ProgressiveImage } from './ProgressiveImage';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItemProps {
    item: PortfolioItem;
    onClick: (item: PortfolioItem) => void;
    isLarge?: boolean;
}

const PortfolioItemComponent: React.FC<PortfolioItemProps> = ({ item, onClick, isLarge }) => {
  return (
    <button 
        className="portfolio-item-anim group relative mb-8 w-full block text-left outline-none"
        onClick={() => onClick(item)}
        type="button"
        aria-label={`Ver detalhes do projeto ${item.title} no ${item.placement.toLowerCase()}`}
    >
        <div className={`relative overflow-hidden w-full bg-gray-200 dark:bg-gray-800 transition-all duration-700 ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/5] md:aspect-[3/4]'}`}>
            <ProgressiveImage 
                src={item.image.startsWith('http') ? `${item.image}&auto=format&fit=crop` : item.image}
                srcSet={item.image.startsWith('http') ? `${item.image}&w=400&auto=format&fit=crop 400w, ${item.image}&w=800&auto=format&fit=crop 800w, ${item.image}&w=1200&auto=format&fit=crop 1200w` : undefined}
                sizes={isLarge ? "(max-width: 1024px) 100vw, 80vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                alt={`${item.title} tattoo on ${item.placement}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105 will-change-transform"
            />
            
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-white text-xs uppercase tracking-widest font-bold">View Project</span>
                </div>
            </div>
        </div>

        <div className="mt-5 flex flex-col items-start gap-1">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-medium font-bold group-hover:text-ink-black dark:group-hover:text-white transition-colors duration-300">
                {item.placement}
            </span>
            <h3 className="font-serif font-light italic text-3xl md:text-4xl text-ink-black dark:text-paper-light group-hover:translate-x-2 transition-transform duration-300 ease-out">
                {item.title}
            </h3>
        </div>
    </button>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.batch(".portfolio-item-anim", {
        onEnter: (batch) => {
            gsap.fromTo(batch, 
                { opacity: 0, y: 80, scale: 0.98 }, 
                { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 1.2, ease: "power2.out", overwrite: true }
            );
        },
        start: "top 95%"
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="w-full bg-paper-light dark:bg-paper-dark py-20 md:py-28 px-8 md:px-12 lg:px-16 relative border-t border-ink-light dark:border-white/5">
      
      {/* Title / Section Header */}
      <div className="max-w-screen-3xl mx-auto mb-20 border-b border-ink-light dark:border-white/5 pb-6 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-serif font-light text-fluid-h2 text-ink-black dark:text-paper-light uppercase leading-[0.85]">
            Selected <br/> 
            <span className="italic font-extralight text-ink-medium">Works</span>
          </h2>
          <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-100 text-right font-bold text-ink-black mt-6 md:mt-0">
            Galeria da Pele
          </p>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="max-w-screen-3xl mx-auto flex flex-col gap-24 md:gap-36">
        
        {/* ROW 1: Wide Banner Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 lg:col-start-1">
            <PortfolioItemComponent item={PORTFOLIO_ITEMS[0]} onClick={setSelectedItem} isLarge={true} />
          </div>
          <div className="lg:col-span-3 lg:col-start-10 hidden lg:block border-l border-ink-light dark:border-white/5 pl-8 py-12">
            <p className="font-serif italic text-lg leading-relaxed text-ink-medium dark:text-gray-400">
              "Traduzindo ideias para o papel, do papel para a pele"
            </p>
          </div>
        </div>

        {/* ROW 2: Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 lg:col-start-2 lg:mt-12">
            <PortfolioItemComponent item={PORTFOLIO_ITEMS[1]} onClick={setSelectedItem} />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <PortfolioItemComponent item={PORTFOLIO_ITEMS[2]} onClick={setSelectedItem} />
          </div>
        </div>

        {/* ROW 3: Full Screen Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-10 lg:col-start-2">
            <PortfolioItemComponent item={PORTFOLIO_ITEMS[3]} onClick={setSelectedItem} isLarge={true} />
          </div>
        </div>

        {/* ROW 4: Dynamic Alternate Offset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 lg:col-start-4 lg:mt-12">
            <PortfolioItemComponent item={PORTFOLIO_ITEMS[4]} onClick={setSelectedItem} />
          </div>
        </div>

      </div>

      {selectedItem && (
        <ProjectDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default Portfolio;