import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Zap, Heart, Frown, Moon, Utensils, CircleHelp, ArrowRight, X } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Ansiedad",
        desc: "Herramientas simples para disminuir la preocupación y calmar el cuerpo; retoma el control de tu día a día.",
        color: "bg-blue-100", // Azul suave más saturado
        textColor: "text-blue-900",
        icon: CloudRain
    },
    {
        id: 2,
        title: "Estrés",
        desc: "Aprende a poner límites y a descansar mejor; baja la tensión acumulada y recupera energía.",
        color: "bg-orange-100", // Naranja suave
        textColor: "text-orange-900",
        icon: Zap
    },
    {
        id: 3,
        title: "Atención a Parejas",
        desc: "Mejoren la comunicación y resuelvan conflictos con respeto; reconstruyan acuerdos y confianza.",
        color: "bg-rose-100", // Rosa suave
        textColor: "text-rose-900",
        icon: Heart
    },
    {
        id: 4,
        title: "Depresión",
        desc: "Acompañamiento cercano para salir del bloqueo; activamos hábitos y apoyo para recuperar motivación.",
        color: "bg-indigo-100", // Indigo suave
        textColor: "text-indigo-900",
        icon: Frown
    },
    {
        id: 5,
        title: "Dificultades del Sueño",
        desc: "Rutinas y ejercicios para conciliar y mantener el sueño; crea noches más reparadoras.",
        color: "bg-purple-100", // Morado suave
        textColor: "text-purple-900",
        icon: Moon
    },
    {
        id: 6,
        title: "Dificultades Alimentación",
        desc: "Construye una relación más tranquila con la comida; reduce culpa, ansiedad y atracones.",
        color: "bg-green-100", // Verde suave
        textColor: "text-green-900",
        icon: Utensils
    },
    {
        id: 7,
        title: "Incomprensión Personal",
        desc: "Cuando no sabes qué te pasa: te ayudo a entender tus emociones y ganar claridad para decidir.",
        color: "bg-teal-100", // Teal suave
        textColor: "text-teal-900",
        icon: CircleHelp
    }
];

const InteractiveServices = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="section relative z-10 bg-white" id="servicios">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl mb-4 font-serif text-accent">Áreas de Atención</h2>
                    <p className="text-accent/60">Haz clic en cada tarjeta para saber más.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <motion.div
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedId(service.id)}
                            key={service.id}
                            className={`p-8 rounded-2xl cursor-pointer hover:shadow-xl transition-shadow border border-transparent ${service.color} relative overflow-hidden group min-h-[250px] flex flex-col`}
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-4">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/60 mb-4`}>
                                    <service.icon className={`w-6 h-6 ${service.textColor}`} />
                                </div>
                                <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>{service.title}</h3>
                                <p className={`text-base ${service.textColor} opacity-90 font-medium leading-relaxed`}>{service.desc}</p>
                            </div>

                            <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                Agendar <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                            />

                            {/* Expanded Card (Simplified for now as user descriptions are short) */}
                            {services.map((service) => (
                                service.id === selectedId && (
                                    <motion.div
                                        layoutId={`card-${service.id}`}
                                        key={service.id}
                                        className={`max-w-md w-full rounded-3xl shadow-2xl overflow-hidden relative z-10 ${service.color}`}
                                    >
                                        <div className="p-10">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-6 right-6 p-2 bg-white/40 hover:bg-white/60 rounded-full transition-colors"
                                            >
                                                <X className="w-5 h-5 text-gray-700" />
                                            </button>

                                            <div className="mb-6">
                                                <service.icon className={`w-12 h-12 ${service.textColor}`} />
                                            </div>

                                            <h3 className={`text-3xl font-serif font-bold ${service.textColor} mb-4`}>{service.title}</h3>
                                            <p className={`text-lg ${service.textColor} leading-relaxed font-medium mb-8`}>
                                                {service.desc}
                                            </p>

                                            <a
                                                href="#contacto"
                                                onClick={() => setSelectedId(null)}
                                                className="block w-full py-4 bg-white/90 text-center rounded-xl font-bold text-accent shadow-sm hover:bg-white transition-colors"
                                            >
                                                Solicitar Cita
                                            </a>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default InteractiveServices;
