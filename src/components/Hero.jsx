import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        // Imagen subida por usuario: areasdeatencion.png
        image: "/areasdeatencion.png",
        // POSICIÓN DE IMAGEN: 50% 50% para centrar lo importante si la imagen tiene texto integrado o diseño específico
        pos: "50% 50%",
        subtitle: "SERVICIOS CLÍNICOS",
        title: "Áreas de Atención Especializada",
        desc: "Ansiedad, depresión, terapia de pareja y más. Abordajes basados en evidencia para cada necesidad.",
        buttonText: "Ver Servicios",
        buttonLink: "#servicios",
    },
    {
        id: 2,
        // Imagen: Comosaberqueprofesionalescoger.png
        image: "/Comosaberqueprofesionalescoger.png",
        pos: "50% 50%",
        subtitle: "ORIENTACIÓN AL PACIENTE",
        title: "¿Cómo saber qué profesional escoger?",
        desc: "Te ayudamos a entender las diferencias entre enfoques (CBT, Humanista, Psicoanálisis) para que decidas con confianza.",
        buttonText: "Ver Guía de Elección",
        buttonLink: "#como-elegir",
    },
    {
        id: 3,
        // Imagen: Conoceanuestroespecialistas.png
        image: "/Conoceanuestroespecialistas.png",
        pos: "50% 50%",
        subtitle: "NUESTRO EQUIPO",
        title: "Conoce a nuestros especialistas",
        desc: "Un equipo multidisciplinario de psicólogos, psiquiatras y terapeutas comprometidos con tu bienestar.",
        buttonText: "Ver Equipo Completo",
        buttonLink: "#equipo",
    },
    {
        id: 4,
        // Imagen: EspaciodeCalma.png
        image: "/EspaciodeCalma.png",
        pos: "50% 50%",
        subtitle: "RECURSOS GRATUITOS",
        title: "Espacio de Calma",
        desc: "Herramientas de respiración y pausa emocional disponibles para ti en cualquier momento.",
        buttonText: "Respirar Ahora",
        buttonLink: "#recursos",
    },
    {
        id: 5,
        // Imagen: ChequeoRapido.png (Opcional, si el usuario quiere destacarlo aparte)
        image: "/ChequeoRapido.png",
        pos: "50% 50%",
        subtitle: "AUTO-EVALUACIÓN",
        title: "Chequeo Rápido para Decidir",
        desc: "Identifica tu necesidad principal en segundos y encuentra el camino terapéutico ideal.",
        buttonText: "Hacer Chequeo",
        buttonLink: "#como-elegir", // Redirige a la misma sección pero el foco es el chequeo
    },
    {
        id: 6,
        // Imagen: Contacto.png
        image: "/Contacto.png",
        pos: "50% 50%",
        subtitle: "AGENDA TU CITA",
        title: "Estamos aquí para escucharte",
        desc: "Da el primer paso hoy. Agenda tu sesión online de manera sencilla y segura.",
        buttonText: "Contactar Ahora",
        buttonLink: "#contacto",
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative h-screen overflow-hidden text-white w-full bg-accent">
            {/* Background Carousel */}
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        style={{
                            objectPosition: slide.pos
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dark Gradient Overlay for Readability (Más fuerte para asegurar lectura sobre cualquier imagen) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-accent/95 via-accent/70 to-transparent mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-black/30 pointer-events-none" />

            {/* Content Layer Dynamic */}
            <div className="relative z-10 container h-full flex items-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl pl-4 md:pl-0 border-l-4 border-secondary/50 md:border-none md:pl-0" // Borde movil para destacar
                    >
                        <span className="text-secondary tracking-[0.2em] uppercase text-sm mb-4 md:mb-6 block font-bold">
                            {slide.subtitle}
                        </span>
                        <h1 className="text-4xl md:text-6xl mb-6 md:mb-8 leading-tight font-serif text-white drop-shadow-xl text-balance">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-100 font-light max-w-lg leading-relaxed drop-shadow">
                            {slide.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={slide.buttonLink}
                                className="px-8 py-4 bg-white text-accent font-bold rounded-sm hover:bg-secondary transition-colors text-center shadow-lg border border-transparent hover:border-white/50"
                            >
                                {slide.buttonText}
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Carrusel Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20 flex-wrap justify-center px-4 max-w-full">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-500 rounded-full h-2 shadow-sm ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Ir a diapositiva ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
