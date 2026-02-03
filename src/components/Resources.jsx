import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, PenTool, PauseCircle, Heart } from 'lucide-react';

const BreathingExercise = () => {
    const [phase, setPhase] = useState('Inhala (4s)');

    // Ciclo simple para la demo de texto, la animación CSS/Motion se encargará del timing visual exacto
    // Inhale 4s, Hold 4s, Exhale 6s = 14s cycle
    useEffect(() => {
        const runCycle = () => {
            setPhase('Inhala (4s)');
            setTimeout(() => setPhase('Retén (4s)'), 4000);
            setTimeout(() => setPhase('Exhala (6s)'), 8000);
        };

        runCycle();
        const interval = setInterval(runCycle, 14000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-primary/5 rounded-3xl cursor-pointer hover:bg-primary/10 transition-colors">
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                {/* Círculo Animado de Respiración */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1.5, 1], // Inhala -> Grande, Retén, Exhala -> Chico
                        opacity: [0.3, 0.8, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 14,
                        times: [0, 0.28, 0.57, 1], // 4s/14s ≈ 0.28, 8s/14s ≈ 0.57
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1.3, 1],
                    }}
                    transition={{
                        duration: 14,
                        times: [0, 0.28, 0.57, 1],
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg z-10 relative"
                >
                    <Wind className="text-primary w-10 h-10" />
                </motion.div>
            </div>
            <h4 className="text-xl font-bold text-accent mb-2">{phase}</h4>
            <p className="text-sm text-gray-500 text-center">Respiración 4-4-6 para calmar el sistema nervioso</p>
        </div>
    );
};

const ResourceCard = ({ icon: Icon, title, steps, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col items-start h-full"
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
        <section className="section bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl mb-4 text-accent">Herramientas de Bienestar</h2>
                    <p className="text-gray-600">Recursos gratuitos para gestionar tus emociones ahora mismo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tarjeta 1: Respiración Interactiva */}
                    <div className="lg:col-span-1">
                        <BreathingExercise />
                    </div>

                    {/* Tarjeta 2: Pausa Emocional */}
                    <ResourceCard
                        icon={PauseCircle}
                        title="Pausa Emocional"
                        color="bg-orange-100 text-orange-500"
                        steps={[
                            "Detente un momento.",
                            "Pregúntate: ¿Qué estoy sintiendo?",
                            "Identifica la emoción sin juzgarla.",
                            "Respira profundo antes de continuar."
                        ]}
                    />

                    {/* Tarjeta 3: Gratitud */}
                    <ResourceCard
                        icon={PenTool}
                        title="Ejercicio de Gratitud"
                        color="bg-blue-100 text-blue-500"
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
