import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, Zap, Heart, Frown, Utensils, CircleHelp, ArrowRight, X, Globe, Activity, Fingerprint } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: "Ansiedad",
        desc: "Mente y cuerpo en alerta constante, preocupación excesiva y dificultad para relajarse.",
        fullDesc: "A veces sientes que tu mente y tu cuerpo están en alerta, incluso cuando no hay un motivo claro. La preocupación aparece de forma constante, te cuesta relajarte y sientes que algo malo podría pasar. Con el tiempo, esta sensación empieza a afectar tu bienestar, tus relaciones y tu vida diaria.",
        color: "bg-blue-100",
        textColor: "text-blue-900",
        icon: CloudRain,
        details: [
            "Vivir con preocupación constante o sensación de peligro",
            "Sentirte inquieto/a, nervioso/a o en estado de alerta permanente",
            "Pensamientos que no se detienen",
            "Palpitaciones, presión en el pecho o dificultad para respirar",
            "Tensión muscular, dolores de cabeza o molestias en el estómago",
            "Dificultad para dormir, descansar o concentrarte",
            "Evitar situaciones por miedo o malestar"
        ]
    },
    {
        id: 2,
        title: "Depresión",
        desc: "Sensación de vacío, cansancio profundo y pérdida de interés en lo que antes disfrutabas.",
        fullDesc: "A veces sientes que no es solo tristeza, sino un vacío o un cansancio profundo que no se va. Lo que antes te motivaba ya no genera el mismo interés y todo parece más pesado. Este estado se mantiene en el tiempo y comienza a afectar cómo te sientes, piensas y te relacionas con tu entorno.",
        color: "bg-indigo-100",
        textColor: "text-indigo-900",
        icon: Frown,
        details: [
            "Tristeza frecuente o sensación de vacío",
            "Pérdida de interés o placer en actividades que antes disfrutabas",
            "Cansancio constante o falta de energía",
            "Cambios en el sueño o el apetito",
            "Autocrítica, culpa o desánimo persistente",
            "Tendencia al aislamiento"
        ]
    },
    {
        id: 3,
        title: "Estrés",
        desc: "Sensación constante de prisa, agotamiento y dificultad para descansar o desconectar.",
        fullDesc: "A veces sientes que vas siempre apurado/a, como si no pudieras parar. Las responsabilidades se acumulan y no logras descansar lo suficiente. Aunque sigues funcionando, tu cuerpo y tu mente están agotados.",
        color: "bg-orange-100",
        textColor: "text-orange-900",
        icon: Zap,
        details: [
            "Sensación de cansancio la mayor parte del tiempo",
            "Irritabilidad o poca paciencia",
            "Dificultad para concentrarte o tomar decisiones",
            "Dolores frecuentes en cuello, espalda o mandíbula",
            "Sensación constante de estar “corriendo” o bajo presión"
        ]
    },
    {
        id: 4,
        title: "Dificultades Alimentación",
        desc: "Relación tensa con la comida y el cuerpo, marcada por culpa, ansiedad o pérdida de control.",
        fullDesc: "A veces sientes que tu relación con la comida y con tu cuerpo se vuelve tensa o angustiante. La comida ocupa mucho espacio en tus pensamientos y aparece la culpa, la ansiedad o la sensación de pérdida de control. No es solo lo que comes, sino cómo te sientes contigo.",
        color: "bg-green-100",
        textColor: "text-green-900",
        icon: Utensils,
        details: [
            "Preocupación constante por la comida, el peso o la imagen corporal",
            "Restricción alimentaria o dietas muy estrictas",
            "Comer con ansiedad o sentir que pierdes el control",
            "Uso de la comida para calmar emociones",
            "Culpa, vergüenza o malestar después de comer",
            "Evitar comidas o situaciones sociales",
            "Cambios notorios en el peso"
        ]
    },
    {
        id: 5,
        title: "Autocomprensión",
        desc: "Confusión sobre lo que sientes o necesitas, costando identificar emociones o reacciones.",
        fullDesc: "A veces sientes que no logras entender del todo lo que te pasa. Te cuesta identificar lo que sientes, lo que necesitas o por qué reaccionas de cierta manera. Esto puede generar confusión y una sensación de desconexión contigo mismo/a.",
        color: "bg-teal-100",
        textColor: "text-teal-900",
        icon: CircleHelp,
        details: [
            "Dificultad para reconocer o nombrar tus emociones",
            "Sensación de “no saber qué te pasa”",
            "Confusión frente a tus decisiones o reacciones",
            "Tendencia a minimizar lo que sientes",
            "Dificultad para reconocer tus necesidades y límites",
            "Sensación de desconexión contigo o con tu cuerpo"
        ]
    },
    {
        id: 6,
        title: "Parejas",
        desc: "Conflictos repetitivos, distancia emocional y dificultad para comunicarse o conectar.",
        fullDesc: "A veces sientes que en la relación algo no está funcionando como antes. Aparecen discusiones, silencios o distancia emocional, y aunque hay intención de mejorar, no siempre saben cómo hacerlo.",
        color: "bg-rose-100",
        textColor: "text-rose-900",
        icon: Heart,
        details: [
            "Discusiones frecuentes o silencios prolongados",
            "Dificultad para expresar lo que sienten",
            "Sensación de distancia emocional",
            "Conflictos que se repiten sin resolverse",
            "Falta de acuerdos, confianza o conexión"
        ]
    },
    {
        id: 7,
        title: "Dificultades Sexuales",
        desc: "Incomodidad, bloqueo o falta de fluidez en la vida sexual, generando malestar personal o en pareja.",
        fullDesc: "A veces sientes que algo no fluye como te gustaría en tu vida sexual. Puede aparecer incomodidad, bloqueo, desconexión o preocupación, y esto empieza a generar malestar contigo mismo/a o en tus vínculos. No siempre es fácil hablarlo, y muchas veces se vive en silencio.",
        color: "bg-red-100", // Rojo suave para variar
        textColor: "text-red-900",
        icon: Activity, // Usando Activity como metáfora de intimidad/energía física
        details: [
            "Sentir ansiedad, tensión o incomodidad en situaciones sexuales",
            "Falta de deseo o dificultad para conectar con el disfrute",
            "Pensamientos de presión, miedo o autoexigencia",
            "Sensación de desconexión con tu cuerpo",
            "Evitar encuentros íntimos para no sentirte mal",
            "Vergüenza, culpa o frustración en relación a tu vida sexual",
            "Dificultad para hablar de esto con tu pareja o con otras personas"
        ]
    },
    {
        id: 8,
        title: "Identidad",
        desc: "Dudas y conflictos sobre quién eres, sensación de no encajar o no ser auténtico.",
        fullDesc: "A veces sientes dudas, incomodidad o conflicto con aspectos de quién eres. Puede haber confusión, cuestionamientos o una sensación de no encajar del todo, y esto genera malestar interno o dificultad para relacionarte con los demás de manera auténtica.",
        color: "bg-purple-100",
        textColor: "text-purple-900",
        icon: Fingerprint,
        details: [
            "Dudas persistentes sobre tu identidad o cómo te sientes contigo",
            "Sensación de confusión o contradicción interna",
            "Malestar al intentar encajar en expectativas externas",
            "Miedo a expresar quién eres realmente",
            "Sensación de no pertenecer o de estar “fuera de lugar”",
            "Necesidad de entenderte mejor sin saber por dónde empezar"
        ]
    },
    {
        id: 9,
        title: "Duelo Migratorio",
        desc: "Nostalgia y confusión al dejar atrás tu hogar, sintiéndote entre dos mundos.",
        fullDesc: "A veces sientes una mezcla de nostalgia, tristeza y confusión al haber dejado atrás personas, lugares, costumbres y una forma de vida conocida. Mientras intentas adaptarte a lo nuevo, puede aparecer la sensación de no pertenecer del todo, de estar entre dos mundos. Este proceso no siempre es visible para los demás, pero se vive profundamente por dentro.",
        color: "bg-amber-100",
        textColor: "text-amber-900",
        icon: Globe,
        details: [
            "Extrañar a tu gente, tus lugares o tu cultura, y sentirte fuera de lugar",
            "Echar de menos tus rutinas, tu forma de vivir o de relacionarte",
            "Sentir culpa por haberte ido… o por quedarte",
            "Idealizar a veces tu país de origen y, otras veces, el nuevo lugar",
            "Sentirte más sensible, cansado/a o emocionalmente vulnerable",
            "Tener la sensación de no encajar completamente ni aquí ni allá",
            "Vivir emociones contradictorias: gratitud y tristeza al mismo tiempo"
        ]
    }
];

