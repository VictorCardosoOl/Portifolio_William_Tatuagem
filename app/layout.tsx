import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { ITENS_FAQ, WHATSAPP_PHONE } from '@/config/data';

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
  title: 'William Siqueira Tattoo | Tatuador em Pinheiros, SP',
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
      "@type": "WebSite",
      "@id": "https://wsiqueira.com/#website",
      "url": "https://wsiqueira.com",
      "name": "William Siqueira Tattoo",
      "description": "Estúdio de tatuagem privado em São Paulo. Especialidade em Neotradicional, Blackwork, Fine Line e Pontilhismo.",
      "publisher": { "@id": "https://wsiqueira.com/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://wsiqueira.com/#person",
      "name": "William Siqueira",
      "jobTitle": "Tatuador Artista",
      "url": "https://wsiqueira.com",
      "sameAs": [
        "https://instagram.com/wsiqueira"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://wsiqueira.com/#localbusiness",
      "name": "William Siqueira Tattoo",
      "image": "https://wsiqueira.com/about/centro.webp",
      "url": "https://wsiqueira.com",
      "telephone": `+${WHATSAPP_PHONE}`,
      "email": "willtintamais@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Baltazar Carrasco, 70",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "05426-060",
        "addressCountry": "BR"
      },
      "areaServed": [
        "Pinheiros",
        "São Paulo"
      ],
      "founder": { "@id": "https://wsiqueira.com/#person" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Especialidades de Tatuagem",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tatuagem Neotradicional" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tatuagem Blackwork" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pontilhismo e Fine Line" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://wsiqueira.com/#faq",
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

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="bg-paper-light dark:bg-paper-dark text-ink-black dark:text-gray-200 transition-colors duration-500 antialiased selection:bg-ink-black selection:text-paper-light dark:selection:bg-paper-light dark:selection:text-ink-black overflow-x-hidden font-sans">
        {/* Google Analytics 4 (Carregamento assíncrono não bloqueante) */}
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {children}
        <Analytics />
      </body>
    </html>
  );
}
