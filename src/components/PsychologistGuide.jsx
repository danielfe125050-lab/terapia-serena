import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Brain, Pill, Scale, Heart, Sparkles, Users } from 'lucide-react';

const PsychologistGuide = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('clasico');

    const tabs = {
        clasico: {
            label: "Terapias Clásicas",
            color: "bg-green-50 border-primary",
            content: [
                { title: "Cognitivo Conductual (TCC)", icon: <Brain />, text: "Herramientas prácticas a corto plazo. Ideal para ansiedad y fobias." },
                { title: "Psicoanálisis", icon: <Users />, text: "Exploración profunda del inconsciente y pasado. Proceso de autoconocimiento largo." },
                { title: "Humanista", icon: <Heart />, text: "Enfoque en potencial humano, empatía y crecimiento personal." },
                { title: "Sistémica", icon: <Users />, text: "Entender problemas en contexto de familia y relaciones." }
            ]
        },
        medico: {
            label: "Médica y Especializada",
            color: "bg-blue-50 border-blue-400",
            content: [
                { title: "Psiquiatría", icon: <Pill />, text: "Médicos que pueden recetar fármacos. Para desbalances químicos severos." },
                { title: "Neuropsicología", icon: <Brain />, text: "Relación cerebro-conducta. TDAH, memoria, rehabilitación cognitiva." },
                { title: "Infanto-Juvenil", icon: <Sparkles />, text: "Especialistas en desarrollo, aprendizaje y emociones de niños/adolescentes." },
                { title: "Sexología", icon: <Heart />, text: "Salud sexual, disfunciones y terapia de pareja íntima." },
                { title: "Forense", icon: <Scale />, text: "Ámbito legal, peritajes y evaluaciones para juicios." }
            ]
        },
        tercera: {
            label: "Tercera Generación (NUEVO)",
            color: "bg-purple-50 border-purple-400",
            content: [
                { title: "ACT (Aceptación y Compromiso)", icon: <Sparkles />, text: "Aceptar lo que no puedes cambiar y comprometerte con tus valores." },
                { title: "Mindfulness", icon: <Sparkles />, text: "Atención plena. Vivir el presente reduciendo el estrés y la ansiedad." },
                { title: "DBT (Dialéctico Conductual)", icon: <Brain />, text: "Regulación emocional intensa, ideal para personalidad límite." }
            ]
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl relative z-10 overflow-hidden rounded-sm"
                    >
                        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white z-20">
                            <div>
                                <h2 className="text-3xl font-serif text-accent">¿Qué especialista necesito?</h2>
                                <p className="text-gray-500 font-light">Explora las diferentes áreas para encontrar tu camino.</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex border-b border-gray-100 bg-gray-50 overflow-x-auto">
                            {Object.keys(tabs).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-8 py-4 font-medium text-sm uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeTab === key ? 'text-accent bg-white' : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {tabs[key].label}
                                    {activeTab === key && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {tabs[activeTab].content.map((item, idx) => (
                                    <div key={idx} className={`p-6 bg-white shadow-sm border-l-4 ${activeTab === 'clasico' ? 'border-primary' : activeTab === 'medico' ? 'border-blue-400' : 'border-purple-400'}`}>
                                        <div className={`w-10 h-10 mb-4 flex items-center justify-center rounded-full ${activeTab === 'clasico' ? 'bg-green-50 text-primary' : activeTab === 'medico' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'}`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-accent mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-light">{item.text}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-white text-center">
                            <button
                                onClick={onClose}
                                className="minimal-btn bg-accent text-white border-transparent hover:bg-gray-800 w-full md:w-auto"
                            >
                                Entendido, quiero agendar mi evaluación
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PsychologistGuide;
