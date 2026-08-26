import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Manifesto from '@/components/Manifesto';
import About from '@/components/About';
import Concept from '@/components/Concept';
import CreativeProcess from '@/components/CreativeProcess';
import PreparationAndAftercare from '@/components/Preparation';
import FlashSection from '@/components/FlashSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ChatWidget from '@/components/ChatWidget';
import { ScrollProvider } from '@/context/ScrollContext';

// Este componente agora é um Server Component orquestrador
export default function Home() {
  return (
    <ScrollProvider>
      <Preloader />
      
      <div className="noise-bg" aria-hidden="true"></div>
      
      <div className="w-full min-h-screen opacity-100">
        <Navbar />
        <ChatWidget />
        <main>
          <Hero />
          <Portfolio />
          <Manifesto />
          <Concept />
          <CreativeProcess />
          <PreparationAndAftercare />
          <FlashSection />
          <About />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}
