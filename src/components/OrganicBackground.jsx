import React from 'react';
import { motion } from 'framer-motion';

const Blob = ({ color, className, delay = 0 }) => {
    return (
        <motion.div
            className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 ${className}`}
            style={{ backgroundColor: color }}
            animate={{
                x: [0, 30, -20, 0],
                y: [0, -50, 20, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
};

const OrganicBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-secondary/30">
            {/* Blob Coral - Top Left */}
            <Blob
                color="#E27D60"
                className="w-96 h-96 -top-20 -left-20"
                delay={0}
            />

            {/* Blob Verde - Bottom Right */}
            <Blob
                color="#8A9A5B"
                className="w-[500px] h-[500px] -bottom-32 -right-32"
                delay={5}
            />

            {/* Blob Azul Profundo - Center/Random */}
            <Blob
                color="#BECAAD" // Un verde más claro casi crema
                className="w-80 h-80 top-1/2 left-1/3"
                delay={2}
            />
        </div>
    );
};

export default OrganicBackground;
