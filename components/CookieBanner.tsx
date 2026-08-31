"use client";

import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica consentimento prévio no localStorage
    const consent = localStorage.getItem('ws_cookie_consent');
    if (!consent) {
      // Delay sutil para não disputar atenção com a entrada inicial
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ws_cookie_consent', 'accepted');
    
    // Atualiza o Consent Mode do Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ws_cookie_consent', 'declined');
    setIsVisible(false);
  };

  const handleOpenPrivacy = () => {
    window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: { tab: 'privacy' } }));
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 z-[90] max-w-md bg-paper-light/95 dark:bg-[#161616]/95 backdrop-blur-md text-ink-black dark:text-gray-200 p-5 border border-ink-black/15 dark:border-white/15 shadow-2xl transition-all duration-500 animate-slideUp"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-black dark:text-white">
          <Cookie size={16} className="text-ink-medium dark:text-gray-400" />
          <span>Privacidade & Cookies</span>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Fechar aviso de cookies"
          className="text-ink-medium dark:text-gray-400 hover:text-ink-black dark:hover:text-white transition-colors"
          type="button"
        >
          <X size={16} />
        </button>
      </div>

      <p className="font-sans text-xs leading-relaxed text-ink-dark dark:text-gray-300 font-light mb-4">
        Utilizamos cookies analíticos (Google Analytics) para compreender o tráfego e aprimorar a experiência do portfólio. Ao continuar navegando, você concorda com nossos termos.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={handleAccept}
          type="button"
          className="flex-1 bg-ink-black dark:bg-white text-paper-light dark:text-ink-black py-2 px-4 font-sans text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
        >
          Aceitar
        </button>

        <button
          onClick={handleOpenPrivacy}
          type="button"
          className="py-2 px-3 border border-ink-black/20 dark:border-white/20 font-sans text-[11px] font-bold uppercase tracking-wider text-ink-dark dark:text-gray-300 hover:text-ink-black dark:hover:text-white hover:border-ink-black dark:hover:border-white transition-colors text-center"
        >
          Saiba mais
        </button>
      </div>
    </aside>
  );
};

export default CookieBanner;
