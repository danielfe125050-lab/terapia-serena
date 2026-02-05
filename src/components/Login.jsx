import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            setError('Credenciales inválidas. Intenta con los usuarios de prueba.');
        }
    };

    return (
        <div className="min-h-screen pt-24 bg-secondary flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-md border border-gray-100"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-accent mb-2">Bienvenido</h2>
                    <p className="text-gray-500">Ingresa a tu espacio personal</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Correo</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="tu@correo.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group">
                        Ingresar
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* DEMO HINTS */}
                <div className="mt-8 pt-8 border-t border-gray-100 text-xs text-gray-400">
                    <p className="mb-2 font-bold uppercase tracking-wider text-center">Usuarios de Prueba (Click para copiar)</p>
                    <div className="grid grid-cols-1 gap-2">
                        <button onClick={() => { setEmail('paciente@test.com'); setPassword('123'); }} className="p-2 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded text-left transition-colors truncate">
                            👤 paciente@test.com
                        </button>
                        <button onClick={() => { setEmail('psico@test.com'); setPassword('123'); }} className="p-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 rounded text-left transition-colors truncate">
                            🩺 psico@test.com
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
