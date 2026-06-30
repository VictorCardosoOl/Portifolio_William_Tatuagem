import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Concept from './components/Concept';
import CreativeProcess from './components/CreativeProcess';
import PreparationAndAftercare from './components/Preparation';
import FlashSection from './components/FlashSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ChatWidget from './components/ChatWidget';
import { ScrollProvider } from './context/ScrollContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    window.scrollTo(0, 0);
    setIsLoading(false);
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  };

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ScrollProvider>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
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
};

export default App;