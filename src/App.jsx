import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import InteractiveServices from './components/InteractiveServices';
import Team from './components/Team';
import Contact from './components/Contact';
import ChoosingGuideSection from './components/ChoosingGuideSection';
import Resources from './components/Resources';
import MenuDrawer from './components/MenuDrawer';
import NoiseOverlay from './components/NoiseOverlay';
import BackToTop from './components/BackToTop';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Componente Wrapper para detectar ruta y mostrar Home o Router
const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Scroll al inicio al cambiar de ruta
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NoiseOverlay />
      <MenuDrawer />


      <Routes>
        <Route path="/" element={
          <div id="inicio">
            <Hero />
            <InteractiveServices />
            <ChoosingGuideSection />
            <Resources />
            <Team />
            <Contact />
          </div>
        } />
        {/* RUTAS DE SISTEMA DE USUARIOS - DESACTIVADAS TEMPORALMENTE
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        */}
      </Routes>

      <BackToTop />
    </>
  );
};

function App() {
  useEffect(() => {
    document.title = "Terapia Serena - Centro de Atención Psicológica Virtual";
  }, []);

  return (
    <AuthProvider>
      {/* Logo Area - Configurado con absolute igual que el menú para alineación y comportamiento idéntico */}
      <div className="absolute top-6 left-6 z-[100] pointer-events-none">
        <img
          src="/Logo.png?v=2"
          alt="Terapia Serena Logo"
          className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl opacity-100"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden font-serif text-2xl font-bold tracking-tighter text-white">TS.</div>
      </div>

      <Router>
        <main className="antialiased bg-secondary text-accent font-sans selection:bg-primary selection:text-white">
          <MainContent />
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
