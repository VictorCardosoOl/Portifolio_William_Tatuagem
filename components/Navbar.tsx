import React from 'react';
import { REDES_SOCIAIS } from '@/data';
import { StaggeredMenu } from './StaggeredMenu';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: 'Início', ariaLabel: 'Ir para o início', link: '#home' },
    { label: 'Portfólio', ariaLabel: 'Ver trabalhos', link: '#work' },
    { label: 'Sobre', ariaLabel: 'Sobre o artista', link: '#about' },
    { label: 'Método', ariaLabel: 'Nosso processo', link: '#concept' },
    { label: 'Agenda', ariaLabel: 'Eventos e Flash Day', link: '#flash' },
    { label: 'Contato', ariaLabel: 'Entrar em contato', link: '#contact' }
  ];

  const socialItems: SocialItem[] = REDES_SOCIAIS.map(s => ({
    label: s.nome,
    link: s.url
  }));

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#1A1A1A"
      openMenuButtonColor="#1A1A1A"
      changeMenuColorOnOpen={false} 
      colors={['#1a1a1a', '#333333']}
      accentColor="#1A1A1A"
      isFixed={true}
      closeOnClickAway={true}
    />
  );
};

export default Navbar;