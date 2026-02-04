import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Heart, History, BookOpen, Leaf } from 'lucide-react';

const approaches = [
    {
        title: "Cognitivo Conductual (CBT)",
        icon: Target,
        how: "Metas claras, herramientas prácticas y tareas entre sesiones (registros, respiración, reestructuración).",
        forYou: "Quieres técnicas concretas para ansiedad, estrés o hábitos y medir avances claros.",
        color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
        title: "Humanista (Gestalt / Centrado en Persona)",
        icon: Heart,
        how: "Espacio cálido y respetuoso para explorar emociones, cuerpo y valores en el 'aquí y ahora'.",
        forYou: "Buscas autoconocimiento, mejorar autoestima, transitar duelos o tomar decisiones auténticas.",
        color: "bg-orange-50 border-orange-200 text-orange-800"
    },
    {
        title: "Dinámicos (Psicodinámico Breve)",
        icon: History,
        how: "Conecta historia y vínculos con el presente; observa patrones repetitivos y emociones inconscientes.",
        forYou: "Te preguntas '¿por qué me pasa esto otra vez?' y quieres comprender de raíz tus relaciones.",
        color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
        title: "Psicoanalítico",
        icon: BookOpen,
        how: "Proceso profundo y reflexivo de larga duración; asociación libre, sueños y foco en conflictos internos.",
        forYou: "Quieres explorar a fondo tu mundo interno y tu historia, sin prisa y con mucha reflexión.",
        color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },
    {
        title: "Tercera Generación (ACT/Mindfulness)",
        icon: Leaf,
        how: "Combina aceptación de emociones difíciles con acciones guiadas por valores y mindfulness.",
        forYou: "Deseas convivir mejor con lo que sientes y avanzar en lo que te importa, aun con mente inquieta.",
        color: "bg-teal-50 border-teal-200 text-teal-800"
    }
];

const quickCheck = [
    { text: "Quiero herramientas ya y medir progreso", result: "Cognitivo-conductual" },
    { text: "Quiero un espacio humano para conocerme", result: "Humanista" },
    { text: "Quiero entender por qué repito patrones", result: "Dinámicos" },
    { text: "Quiero un proceso profundo y pausado", result: "Psicoanalítico" },
    { text: "Quiero aprender a aceptar y actuar según mis valores", result: "Tercera generación" },
];

const ChoosingGuideSection = () => {
    return (
        <section id="como-elegir" className="section bg-secondary/30 relative">
            <div className="container max-w-6xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Guía de Orientación</span>
                    <h2 className="text-4xl font-serif text-accent mb-6">¿Cómo saber qué profesional escoger?</h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Antes que el "tipo" de terapia, lo más importante es que te sientas comprendido/a y en confianza.
                        La evidencia muestra que la <strong className="font-semibold text-accent">alianza terapéutica</strong> (cómo te llevas con tu terapeuta) es clave.
                        Aun así, conocer los enfoques te ayuda a elegir mejor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {approaches.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-2xl border ${item.color} bg-white hover:shadow-lg transition-shadow`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-white/80`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif">{item.title}</h3>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Cómo se trabaja:</h4>
                                <p className="text-sm opacity-90 leading-relaxed">{item.how}</p>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Es para ti si...</h4>
                                <p className="text-sm opacity-90 leading-relaxed font-medium italic">"{item.forYou}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-blue-100">
                    <div className="bg-accent p-8 text-center">
                        <h3 className="text-2xl font-serif text-white">Chequeo Rápido para Decidir</h3>
                        <p className="text-blue-100/90 text-sm mt-2">Identifica tu necesidad principal y encuentra tu camino.</p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {quickCheck.map((row, i) => (
                            <div key={i} className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 hover:bg-blue-50/30 transition-colors">
                                <p className="font-medium text-gray-700 flex items-center gap-3 w-full sm:w-auto">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    {row.text}
                                </p>
                                <span className="shrink-0 px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm whitespace-nowrap">
                                    → {row.result}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChoosingGuideSection;
