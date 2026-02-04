import React, { useState } from 'react';
import { motion } from 'framer-motion';

const team = [
    // Grupo 1: Terapias Clásicas (Imagen: team-all.png - 4 personas)
    {
        name: "Dr. Roberto M.",
        role: "Psicoanalista",
        desc: "Psicólogo con especialización en clínica dinámica y amplia experiencia en psicoterapia profunda. Su enfoque se centra en la identificación de patrones inconscientes para resolver conflictos de raíz.",
        imgSrc: "/team-all.png",
        imgPosition: "0% 0%",
        bgSize: "400%"
    },
    {
        name: "Lic. Ana S.",
        role: "Cognitivo-Conductual",
        desc: "Profesional enfocada en herramientas prácticas. Cuenta con diplomados en neuroeducación y 10 años de experiencia ayudando a pacientes a reprogramar hábitos y pensamientos limitantes.",
        imgSrc: "/team-all.png",
        imgPosition: "33% 0%",
        bgSize: "400%"
    },
    {
        name: "Dra. Elena R.",
        role: "Humanista",
        desc: "Especialista en desarrollo humano con un enfoque cálido y empático. Brinda acompañamiento en crisis vitales, duelos y procesos de autodescubrimiento, fomentando el potencial personal.",
        imgSrc: "/team-all.png",
        imgPosition: "66% 0%",
        bgSize: "400%"
    },
    {
        name: "Lic. Carlos D.",
        role: "Sistémico",
        desc: "Experto en dinámicas vinculares. Realiza intervención con parejas y familias para mejorar la comunicación y resolver conflictos desde una perspectiva relacional integradora.",
        imgSrc: "/team-all.png",
        imgPosition: "100% 0%",
        bgSize: "400%"
    },
    // Grupo 2: Especialistas y 3ra Generación
    {
        name: "Dra. Sofia V.",
        role: "Psiquiatra",
        desc: "Médica psiquiatra con enfoque integral. Combina el tratamiento farmacológico con psicoterapia para abordar desbalances químicos severos con humanidad y rigor científico.",
        imgSrc: "/specialists-all.png",
        imgPosition: "0% 0%",
        bgSize: "300% 200%"
    },
    {
        name: "Dr. Javier L.",
        role: "Neuropsicólogo",
        desc: "Especialista en la relación cerebro-conducta. Realiza evaluaciones cognitivas exhaustivas y diseña planes de rehabilitación para TDAH, memoria y funciones ejecutivas.",
        imgSrc: "/specialists-all.png",
        imgPosition: "50% 0%",
        bgSize: "300% 200%"
    },
    {
        name: "Lic. Mariana P.",
        role: "Infanto-Juvenil",
        desc: "Psicóloga dedicada al bienestar de la niñez. Utiliza la ludoterapia y técnicas creativas para conectar con el mundo emocional de los niños y orientar a los padres en la crianza.",
        imgSrc: "/specialists-all.png",
        imgPosition: "100% 0%",
        bgSize: "300% 200%"
    },
    {
        name: "Dra. Laura G.",
        role: "Sexóloga",
        desc: "Experta en salud sexual y de pareja. Ofrece un espacio seguro y libre de juicios para abordar disfunciones, recuperar el deseo y mejorar la intimidad en las relaciones.",
        imgSrc: "/specialists-all.png",
        imgPosition: "0% 100%",
        bgSize: "300% 200%"
    },
    {
        name: "Dr. Fernando T.",
        role: "Psicólogo Forense",
        desc: "Perito psicólogo con amplia trayectoria en el ámbito judicial. Realiza evaluaciones periciales rigurosas y asesoramiento experto en procesos legales complejos.",
        imgSrc: "/specialists-all.png",
        imgPosition: "50% 100%",
        bgSize: "300% 200%"
    },
    {
        name: "Lic. Kenji O.",
        role: "Tercera Generación",
        desc: "Facilitador de Mindfulness y Terapeut ACT. Te acompaña a construir una vida plena aceptando tus emociones y comprometiéndote con tus valores más profundos.",
        imgSrc: "/specialists-all.png",
        imgPosition: "100% 100%",
        bgSize: "300% 200%"
    }
];

const Team = () => {
    const [filter, setFilter] = useState('Todos');
    const categories = ["Todos", "Terapia", "Médica/Especializada"];

    const filteredTeam = team.filter(member => {
        if (filter === 'Todos') return true;
        if (filter === 'Terapia') return ["Psicoanalista", "Cognitivo-Conductual", "Humanista", "Sistémico", "Tercera Generación"].includes(member.role);
        if (filter === 'Médica/Especializada') return !["Psicoanalista", "Cognitivo-Conductual", "Humanista", "Sistémico", "Tercera Generación"].includes(member.role);
        return true;
    });

    return (
        <section id="equipo" className="section bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl mb-4 font-serif text-gray-400">Conoce a nuestros especialistas</h2>
                    <div className="flex justify-center gap-4 mb-8 flex-wrap mt-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all rounded-full ${filter === cat
                                    ? 'bg-primary text-white font-bold'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {filteredTeam.map((member, index) => (
                        <motion.div
                            layout
                            key={member.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            id={member.role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            className="flex flex-col justify-between scroll-mt-32"
                        >
                            <div className="mb-6">
                                <p className="text-gray-500 italic font-light leading-relaxed text-[15px]">
                                    "{member.desc}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-200 shrink-0">
                                    <img
                                        src={member.imgSrc}
                                        alt={member.name}
                                        className="absolute top-0 left-0"
                                        style={{
                                            width: member.bgSize.split(' ')[0],
                                            height: member.bgSize.split(' ')[1] || '100%',
                                            maxWidth: 'none',
                                            objectPosition: member.imgPosition
                                        }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold text-sm tracking-wide">{member.name}</h3>
                                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
