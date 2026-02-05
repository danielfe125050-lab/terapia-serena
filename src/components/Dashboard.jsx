import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Calendar, User, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) return <div className="p-10 text-center">Cargando perfil...</div>;

    const isPatient = user.role === 'paciente';
    const isDoctor = user.role === 'psicologo';

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header Profile */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                    <div className="flex items-center gap-6">
                        <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full bg-gray-200" />
                        <div>
                            <h1 className="text-3xl font-serif text-accent font-bold mb-1">Hola, {user.name}</h1>
                            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${isPatient ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                {isPatient ? 'Paciente' : 'Especialista'}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 border-2 border-red-100 text-red-400 hover:bg-red-50 rounded-full transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-wide"
                    >
                        <LogOut className="w-4 h-4" />
                        Cerrar Sesión
                    </button>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar Stats (Mock) */}
                    <div className="col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Resumen</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium">Citas este mes</span>
                                    </div>
                                    <span className="font-bold text-accent">{isPatient ? '2' : '48'}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium">Horas totales</span>
                                    </div>
                                    <span className="font-bold text-accent">{isPatient ? '45 min' : '32 hrs'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Banner Promo */}
                        {isPatient && (
                            <div className="bg-gradient-to-br from-primary to-green-600 p-6 rounded-2xl text-white shadow-lg">
                                <h3 className="font-serif text-xl mb-2">¿Necesitas hablar?</h3>
                                <p className="text-white/80 text-sm mb-4">Agenda una sesión extra esta semana con 10% de descuento.</p>
                                <button className="w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-white/90">Agendar Ahora</button>
                            </div>
                        )}
                    </div>

                    {/* Main List */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-serif text-accent mb-6 flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-primary" />
                            {isPatient ? 'Mis Próximas Sesiones' : 'Agenda del Día'}
                        </h2>

                        <div className="space-y-4">
                            {(isPatient ? user.appointments : user.schedule).map((item) => (
                                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:shadow-md transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
                                            <span className="text-xs font-bold uppercase">{new Date(item.date).toLocaleDateString('es-ES', { month: 'short' })}</span>
                                            <span className="text-2xl font-bold">{new Date(item.date).getDate()}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{isPatient ? item.type : item.patient}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {item.time}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {isPatient ? item.doctor : item.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {item.status === 'Confirmada' ? (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3" /> Confirmada
                                            </span>
                                        ) : item.status === 'Finalizada' ? (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3" /> Finalizada
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> Pendiente
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
