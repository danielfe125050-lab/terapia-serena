import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InteractiveServices from './components/InteractiveServices';
import Team from './components/Team';
import Contact from './components/Contact';
import ChoosingGuideSection from './components/ChoosingGuideSection';
import Resources from './components/Resources';
import MenuDrawer from './components/MenuDrawer';
import NoiseOverlay from './components/NoiseOverlay';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    document.title = "Terapia Serena - Centro de Atención Psicológica Virtual";
  }, []);

  return (
    <main className="antialiased bg-secondary text-accent font-sans selection:bg-primary selection:text-white">
      <NoiseOverlay />
      <MenuDrawer />

      {/* Logo Area */}
      <div className="absolute top-2 left-2 md:top-4 md:left-8 z-50 pointer-events-none mix-blend-difference">
        {/* Instrucción para el usuario: Reemplaza '/logo.png' en public con tu archivo real */}
        <img
          src="/logo.png"
          alt="Terapia Serena Logo"
          className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl opacity-100"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        {/* Fallback si no hay logo */}
        <div className="hidden font-serif text-2xl font-bold tracking-tighter text-white">TS.</div>
      </div>

      <div id="inicio">
        <Hero />
      </div>
      <InteractiveServices />
      <ChoosingGuideSection />
      <Resources />
      <Team />
      <Contact />
      <BackToTop />
    </main>
  );
}

export default App;
