import React, { useRef } from 'react';
import { TEXTOS_GERAIS } from '../data';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const { sobre } = TEXTOS_GERAIS;
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Title Lines - Fast Mask Reveal
    gsap.from(".about-title-line", {
      yPercent: 100,
      rotate: 3,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-text-container",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // 2. Body Text - Fade Up Snap
    gsap.from([".about-body", ".about-cta"], {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text-container",
        start: "top 80%",
      }
    });

    // 3. Image Grid Stagger
    gsap.from(".about-image-card", {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 90%",
      }
    });

    // 4. Parallax with Physical Weight
    gsap.utils.toArray(".about-image-card").forEach((card: any) => {
      const img = card.querySelector('img');
      if (img) {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="bg-paper-light dark:bg-background-dark py-16 md:py-24 px-6 w-full overflow-hidden">
      <div className="max-w-screen-3xl mx-auto">
        
        {/* Top Section: Text Content - Aligned to RIGHT */}
        <div className="about-text-container flex flex-col items-end text-right mb-16 md:mb-24">
          <div className="max-w-4xl 3xl:max-w-5xl">
            
            {/* New Title Format */}
            <h2 className="font-sans font-black text-fluid-h1 leading-[0.9] text-ink-black dark:text-white mb-8 tracking-tighter uppercase text-right">
              <div className="overflow-hidden"><span className="about-title-line block origin-top-left">{sobre.titulo}</span></div>
            </h2>
            
            {/* New Description Format - Aligned Right */}
            <div className="about-body max-w-lg mt-8 mb-10 ml-auto space-y-8">
               <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-dark dark:text-gray-300 whitespace-pre-line">
                  {sobre.paragrafo1}
               </p>
               <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-dark dark:text-gray-300 whitespace-pre-line">
                  {sobre.paragrafo2}
               </p>
            </div>

            {/* CTA Button */}
            <div className="about-cta flex justify-end">
                <a href="#concept" className="group inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase text-accent-sepia dark:text-gray-400 hover:text-ink-black dark:hover:text-white transition-colors">
                    Entenda o Processo 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Image Grid (Maintained) */}
        <div className="about-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 3xl:gap-8">
          {sobre.imagens.map((item, index) => (
            <div key={index} className="about-image-card aspect-[3/4] overflow-hidden w-full relative group cursor-crosshair will-change-transform">
              
              {/* Layer 1: Grayscale Base with Parallax Wrapper */}
              <div className="w-full h-[120%] -mt-[10%] relative">
                 <img 
                    src={item.url} 
                    alt={item.alt}
                    loading="lazy" 
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90 will-change-transform"
                 />
              </div>

              {/* Layer 2: Color Reveal Overlay */}
              <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10 overflow-hidden">
                 <div className="w-full h-[120%] -mt-[10%] relative">
                    <img 
                      src={item.url} 
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                 </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="font-sans text-[9px] tracking-[0.3em] bg-primary text-white px-3 py-1 uppercase font-bold">Fig. 0{index + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;