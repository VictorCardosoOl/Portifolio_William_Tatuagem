import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 transition-opacity duration-300 ease-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em tela cheia"
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Fechar visualizador de imagem"
        type="button"
      >
        <X size={24} strokeWidth={1.5} />
      </button>
      
      <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageSrc} 
          alt="Expanded project view" 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl select-none transition-transform duration-300 ease-out" 
        />
      </div>
    </div>
  );
};
export default Lightbox;
