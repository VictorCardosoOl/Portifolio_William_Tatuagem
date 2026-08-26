"use client";

import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose, onNext, onPrev }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reseta o zoom e a posição ao mudar de imagem
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [imageSrc]);

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation(); // Previne que o scroll passe para elementos abaixo
    
    setScale(prev => {
      // Ajusta a sensibilidade do scroll
      const zoomFactor = -e.deltaY * 0.002;
      const newScale = Math.min(Math.max(prev + zoomFactor, 0.5), 5); // Limite de 0.5x até 5x
      
      // Se voltou ao tamanho normal ou menor, reseta o pan (arrasto)
      if (newScale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      
      return newScale;
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 transition-opacity duration-300 ease-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em tela cheia"
      onWheel={(e) => {
        // Previne o wheel na overlay de causar scroll na pagina se não estivermos no img
        e.stopPropagation();
      }}
    >
      {/* Indicador de Zoom */}
      {scale !== 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono bg-white/10 px-3 py-1 rounded-full z-50">
          Zoom: {Math.round(scale * 100)}%
        </div>
      )}

      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Fechar visualizador de imagem"
        type="button"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 text-white hover:text-gray-300 transition-colors p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
      )}
      
      <div 
        className="relative max-w-full max-h-full flex items-center justify-center overflow-visible" 
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <img 
          src={imageSrc.startsWith('http') ? `${imageSrc}&auto=format&fit=crop` : imageSrc} 
          alt="Expanded project view" 
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
          className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl select-none"
          draggable={false}
        />
      </div>

      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 text-white hover:text-gray-300 transition-colors p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};
export default Lightbox;
