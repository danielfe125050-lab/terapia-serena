import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenGuide }) => {
    return (
        <section className="section bg-gradient-slow min-h-screen flex items-center">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <span className="text-primary tracking-widest uppercase text-sm mb-4 block">
                        SanandotuMente
                    </span>
                    <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
                        Recupera tu equilibrio y <br />
                        <span className="italic">encuentra la paz interior</span>
                    </h1>
                    <p className="text-lg mb-8 text-gray-600 font-light">
                        Somos un Centro de Atención Virtual dedicado a tu salud mental.
                        Un espacio seguro para entender tu mente, sanar emociones y cuidar tu bienestar integral.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" className="minimal-btn text-center">
                            Agenda tu Cita
                        </a>
                        <button
                            onClick={onOpenGuide}
                            className="text-accent hover:bg-white/50 border border-transparent hover:border-accent/10 rounded-sm font-medium py-3 px-6 transition-all"
                        >
                            ¿Cómo elegir tu psicólogo?
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
