import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contacto" className="section bg-secondary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl mb-6">Inicia tu proceso</h2>
                        <p className="text-lg text-gray-600 mb-8 font-light">
                            Si deseas tener acompañamiento por un profesional o tienes alguna duda,
                            no dudes en ponerte en contacto. Estamos aquí para escucharte.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <a href="mailto:info@sanandotumente.com" className="text-accent hover:underline">
                                    info@sanandotumente.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <a href="tel:+2303604250" className="text-accent hover:underline">
                                    +230 360 4250
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="bg-white p-10 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-semibold text-gray-400">Nombre Completo</label>
                            <input type="text" className="w-full p-3 border-b border-gray-200 focus:border-primary outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-semibold text-gray-400">Correo Electrónico</label>
                            <input type="email" className="w-full p-3 border-b border-gray-200 focus:border-primary outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-semibold text-gray-400">Mensaje</label>
                            <textarea rows="4" className="w-full p-3 border-b border-gray-200 focus:border-primary outline-none transition-colors"></textarea>
                        </div>
                        <button type="submit" className="minimal-btn w-full">Enviar Mensaje</button>
                    </form>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    <p>© 2026 Terapia Serena. Inspirado en SanandotuMente. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
