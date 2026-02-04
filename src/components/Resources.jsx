import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, PenTool, CirclePause, Heart } from 'lucide-react';

const BreathingExercise = () => {
    const [phase, setPhase] = useState('Inhala (4s)');
    const [instruction, setInstruction] = useState('Llena tus pulmones lentamente');

    // Ciclo 14s: Inhala 4s, Retén 4s, Exhala 6s
    useEffect(() => {
        const runCycle = () => {
            // Inhala (0-4s)
            setPhase('Inhala');
            setInstruction('Toma aire profundamente por la nariz');

            // Retén (4s-8s)
            setTimeout(() => {
                setPhase('Retén');
                setInstruction('Mantén el aire y siente la calma');
            }, 4000);

            // Exhala (8s-14s)
            setTimeout(() => {
                setPhase('Exhala');
                setInstruction('Suelta todo el aire suavemente por la boca');
            }, 8000);
        };

        runCycle();
        const interval = setInterval(runCycle, 14000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 shadow-inner">
            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[120px]" />
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-accent/60 mb-12 tracking-widest uppercase z-10">Respiración Guiada 4-4-6</h3>

            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center mb-12 z-10">
                {/* Círculo Animado Masivo - Halo Exterior */}
                <motion.div
                    animate={{
                        scale: [1, 1.8, 1.8, 1],
                        opacity: [0.1, 0.4, 0.4, 0.1]
                    }}
                    transition={{
                        duration: 14,
                        times: [0, 0.28, 0.57, 1],
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                />

                {/* Círculo Medio */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1.5, 1],
                        opacity: [0.2, 0.6, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 14,
                        times: [0, 0.28, 0.57, 1],
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-12 bg-primary/30 rounded-full blur-xl"
                />

                {/* Círculo Central Sólido */}
                <motion.div
                    animate={{
                        scale: [0.8, 1, 1, 0.8], // Latido suave
                        boxShadow: [
                            "0px 10px 30px rgba(93, 156, 236, 0.2)",
                            "0px 20px 60px rgba(93, 156, 236, 0.5)",
                            "0px 20px 60px rgba(93, 156, 236, 0.5)",
                            "0px 10px 30px rgba(93, 156, 236, 0.2)"
                        ]
                    }}
                    transition={{
                        duration: 14,
                        times: [0, 0.28, 0.57, 1],
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl relative z-20"
                >
                    <Wind className="text-primary w-12 h-12 md:w-16 md:h-16 mb-2 opacity-80" />
                    <motion.span
                        key={phase}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-bold text-accent font-serif"
                    >
                        {phase}
                    </motion.span>
                </motion.div>
            </div>

            <motion.p
                key={instruction}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg md:text-xl text-gray-500 font-light text-center max-w-lg z-10 min-h-[3rem]"
            >
                {instruction}
            </motion.p>
        </div>
    );
};

const ResourceCard = ({ icon: Icon, title, steps, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col items-start h-full rounded-2xl"
    >
        <div className={`p-3 rounded-full mb-6 ${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-serif text-accent mb-4">{title}</h3>
        <ul className="space-y-3 mb-6 flex-1">
            {steps.map((step, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-3">
                    <span className="font-bold text-gray-300">{i + 1}.</span>
                    {step}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Resources = () => {
    return (
        <section className="section bg-white pt-0">
            <div className="container">
                <div className="text-center mb-16 pt-16">
                    <h2 className="text-4xl mb-4 text-accent font-serif">Espacio de Calma</h2>
                    <p className="text-gray-500">Tómate un descanso ahora mismo. Sigue el ritmo.</p>
                </div>

                {/* 1. Respiración Gigante (Hero) */}
                <BreathingExercise />

                <div className="text-center mb-10 mt-20">
                    <h3 className="text-2xl font-serif text-accent opacity-80">Otras herramientas rápidas</h3>
                </div>

                {/* 2. Otras Tarjetas Secundarias */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ResourceCard
                        icon={CirclePause}
                        title="Pausa Emocional"
                        color="bg-orange-50 text-orange-500"
                        steps={[
                            "Detente un momento.",
                            "Pregúntate: ¿Qué estoy sintiendo?",
                            "Identifica la emoción sin juzgarla.",
                            "Respira profundo antes de continuar."
                        ]}
                    />

                    <ResourceCard
                        icon={PenTool}
                        title="Ejercicio de Gratitud"
                        color="bg-blue-50 text-blue-500"
                        steps={[
                            "Escribe 3 cosas buenas de hoy.",
                            "Pueden ser experiencias pequeñas.",
                            "Conecta con la sensación de bienestar.",
                            "Realízalo una vez al día."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Resources;
