import React from 'react';
import { TEXTOS_GERAIS, REDES_SOCIAIS } from '../data';
import { ArrowUpRight, Instagram, Mail, MessageCircle, MapPin, Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Mapeamento de ícones
  const getIcon = (name: string) => {
    switch(name.toLowerCase()) {
      case 'instagram': return <Instagram size={18} />;
      case 'whatsapp': return <MessageCircle size={18} />;
      case 'e-mail': return <Mail size={18} />;
      default: return <ArrowUpRight size={18} />;
    }
  };

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Portfólio', href: '#work' },
    { label: 'O Processo', href: '#concept' },
    { label: 'Flash Day', href: '#flash' },
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#F6F5F0] dark:bg-[#0c0a09] text-[#1A1A1A] dark:text-[#e7e5e4] overflow-hidden selection:bg-[#1A1A1A] selection:text-[#F6F5F0] transition-colors duration-500">
      
      {/* 1. TEXTURA DE FUNDO (NOISE) - Adjusted for Light Theme */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay pointer-events-none z-0">
        <svg className="w-full h-full">
            <filter id="noiseFilterFooter">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterFooter)" />
        </svg>
      </div>

      {/* 2. BACKGROUND TYPOGRAPHY - Raised and Darkened */}
      <div className="absolute bottom-16 md:bottom-12 left-0 w-full overflow-hidden leading-none select-none pointer-events-none z-0 flex justify-center">
         <h1 className="font-serif font-bold text-fluid-hero text-[#1A1A1A] opacity-[0.08] dark:opacity-[0.1] text-center whitespace-nowrap tracking-tighter leading-[0.8]">
            SIQUEIRA
         </h1>
      </div>

      {/* 3. MAIN GRID CONTENT */}
      <div className="relative z-10 max-w-screen-4xl mx-auto border-t border-[#1A1A1A]/10 dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* COL 1: IDENTITY */}
          <div className="p-10 md:p-14 lg:p-16 border-b md:border-b-0 border-r-0 md:border-r border-[#1A1A1A]/10 dark:border-white/10 flex flex-col justify-between min-h-[320px] group hover:bg-[#E8E6E1]/50 dark:hover:bg-[#1c1917]/30 transition-colors duration-500">
            <div>
              <h2 className="font-serif text-fluid-h3 text-[#1A1A1A] dark:text-[#fafaf9] tracking-tight mb-2">
                Studio <br /> W. Siqueira
              </h2>
              <span className="font-serif italic text-xl text-[#685A4F] dark:text-[#a8a29e]">
                Fine Line & Art
              </span>
            </div>
            <div className="mt-8">
               <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#8C8C8C] dark:text-[#78716c] font-bold mb-2">
                 Estabelecido
               </p>
               <p className="font-sans text-sm md:text-base text-[#3D3D3D] dark:text-[#d6d3d1]">São Paulo, BR, {currentYear}</p>
            </div>
          </div>

          {/* COL 2: LOCATION & CTA */}
          <div className="p-10 md:p-14 lg:p-16 border-b md:border-b-0 lg:border-r border-[#1A1A1A]/10 dark:border-white/10 flex flex-col justify-between min-h-[320px] group hover:bg-[#E8E6E1]/50 dark:hover:bg-[#1c1917]/30 transition-colors duration-500 cursor-pointer">
            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-3 text-[#685A4F] dark:text-[#a8a29e]">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <address className="not-italic font-sans text-base leading-relaxed text-[#3D3D3D] dark:text-[#d6d3d1]">
                    Vila Madalena<br/>
                    São Paulo - SP<br/>
                    Brasil
                  </address>
               </div>
            </div>
            
            <div className="mt-8">
               <div className="flex items-center justify-between group-hover:px-2 transition-all duration-500">
                 <span className="font-serif italic text-2xl text-[#1A1A1A] dark:text-[#fafaf9]">Agendar Visita</span>
                 <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 dark:border-[#44403c] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white dark:group-hover:bg-[#fafaf9] dark:group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={18} />
                 </div>
               </div>
            </div>
          </div>

          {/* COL 3: SOCIALS */}
          <div className="p-10 md:p-14 lg:p-16 border-b md:border-b-0 border-r-0 md:border-r border-[#1A1A1A]/10 dark:border-white/10 flex flex-col min-h-[320px] hover:bg-[#E8E6E1]/50 dark:hover:bg-[#1c1917]/30 transition-colors duration-500">
             <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8C8C8C] dark:text-[#78716c] font-bold mb-8">
               Conexões
             </span>
             <ul className="flex flex-col gap-6">
               {REDES_SOCIAIS.map((social, idx) => (
                 <li key={idx}>
                   <a 
                     href={social.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group/link flex items-center justify-between py-2 border-b border-[#1A1A1A]/10 dark:border-[#292524] hover:border-[#685A4F] dark:hover:border-[#a8a29e] transition-colors duration-300"
                   >
                     <span className="font-sans text-xs uppercase tracking-widest text-[#3D3D3D] dark:text-[#d6d3d1] group-hover/link:text-[#1A1A1A] dark:group-hover/link:text-white transition-colors">
                       {social.nome}
                     </span>
                     <span className="text-[#8C8C8C] dark:text-[#57534e] group-hover/link:text-[#1A1A1A] dark:group-hover/link:text-white transition-colors duration-300 transform group-hover/link:rotate-45">
                        {getIcon(social.nome)}
                     </span>
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* COL 4: NAVIGATION & CREDITS */}
          <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-between min-h-[320px] hover:bg-[#E8E6E1]/50 dark:hover:bg-[#1c1917]/30 transition-colors duration-500">
             <div>
               <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8C8C8C] dark:text-[#78716c] font-bold mb-8 block">
                 Menu
               </span>
               <nav className="flex flex-col gap-3">
                 {navLinks.map((link, i) => (
                   <a 
                     key={i} 
                     href={link.href} 
                     className="font-serif text-2xl text-[#685A4F] dark:text-[#a8a29e] hover:text-[#1A1A1A] dark:hover:text-[#fafaf9] hover:translate-x-2 transition-all duration-300 block w-fit"
                   >
                     {link.label}
                   </a>
                 ))}
               </nav>
             </div>
             
             <div className="mt-12 pt-6 border-t border-[#1A1A1A]/10 dark:border-[#292524] flex justify-between items-end">
                <div className="flex flex-col gap-1">
                   <span className="font-sans text-xs uppercase tracking-widest text-[#8C8C8C] dark:text-[#57534e]">Dev & Design</span>
                   <a 
                     href="https://victor-cardoso-dev.vercel.app/"
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="font-sans text-xs font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#a8a29e] hover:opacity-60 transition-opacity"
                   >
                     Victor Cardoso
                   </a>
                </div>
                <Copyright size={14} className="text-[#8C8C8C] dark:text-[#57534e]" />
             </div>
          </div>

        </div>
      </div>
      
      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-[#1A1A1A]/10 dark:border-[#292524] py-6 px-6 md:px-12 bg-[#F6F5F0] dark:bg-[#0c0a09]">
        <div className="max-w-screen-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.2em] font-sans text-[#8C8C8C] dark:text-[#57534e]">
           
           <a 
             href="https://victor-cardoso-dev.vercel.app/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:text-[#1A1A1A] dark:hover:text-[#a8a29e] transition-colors text-center md:text-left"
           >
             Dev by Victor Cardoso © 2026 Todos os direitos reservados.
           </a>

           <div className="flex gap-6">
             <a href="#" className="hover:text-[#1A1A1A] dark:hover:text-[#a8a29e] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#1A1A1A] dark:hover:text-[#a8a29e] transition-colors">Terms of Use</a>
           </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;