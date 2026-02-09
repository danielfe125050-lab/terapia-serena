import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EllipsisVertical, X, Facebook, Instagram, Twitter, ChevronDown, LogIn, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSection = (title) => {
        if (expandedSection === title) {
            setExpandedSection(null);
        } else {
            setExpandedSection(title);
        }
    };

    const handleNavigation = (href) => {
        setIsOpen(false);
        if (href.startsWith('#servicio-')) {
            // Lógica especial para abrir servicios directamente
            const serviceId = parseInt(href.replace('#servicio-', ''));
            // 1. Navegar a home si no estamos allí
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById('servicios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                    // Despachar evento para abrir modal
                    window.dispatchEvent(new CustomEvent('openService', { detail: serviceId }));
                }, 100);
            } else {
                // 2. Si ya estamos en home, scrollear y abrir
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                // Despachar evento para abrir modal (con pequeño delay para que el scroll inicie)
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('openService', { detail: serviceId }));
                }, 300);
            }
        } else if (href.startsWith('#')) {
            // Scroll normal para otras secciones
            if (location.pathname === '/') {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(href);
        }
    };

    const menuItems = [
        {
            title: "Inicio",
            href: "#inicio",
            subItems: []
        },
        {
            title: "Áreas de Atención",
            href: "#servicios",
            subItems: [
                { title: "Ansiedad", href: "#servicio-1" },
                { title: "Depresión", href: "#servicio-2" },
                { title: "Estrés", href: "#servicio-3" },
                { title: "Dificultades Alimentación", href: "#servicio-4" },
                { title: "Autocomprensión", href: "#servicio-5" },
                { title: "Parejas", href: "#servicio-6" },
                { title: "Dificultades Sexuales", href: "#servicio-7" },
                { title: "Identidad", href: "#servicio-8" },
                { title: "Duelo Migratorio", href: "#servicio-9" }
            ]
        },
        {
            title: "Guía de Orientación",
            href: "#como-elegir",
            subItems: [
                { title: "Enfoques Terapéuticos", href: "#enfoques" },
                { title: "Chequeo Rápido", href: "#chequeo-rapido" }
            ]
        },
        {
            title: "Espacio de Calma",
            href: "#recursos",
            subItems: [
                { title: "Respiración Guiada", href: "#recurso-respiracion" },
                { title: "Pausa Emocional", href: "#recurso-pausa" },
                { title: "Gratitud", href: "#recurso-gratitud" },
                { title: "Autodiálogo", href: "#recurso-autodialogo" },
                { title: "Anclaje al Presente", href: "#recurso-anclaje" }
            ]
        },
        {
            title: "Nuestro Equipo",
            href: "#equipo",
            subItems: [
                { title: "Psicoanalista", href: "#psicoanalista" },
                { title: "Cognitivo-Conductual", href: "#cognitivo-conductual" },
                { title: "Humanista", href: "#humanista" },
                { title: "Sistémico", href: "#sist-mico" } // slugify produce sist-mico por la tilde
            ]
        },
        {
            title: "Contacto",
            href: "#contacto",
            subItems: []
        },
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 right-6 z-[100] p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/10 group"
            >
                <EllipsisVertical className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[90%] md:w-96 bg-accent text-white z-[70] shadow-2xl flex flex-col overflow-hidden"
                        >
                            <div className="p-6 flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-secondary" />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto px-6 pb-10 scrollbar-hide">
                                <ul className="flex flex-col gap-4">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx} className="border-b border-white/5 pb-2 last:border-none">
                                            <div className="flex items-center justify-between group">
                                                <a
                                                    // href={item.href} // Eliminamos href directo para manejarlo con onClick
                                                    onClick={() => {
                                                        if (!item.subItems.length) handleNavigation(item.href);
                                                    }}
                                                    className="text-xl font-serif text-secondary hover:text-white transition-colors py-2 block flex-1 cursor-pointer"
                                                >
                                                    {item.title}
                                                </a>
                                                {item.subItems.length > 0 && (
                                                    <button
                                                        onClick={() => toggleSection(item.title)}
                                                        className="p-2 text-white/50 hover:text-white transition-colors"
                                                    >
                                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedSection === item.title ? 'rotate-180' : ''}`} />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Submenu expansion */}
                                            <AnimatePresence>
                                                {item.subItems.length > 0 && expandedSection === item.title && (
                                                    <motion.ul
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 border-l-2 border-white/10 ml-2"
                                                    >
                                                        {item.subItems.map((sub, subIdx) => (
                                                            <li key={subIdx}>
                                                                <a
                                                                    // href={sub.href}
                                                                    onClick={() => handleNavigation(sub.href)}
                                                                    className="block py-2 text-sm text-gray-300 hover:text-white transition-colors hover:translate-x-1 duration-200 cursor-pointer"
                                                                >
                                                                    {sub.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                    {/* Login Link Special (DESACTIVADO TEMPORALMENTE - DEMO FINALIZADA)
                                    <li className="border-b border-white/5 pb-2 pt-4">
                                        <button
                                            onClick={() => handleNavigation(user ? '/dashboard' : '/login')}
                                            className={`w-full text-left text-xl font-serif py-2 flex items-center gap-3 transition-colors ${user ? 'text-primary' : 'text-white/80 hover:text-white'}`}
                                        >
                                            {user ? <User className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
                                            {user ? 'Mi Perfil' : 'Iniciar Sesión'}
                                        </button>
                                    </li>
                                    */}
                                </ul>
                            </nav>

                            <div className="p-8 border-t border-white/10 bg-black/10">
                                <p className="text-secondary/60 text-sm mb-4">Síguenos</p>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-primary transition-colors hover:scale-110 transform"><Instagram className="w-5 h-5" /></a>
                                    <a href="#" className="hover:text-primary transition-colors hover:scale-110 transform"><Facebook className="w-5 h-5" /></a>
                                    <a href="#" className="hover:text-primary transition-colors hover:scale-110 transform"><Twitter className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MenuDrawer;
