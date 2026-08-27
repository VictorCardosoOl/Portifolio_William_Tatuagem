'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { initLiquidGlass } from './liquid-glass';
import './eco.css';
import gsap from 'gsap';
import Lenis from 'lenis';

export default function EcoPage() {
  useEffect(() => {
    // Lenis / AppManager logic from main.ts
    const mediaQueries = {
      mobile: window.matchMedia('(max-width: 768px)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
    };

    let lenisInstance: any = null;
    let cleanupLiquidGlass: any = null;

    const bootstrap = () => {
      // Init Scroll
      const prefersReduced = mediaQueries.prefersReducedMotion?.matches ?? false;
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

      // Entrance Sequence
      const ANIMATION_CONFIG = {
        EASE_EXPO: 'power4.out',
        EASE_ELASTIC: 'elastic.out(1, 0.85)',
        STAGGER: 0.12,
      };

      const timeline = gsap.timeline({ delay: 0.3 });
      const heroCover = document.querySelector('.hero-cover');
      const profileName = document.querySelector('.profile-name');
      const animatedElements = document.querySelectorAll('.anim-el');

      if (heroCover && !prefersReduced) {
        timeline.from(heroCover, {
          opacity: 0,
          scale: 1.05,
          duration: 1.5,
          ease: ANIMATION_CONFIG.EASE_EXPO,
        });
      }

      if (profileName) {
        const headerElements = document.querySelectorAll('.card-header > *');
        if (headerElements.length > 0) {
          timeline.from(headerElements, {
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 1.5,
            ease: ANIMATION_CONFIG.EASE_ELASTIC,
          }, heroCover ? '-=1.2' : 0);
        }
      }

      if (animatedElements.length > 0) {
        gsap.set(animatedElements, { visibility: 'visible' });

        if (!prefersReduced) {
          timeline.from(animatedElements, {
            opacity: 0,
            y: 20,
            stagger: ANIMATION_CONFIG.STAGGER,
            duration: 1.5,
            ease: ANIMATION_CONFIG.EASE_ELASTIC,
          }, '-=1.2');
        }
      }

      cleanupLiquidGlass = initLiquidGlass();
    };

    bootstrap();

    return () => {
      if (lenisInstance) {
        gsap.ticker.remove((time) => lenisInstance?.raf(time * 1000));
        lenisInstance.destroy();
      }
      if (cleanupLiquidGlass) {
        cleanupLiquidGlass();
      }
      document.documentElement.classList.remove('fallback-scroll', 'eco-page-html');
    };
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const message = formData.get('message');
    const targetNumber = '5511977440146';
    const text = `Olá! Meu nome é ${firstName} ${lastName}.\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="eco-page-body">
      {/* IonIcons CDN */}
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="afterInteractive" />
      <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="afterInteractive" />
      
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>

      <main id="main-content" className="app-container" style={{ margin: '0 auto' }}>
        
        {/* [DESKTOP ONLY] Card Esquerdo: Formulário WhatsApp */}
        <section className="profile-card desktop-only">
          <div className="card-header anim-el" style={{ textAlign: 'left', alignItems: 'flex-start', paddingBottom: '2rem' }}>
            <h1 className="profile-name" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400 }}>Vamos Conversar</h1>
          </div>
          
          {/* Links em Pílula [DESKTOP] */}
          <nav className="links-section anim-el" aria-label="Links Sociais Desktop" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '0.8rem', marginTop: '-1rem', marginBottom: '2rem' }}>
            <a href="https://victorcardoso.vercel.app/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ width: 'auto', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Portfólio
            </a>
            <a href="https://github.com/VictorCardosoOl" target="_blank" rel="noopener noreferrer" className="link-item" style={{ width: 'auto', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Repositório
            </a>
            <a href="https://www.linkedin.com/in/victor-card-cunha/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ width: 'auto', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              LinkedIn
            </a>
          </nav>

          <form id="whatsapp-form" className="contact-form anim-el" onSubmit={handleWhatsAppSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="firstName" name="firstName" placeholder="Nome" required />
              </div>
              <div className="form-group">
                <input type="text" id="lastName" name="lastName" placeholder="Sobrenome" required />
              </div>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" placeholder="Mensagem" rows={1} required></textarea>
            </div>

            <div className="form-submit-container">
              <button type="submit" className="submit-btn">Enviar</button>
            </div>
          </form>

          <footer className="contact-footer anim-el">
            <div className="contact-info">
              <span className="info-label">ENDEREÇO</span>
              <p>123 Balboa Boulevard Newport<br/>Beach, CA 92662</p>
            </div>
            <div className="contact-info">
              <span className="info-label">E-MAIL</span>
              <p>hello@sasha.com</p>
            </div>
          </footer>
          
          {/* Grade de Ícones Sociais [DESKTOP] */}
          <div className="social-icons-grid anim-el" style={{ marginTop: '2rem', justifyContent: 'flex-start', gap: '1.5rem' }}>
            <a href="https://instagram.com/abaxu_artes" target="_blank" rel="noopener noreferrer" aria-label="Acessar Instagram">
              <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
            </a>
            <a href="mailto:victorcardosovc1@gmail.com" aria-label="Enviar Email">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </a>
            <a href="https://wa.me/5511977440146" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
              <ion-icon name="logo-whatsapp" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </section>

        {/* HERO COVER: Usado no desktop (direita) */}
        <section className="hero-cover desktop-only">
          {/* Circular Badge [DESKTOP ONLY] */}
          <div className="circular-badge desktop-only">
            <svg viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text>
                <textPath href="#circlePath" startOffset="0%" textLength="215" fontFamily="sans-serif" fontSize="8.5" fontWeight="bold" letterSpacing="0.1em">VAMOS TRABALHAR • VAMOS TRABALHAR • </textPath>
              </text>
            </svg>
          </div>
          <img
            src="/eco/avatar.jpg"
            alt="Retrato de Victor Cardoso"
            loading="eager"
            width="420"
            height="480"
          />
        </section>

        {/* [MOBILE ONLY] Novo LinkTree Estilo Miss Mystik */}
        <div className="mobile-layout mobile-only">
          {/* Header Banner com Textos */}
          <div className="mobile-header">
            <div className="mobile-header-bg">
              <img src="/eco/avatar.jpg" alt="Background Texture" />
            </div>
            <div className="mobile-header-content anim-el">
              <p className="mobile-subtitle">EP 'CURRAGH' DROPPING SOON</p>
              <h1 className="mobile-title">
                <span>MISS</span>
                <span>MYSTIK</span>
              </h1>
            </div>
          </div>

          {/* Foto de Perfil Circular (sobreposta) */}
          <div className="mobile-profile-container anim-el">
            <div className="mobile-profile-pic">
              <img src="/eco/avatar.jpg" alt="Profile" />
            </div>
          </div>

          {/* Conteúdo Abaixo */}
          <div className="mobile-content-area">
            
            {/* Ícones Sociais */}
            <div className="mobile-social-row anim-el">
              <a href="https://instagram.com/abaxu_artes" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="#"><ion-icon name="cloud-outline"></ion-icon></a>
              <a href="#"><ion-icon name="logo-soundcloud"></ion-icon></a>
              <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
              <a href="#"><ion-icon name="musical-notes-outline"></ion-icon></a>
            </div>

            {/* Card em Destaque (Player) */}
            <div className="mobile-featured-card anim-el">
              <div className="featured-cover">
                <img src="/eco/avatar.jpg" alt="Cover" />
                <div className="play-button"><ion-icon name="play"></ion-icon></div>
              </div>
              <div className="featured-details">
                <h4>Heart Plains</h4>
                <p>Miss Mystik</p>
                <div className="progress-bar-mock"></div>
              </div>
              <div className="featured-brand">
                <ion-icon name="logo-soundcloud"></ion-icon>
              </div>
            </div>

            {/* Lista de Links */}
            <div className="mobile-links-list">
              <a href="https://victorcardoso.vercel.app/" target="_blank" rel="noopener noreferrer" className="mobile-list-item anim-el">
                <div className="item-thumb"><img src="/eco/avatar.jpg" alt="Thumb" /></div>
                <div className="item-text">WEBSITE</div>
                <div className="item-number">01</div>
              </a>
              <a href="https://github.com/VictorCardosoOl" target="_blank" rel="noopener noreferrer" className="mobile-list-item anim-el">
                <div className="item-thumb"><img src="/eco/avatar.jpg" alt="Thumb" /></div>
                <div className="item-text">TOUR</div>
                <div className="item-number">02</div>
              </a>
              <a href="https://www.linkedin.com/in/victor-card-cunha/" target="_blank" rel="noopener noreferrer" className="mobile-list-item anim-el">
                <div className="item-thumb"><img src="/eco/avatar.jpg" alt="Thumb" /></div>
                <div className="item-text">MERCH</div>
                <div className="item-number">03</div>
              </a>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
