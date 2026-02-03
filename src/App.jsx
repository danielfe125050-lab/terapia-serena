import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import PsychologistGuide from './components/PsychologistGuide';
import Education from './components/Education';
import Resources from './components/Resources';

function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    document.title = "Terapia Serena - Centro de Atención Psicológica Virtual";
  }, []);

  return (
    <main className="antialiased">
      {/* Navbar Minimalista (Opcional, pero ayuda a la navegación) */}
      <nav className="fixed w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-serif text-2xl font-bold">TS.</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#inicio" className="hover:opacity-60 transition-opacity">Inicio</a>
          <a href="#servicios" className="hover:opacity-60 transition-opacity">Servicios</a>
          <a href="#contacto" className="hover:opacity-60 transition-opacity">Contacto</a>
        </div>
        {/* Mobile menu placeholder simplicity */}
        <div className="md:hidden text-sm uppercase tracking-widest font-medium">
          Menu
        </div>
      </nav>

      <div id="inicio">
        <Hero onOpenGuide={() => setIsGuideOpen(true)} />
      </div>
      <Services />
      <Education />
      <Resources />
      <Team />
      <Contact />

      <PsychologistGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </main>
  );
}

export default App;
