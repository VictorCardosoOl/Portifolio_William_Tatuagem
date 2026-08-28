'use client';
import React, { useEffect } from 'react';
import './eco.css';
import gsap from 'gsap';
import Lenis from 'lenis';
import { REDES_SOCIAIS, getWhatsAppUrl } from '@/config/data';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function EcoPage() {
  useEffect(() => {
    const mediaQueries = {
      mobile: window.matchMedia('(max-width: 768px)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
    };

    let lenisInstance: Lenis | null = null;

    const bootstrap = () => {
      const prefersReduced = mediaQueries.reducedMotion?.matches ?? false;
      const isMobile = mediaQueries.mobile?.matches ?? false;

      if (prefersReduced || isMobile) {
        document.documentElement.classList.add('fallback-scroll', 'eco-page-html');
      } else {
        document.documentElement.classList.remove('fallback-scroll');
        document.documentElement.classList.add('eco-page-html');
        lenisInstance = new Lenis({ lerp: 0.08, smoothWheel: true });
        gsap.ticker.add((time) => lenisInstance?.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      const ANIMATION_CONFIG = {
        EASE_ELASTIC: 'elastic.out(1, 0.85)',
        STAGGER: 0.12,
      };

      const timeline = gsap.timeline({ delay: 0.3 });
      const animatedElements = document.querySelectorAll('.anim-el');

      if (animatedElements.length > 0) {
        gsap.set(animatedElements, { visibility: 'visible' });

        if (!prefersReduced) {
          timeline.from(animatedElements, {
            opacity: 0,
            y: 20,
            stagger: ANIMATION_CONFIG.STAGGER,
            duration: 1.5,
            ease: ANIMATION_CONFIG.EASE_ELASTIC,
          });
        }
      }
    };

    bootstrap();

    return () => {
      if (lenisInstance) {
        gsap.ticker.remove((time) => lenisInstance?.raf(time * 1000));
        lenisInstance.destroy();
      }
      document.documentElement.classList.remove('fallback-scroll', 'eco-page-html');
    };
  }, []);

  return (
    <div className="eco-page-body">
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>

      <main id="main-content" className="app-container" style={{ margin: '0 auto' }}>
        
        {/* Hub de Links Estilo Artístico (Tatuador) */}
        <div className="mobile-layout">
          {/* Header Banner com Textos */}
          <div className="mobile-header">
            <div className="mobile-header-bg">
              <img src="/black-work/black-work-01.webp" alt="Tattoo Background" />
            </div>
            <div className="mobile-header-content anim-el">
              <p className="mobile-subtitle">ESTÚDIO DE TATUAGEM</p>
              <h1 className="mobile-title">
                <span>WILLIAM</span>
                <span>TATTOO</span>
              </h1>
            </div>
          </div>

          {/* Foto de Perfil Circular (sobreposta) */}
          <div className="mobile-profile-container anim-el">
            <div className="mobile-profile-pic">
              <img src="/about/direita.webp" alt="William Tatuador" />
            </div>
          </div>

          {/* Conteúdo Abaixo */}
          <div className="mobile-content-area">

            {/* Lista de Links */}
            <div className="mobile-links-list">
              <a href="/" className="mobile-list-item anim-el">
                <div className="item-thumb"><img src="/black-work/jaguar.webp" alt="Site Oficial" /></div>
                <div className="item-text">SITE OFICIAL / PORTFÓLIO</div>
                <div className="item-number">01</div>
              </a>
              <a 
                href={getWhatsAppUrl("Olá, William! Vim pelo link da bio e gostaria de consultar a agenda e fazer um orçamento.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-list-item anim-el"
              >
                <div className="item-thumb"><img src="/about/centro.webp" alt="WhatsApp" /></div>
                <div className="item-text">AGENDA / ORÇAMENTO</div>
                <div className="item-number">02</div>
              </a>
              <a href="https://instagram.com/wsiqueira" target="_blank" rel="noopener noreferrer" className="mobile-list-item anim-el">
                <div className="item-thumb"><img src="/about/esquerda.webp" alt="Instagram" /></div>
                <div className="item-text">INSTAGRAM</div>
                <div className="item-number">03</div>
              </a>
            </div>

            {/* Ícones Sociais Nativos */}
            <div className="mobile-social-row anim-el">
              <a href="https://instagram.com/wsiqueira" target="_blank" rel="noopener noreferrer" aria-label="Instagram de William Siqueira">
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a 
                href={getWhatsAppUrl("Olá, William! Gostaria de conversar sobre uma tatuagem.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp de William Siqueira"
              >
                <MessageCircle size={24} strokeWidth={1.5} />
              </a>
              <a href="mailto:willtintamais@gmail.com" aria-label="E-mail de William Siqueira">
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>

            {/* Copyright */}
            <footer className="mobile-footer anim-el">
              <p>&copy; {new Date().getFullYear()} William Tatuagem. Todos os direitos reservados.</p>
            </footer>

          </div>
        </div>

      </main>
    </div>
  );
}

