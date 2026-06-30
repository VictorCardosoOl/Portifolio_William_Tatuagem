import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'W. Siqueira - Tattoo Artist | Fine Line & Blackwork SP',
  description: 'Especialista em tatuagens neotradicionais, blackwork e fine line em São Paulo. Projetos exclusivos desenhados para sua anatomia. Agende sua consultoria.',
  openGraph: {
    title: 'W. Siqueira - Tattoo Artist',
    description: 'Especialista em tatuagens neotradicionais, blackwork e fine line em São Paulo.',
    url: 'https://wsiqueira.com',
    siteName: 'W. Siqueira Tattoo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550625624-2c49c71607a9?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Inter:wght@200;300;400;500;700;900&display=swap" rel="stylesheet"/>
        <link href="https://images.unsplash.com" rel="preconnect" />
      </head>
      <body className="bg-paper-light dark:bg-paper-dark text-ink-black dark:text-gray-200 transition-colors duration-500 antialiased selection:bg-ink-black selection:text-paper-light dark:selection:bg-paper-light dark:selection:text-ink-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
