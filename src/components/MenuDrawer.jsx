import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EllipsisVertical, X, Facebook, Instagram, Twitter } from 'lucide-react';

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Inicio", href: "#inicio" },
        { title: "Servicios", href: "#servicios" },
        { title: "Conoce al Equipo", href: "#equipo" },
        { title: "Contacto", href: "#contacto" },
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 right-6 z-50 p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/10 group"
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
                            className="fixed top-0 right-0 h-full w-80 bg-accent text-white z-[70] shadow-2xl p-10 flex flex-col"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end p-2 hover:bg-white/10 rounded-full mb-12 transition-colors"
                            >
                                <X className="w-6 h-6 text-secondary" />
                            </button>

                            <nav className="flex-1 flex flex-col gap-6">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-serif text-secondary hover:text-primary transition-colors hover:translate-x-2 duration-300 block"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>

                            <div className="border-t border-white/10 pt-8">
                                <p className="text-secondary/60 text-sm mb-4">Síguenos</p>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                                    <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                                    <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
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
