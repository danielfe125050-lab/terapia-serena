/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5D9CEC', // Azul Escudo (Confianza/Calma)
                secondary: '#F0F4F8', // Azul Hielo (Fondo suave)
                accent: '#102A43', // Navy Profundo (Texto/Contrastes)
                'accent-pop': '#486581', // Azul Acero
                'deep-blue': '#243B53', // Azul Noche
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
