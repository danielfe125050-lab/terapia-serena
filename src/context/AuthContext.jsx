import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// Datos simulados para demostración
const MOCK_USERS = {
    'paciente@test.com': {
        name: 'Camila Rodriguez',
        role: 'paciente',
        avatar: 'https://ui-avatars.com/api/?name=Camila+Rodriguez&background=FF8A65&color=fff',
        appointments: [
            { id: 1, date: '2023-11-15', time: '10:00 AM', doctor: 'Dr. Roberto M.', type: 'Terapia Individual', status: 'Confirmada' },
            { id: 2, date: '2023-11-22', time: '10:00 AM', doctor: 'Dr. Roberto M.', type: 'Terapia Individual', status: 'Pendiente' }
        ]
    },
    'psico@test.com': {
        name: 'Dr. Roberto M.',
        role: 'psicologo',
        avatar: 'https://ui-avatars.com/api/?name=Roberto+M&background=2196F3&color=fff',
        schedule: [
            { id: 1, date: '2023-11-15', time: '09:00 AM', patient: 'Juan Pérez', type: 'Primera Consulta', status: 'Finalizada' },
            { id: 2, date: '2023-11-15', time: '10:00 AM', patient: 'Camila Rodriguez', type: 'Terapia Individual', status: 'Confirmada' },
            { id: 3, date: '2023-11-15', time: '11:30 AM', patient: 'Ana Gómez', type: 'Terapia de Pareja', status: 'Confirmada' }
        ]
    },
    'admin@test.com': {
        name: 'Administrador',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=Admin&background=333&color=fff',
        stats: {
            activePatients: 145,
            weeklyAppointments: 32,
            revenue: '$3.5M'
        }
    }
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Simulación: Acepta cualquier contraseña por ahora
        const foundUser = MOCK_USERS[email];
        if (foundUser) {
            setUser({ email, ...foundUser });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
