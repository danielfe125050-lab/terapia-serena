import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Brain, Heart, Sparkles } from 'lucide-react';

const services = [
    {
        title: "Ansiedad y Estrés",
        icon: <Brain className="w-8 h-8" />,
        description: "Herramientas para manejar la preocupación constante y la tensión física, recuperando el control de tu día a día."
    },
    {
        title: "Comprensión Emocional",
        icon: <Heart className="w-8 h-8" />,
        description: "Aprender a entender lo que sientes. Aceptar tus emociones es el primer paso hacia una vida más saludable."
    },
    {
        title: "Recursos Prácticos",
        icon: <Wind className="w-8 h-8" />,
        description: "Técnicas de respiración consciente 4-4-6, pausa emocional y ejercicios de gratitud personalizados."
    },
    {
        title: "Atención Especializada",
        icon: <Sparkles className="w-8 h-8" />,
        description: "Un espacio de información clara y confiable para tu crecimiento personal y bienestar."
    }
];

const Services = () => {
    return (
        <section id="servicios" className="section bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl mb-4">Servicios Profesionales</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="p-8 border border-gray-100 hover:border-primary transition-colors group cursor-default"
                        >
                            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl mb-4">{service.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
