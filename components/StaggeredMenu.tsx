"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScroll } from '@/context/ScrollContext';
import { TEXTOS_GERAIS } from '@/config/data';
import { useSmartScroll } from '@/hooks/useSmartScroll';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  position?: 'left' | 'right';
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: string[];
  accentColor?: string;
  isFixed?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  closeOnClickAway?: boolean;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items,
  socialItems,
  displaySocials = true,
  displayItemNumbering = true,
  position = 'right',
  menuButtonColor = '#000000',
  openMenuButtonColor = '#ffffff',
  changeMenuColorOnOpen = true,
  colors = ['#1a1a1a', '#333333', '#4d4d4d', '#666666'],
  accentColor = '#cccccc',
  isFixed = true,
  onMenuOpen,
  onMenuClose,
  closeOnClickAway = true,
}) => {
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<Element[]>([]);
  const plusHRef = useRef<HTMLSpanElement>(null);
  const plusVRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textInnerRef = useRef<HTMLSpanElement>(null);
  const textWrapRef = useRef<HTMLSpanElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [textLines, setTextLines] = useState(['Menu', 'Fechar']);

  // Smart Navbar State encapsulado
  const isVisible = useSmartScroll({ open });

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  const { stopScroll, startScroll } = useScroll();

  useGSAP(() => {
    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    const plusH = plusHRef.current;
    const plusV = plusVRef.current;
    const icon = iconRef.current;
    const textInner = textInnerRef.current;
    if (!panel || !plusH || !plusV || !icon || !textInner) return;

    let preLayers: Element[] = [];
    if (preContainer) {
      preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
    }
    preLayerElsRef.current = preLayers;

    const offscreen = position === 'left' ? -100 : 100;
    gsap.set([panel, ...preLayers], { xPercent: offscreen });
    gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
    gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
    gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
    gsap.set(textInner, { yPercent: 0 });
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    // Reset de animações anteriores (Guard)
    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    // Configuração de estado inicial em lote
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // 1. Animar camadas (layers)
    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    
    // 2. Animar painel principal
    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime);

    // 3. Early return se não houver itens para animar internamente
    if (!itemEls.length && !socialTitle && !socialLinks.length) {
      openTlRef.current = tl;
      return tl;
    }

    const itemsStart = panelInsertTime + panelDuration * 0.15;
    const socialsStart = panelInsertTime + panelDuration * 0.4;

    // 4. Animar Itens de Menu
    if (itemEls.length) {
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } }, itemsStart);
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } }, itemsStart + 0.1);
      }
    }

    // 5. Animar Redes Sociais
    if (socialTitle) {
      tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
    }
    if (socialLinks.length) {
      tl.to(socialLinks, { 
        y: 0, 
        opacity: 1, 
        duration: 0.55, 
        ease: 'power3.out', 
        stagger: { each: 0.08, from: 'start' }, 
        onComplete: () => gsap.set(socialLinks, { clearProps: 'opacity' }) 
      }, socialsStart + 0.04);
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback((onCompleteCallback?: () => void) => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;

        if (onCompleteCallback) {
          onCompleteCallback();
        }
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Fechar';
    const targetLabel = opening ? 'Fechar' : 'Menu';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Fechar' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !open;
    setOpen(target);
    if (target) {
      stopScroll();
      onMenuOpen?.();
      playOpen();
    } else {
      startScroll();
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateText(target);
  }, [open, playOpen, playClose, animateIcon, animateText, onMenuOpen, onMenuClose, stopScroll, startScroll]);

  const closeMenu = useCallback((onCompleteCallback?: () => void) => {
    if (open) {
      setOpen(false);
      startScroll();
      onMenuClose?.();
      playClose(onCompleteCallback);
      animateIcon(false);
      animateText(false);
    } else {
      if (onCompleteCallback) {
        onCompleteCallback();
      }
    }
  }, [open, playClose, animateIcon, animateText, onMenuClose, startScroll]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div
      className={`staggered-menu-wrapper ${isFixed ? 'fixed-wrapper' : ''}`}
      style={accentColor ? ({ '--sm-accent': accentColor } as React.CSSProperties) : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {colors.slice(0, 4).map((c, i) => (
            <div key={i} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>
      
      <header 
        className={`staggered-menu-header transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-label="Main navigation header"
      >
        <div 
            className="sm-logo" 
            aria-label="Logo" 
            onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); closeMenu(); }}
        >
            <span className="font-serif text-2xl 3xl:text-3xl tracking-widest uppercase select-none font-bold">
               {TEXTOS_GERAIS.marca.split(' ')[0]}.S
            </span>
        </div>
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line" style={{ transform: 'translate(-50%, -50%) rotate(90deg)' }} />
          </span>
        </button>
      </header>

      <aside 
        id="staggered-menu-panel" 
        ref={panelRef} 
        className="staggered-menu-panel" 
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="sm-panel-inner">
          <nav aria-label="Navegação principal">
            <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
              {items.map((it, idx) => (
                  <li className="sm-panel-itemWrap" key={it.label + idx}>
                    <a 
                      className="sm-panel-item" 
                      href={it.link} 
                      aria-label={it.ariaLabel} 
                      data-index={idx + 1}
                      data-tracking={`menu-principal-${it.label.toLowerCase()}`}
                      onClick={handleLinkClick}
                      tabIndex={open ? 0 : -1}
                    >
                      <span className="sm-panel-itemLabel">{it.label}</span>
                    </a>
                  </li>
              ))}
            </ul>
          </nav>
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Redes Sociais">
              <h3 className="sm-socials-title">Redes Sociais</h3>
              <nav aria-label="Navegação de redes sociais">
                <ul className="sm-socials-list" role="list">
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a 
                        href={s.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="sm-socials-link"
                        data-tracking={`menu-social-${s.label.toLowerCase()}`}
                        tabIndex={open ? 0 : -1}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
