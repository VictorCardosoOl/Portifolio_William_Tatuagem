import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'William Siqueira - Tatuador em Pinheiros, SP | Fine Line & Blackwork',
  description: 'William Siqueira é tatuador em Pinheiros, São Paulo, especialista em Fine Line, Blackwork e Neotradicional. Agende sua sessão para projetos exclusivos.',
  metadataBase: new URL('https://wsiqueira.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'William Siqueira - Estúdio de Tatuagem em Pinheiros, SP',
    description: 'Especialista em tatuagens neotradicionais, blackwork e fine line em São Paulo. Projetos exclusivos.',
    url: 'https://wsiqueira.com',
    siteName: 'William Siqueira Tattoo',
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
  twitter: {
    card: 'summary_large_image',
    title: 'William Siqueira - Tatuador em Pinheiros, SP',
    description: 'Especialista em tatuagens neotradicionais, blackwork e fine line em São Paulo.',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "William Siqueira Tattoo",
      "image": "https://images.unsplash.com/photo-1550625624-2c49c71607a9?q=80&w=1200&auto=format&fit=crop",
      "@id": "https://wsiqueira.com/#localbusiness",
      "url": "https://wsiqueira.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR",
        "neighborhood": "Vila Madalena, Pinheiros"
      }
    },
    {
      "@type": "Person",
      "name": "William Siqueira",
      "jobTitle": "Tatuador",
      "url": "https://wsiqueira.com"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Inter:wght@200;300;400;500;700;900&display=swap" rel="stylesheet"/>
        <link href="https://images.unsplash.com" rel="preconnect" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper-light dark:bg-paper-dark text-ink-black dark:text-gray-200 transition-colors duration-500 antialiased selection:bg-ink-black selection:text-paper-light dark:selection:bg-paper-light dark:selection:text-ink-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
