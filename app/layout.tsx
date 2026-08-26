import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { ITENS_FAQ, WHATSAPP_PHONE } from '@/data';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  title: 'William Siqueira Tattoo | Tatuador em Pinheiros e Vila Madalena, SP',
  description: 'Estúdio de tatuagem privado em São Paulo. Arte exclusiva com especialidade em Neotradicional, Blackwork, Fine Line e Pontilhismo. Agende sua sessão.',
  metadataBase: new URL('https://wsiqueira.com'),
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'William Siqueira Tattoo | Estúdio em Pinheiros, SP',
    description: 'Arte exclusiva com especialidade em Neotradicional, Blackwork, Fine Line e Pontilhismo em São Paulo. Projetos 100% autorais.',
    url: 'https://wsiqueira.com',
    siteName: 'William Siqueira Tattoo',
    images: [
      {
        url: 'https://wsiqueira.com/about/centro.webp',
        width: 1200,
        height: 630,
        alt: 'William Siqueira Tattoo Studio em São Paulo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Siqueira Tattoo | Estúdio em Pinheiros, SP',
    description: 'Estúdio privado de tatuagem em SP. Arte exclusiva e especializada.',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "William Siqueira Tattoo",
      "image": "https://wsiqueira.com/about/centro.webp",
      "@id": "https://wsiqueira.com/#localbusiness",
      "url": "https://wsiqueira.com",
      "telephone": `+${WHATSAPP_PHONE}`,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Baltazar Carrasco, 70",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "05426-060",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "Person",
      "name": "William Siqueira",
      "jobTitle": "Tatuador Especialista",
      "url": "https://wsiqueira.com"
    },
    {
      "@type": "FAQPage",
      "mainEntity": ITENS_FAQ.map(item => ({
        "@type": "Question",
        "name": item.pergunta,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.resposta + (item.detalhes?.length ? " " + item.detalhes.join(" ") : "")
        }
      }))
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Adicione o Google Tag Manager / Analytics aqui depois de obter os IDs */}
      </head>
      <body className="bg-paper-light dark:bg-paper-dark text-ink-black dark:text-gray-200 transition-colors duration-500 antialiased selection:bg-ink-black selection:text-paper-light dark:selection:bg-paper-light dark:selection:text-ink-black overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