const InteractiveServices = () => {
    const [selectedId, setSelectedId] = useState(null);
    const location = useLocation();

    // Función para manejar el cambio de hash
    // Efecto para escuchar cambios de ruta, hash y eventos personalizados
    useEffect(() => {
        // Manejador para el evento personalizado desde el menú
        const handleOpenService = (event) => {
            const id = event.detail;
            if (id) setSelectedId(id);
        };

        // Manejador tradicional por hash
        const handleHashChange = () => {
            if (window.location.hash && window.location.hash.includes('servicio-')) {
                const id = parseInt(window.location.hash.split('servicio-')[1]);
                if (!isNaN(id) && id >= 1 && id <= 9) {
                    setTimeout(() => {
                        setSelectedId(id);
                    }, 600);
                }
            }
        };

        // Registrar listeners
        window.addEventListener('openService', handleOpenService);
        window.addEventListener('hashchange', handleHashChange);

        // Chequeo inicial
        handleHashChange();

        return () => {
            window.removeEventListener('openService', handleOpenService);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location]);


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
                            id={`servicio-${service.id}`} // ID para navegación
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedId(service.id)}
                            key={service.id}
                            className={`p-5 md:p-8 rounded-2xl cursor-pointer hover:shadow-xl transition-shadow border border-transparent ${service.color} relative overflow-hidden group min-h-[160px] md:min-h-[250px] flex flex-col`}
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-4">
                                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/60 mb-3 md:mb-4`}>
                                    <service.icon className={`w-6 h-6 ${service.textColor}`} />
                                </div>
                                <h3 className={`text-lg md:text-xl font-bold ${service.textColor} mb-2 md:mb-3`}>{service.title}</h3>
                                <p className={`text-sm md:text-base ${service.textColor} opacity-90 font-medium leading-relaxed`}>{service.desc}</p>
                            </div>

                            <div className="mt-auto pt-4 flex items-center justify-between">
                                <span className="text-sm font-bold text-accent/80 group-hover:text-accent transition-colors flex items-center gap-2">
                                    Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
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
                                        <div className="p-6 md:p-10">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/40 hover:bg-white/60 rounded-full transition-colors z-20"
                                            >
                                                <X className="w-6 h-6 md:w-5 md:h-5 text-gray-700" />
                                            </button>

                                            <div className="mb-6">
                                                <service.icon className={`w-12 h-12 ${service.textColor}`} />
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-blue-900 mb-4">{service.title}</h3>
                                            <p className={`text-base md:text-lg ${service.textColor} leading-relaxed font-medium mb-8`}>
                                                {service.fullDesc || service.desc}
                                            </p>

                                            {service.details && (
                                                <div className={`mb-8 p-6 rounded-2xl bg-white/50 border border-white/40`}>
                                                    <h4 className={`font-bold mb-4 uppercase tracking-wider text-sm ${service.textColor} opacity-80`}>Señales Comunes:</h4>
                                                    <ul className={`space-y-3 ${service.textColor}`}>
                                                        {service.details.map((item, idx) => (
                                                            <li key={idx} className="flex gap-3 text-base leading-snug">
                                                                <span className="opacity-50">•</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

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
