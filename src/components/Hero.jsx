import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    { id: 1, pos: "0% 0%" },
    { id: 2, pos: "50% 0%" },
    { id: 3, pos: "100% 0%" }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden text-white w-full">
            {/* Background Carousel */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/hero-carousel.png"
                        alt="Serene Background"
                        className="w-full h-full object-cover"
                        style={{
                            objectPosition: slides[currentSlide].pos
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dark Gradient Overlay for Readability (Ahora fuera de la animación para ser constante) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-accent/90 to-primary/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />

            {/* Content Layer */}
            <div className="relative z-10 container h-full flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="max-w-3xl"
                >
                    <span className="text-secondary tracking-[0.2em] uppercase text-sm mb-6 block font-bold">
                        SanandotuMente
                    </span>
                    <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-serif text-white drop-shadow-lg">
                        Un espacio seguro para <br />
                        <span className="italic text-secondary">sentir, entender y avanzar</span>
                    </h1>
                    <p className="text-xl mb-10 text-gray-100 font-light max-w-xl leading-relaxed drop-shadow">
                        Acompañamiento psicológico con enfoque humano y basado en evidencia.
                        Recupera tu equilibrio a tu propio ritmo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" className="px-8 py-4 bg-white text-accent font-bold rounded-sm hover:bg-secondary transition-colors text-center shadow-lg">
                            Agendar Sesión
                        </a>
                        <a
                            href="#como-elegir"
                            className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-sm text-white font-medium rounded-sm hover:bg-white/20 transition-all shadow-lg text-center"
                        >
                            ¿Cómo elegir especialista?
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Carrusel Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-white' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
