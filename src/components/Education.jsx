import React from 'react';
import { motion } from 'framer-motion';
import { CircleAlert, Activity, HeartPulse, Brain } from 'lucide-react';

const Education = () => {
    return (
        <section className="section bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Columna Izquierda: Definiciones y Diferencias */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl mb-8 font-serif text-accent">Entendiendo tu Mente</h2>

                            <div className="space-y-8">
                                <div className="bg-gray-50 p-8 border-l-4 border-primary">
                                    <h3 className="text-2xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <Brain className="w-6 h-6 text-primary" />
                                        ¿Qué es la Ansiedad?
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        Es una reacción natural ante amenazas percibidas. Nos prepara para actuar.
                                        El problema surge cuando aparece con mucha intensidad o frecuencia, interfiriendo
                                        con la vida diaria, incluso cuando el peligro no está presente.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-8 border-l-4 border-blue-400">
                                    <h3 className="text-2xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <Activity className="w-6 h-6 text-blue-400" />
                                        ¿Qué es el Estrés?
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        Respuesta ante demandas externas (exámenes, trabajo). Puede ser útil en pequeñas dosis,
                                        pero si se mantiene, afecta la salud. Suele tener una <strong>causa externa clara</strong>,
                                        a diferencia de la ansiedad que puede persistir sin ella.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-accent/5 rounded-lg">
                                <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    Mito Común
                                </h4>
                                <p className="text-sm text-gray-700 italic">
                                    "La ansiedad es solo falta de control" — <strong>Falso</strong>.
                                    Es una respuesta biológica. No se trata de eliminarla, sino de aprender a gestionarla.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Columna Derecha: Síntomas */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-secondary/30 p-10 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-accent mb-8 text-center">Identifica tus Señales</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-serif text-xl mb-4 text-primary flex items-center gap-2">
                                        <Brain className="w-5 h-5" /> Emocionales
                                    </h4>
                                    <ul className="space-y-3">
                                        {["Preocupación constante", "Nerviosismo", "Irritabilidad", "Miedo sin razón clara"].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-serif text-xl mb-4 text-blue-400 flex items-center gap-2">
                                        <HeartPulse className="w-5 h-5" /> Físicos
                                    </h4>
                                    <ul className="space-y-3">
                                        {["Palpitaciones", "Tensión muscular", "Dificultad para respirar", "Cansancio constante"].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                                <p className="mb-4 text-gray-600">¿Te identificas con estos síntomas?</p>
                                <a href="#contacto" className="text-accent font-bold hover:underline">
                                    Agenda una evaluación inicial &rarr;
                                </a>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
