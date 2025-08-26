// hooks/useMobile.js
import { useState, useEffect } from 'react';

export function useMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Detectar por ancho de pantalla (más confiable)
            const width = window.innerWidth;
            setIsMobile(width <= 768);
        };

        // Verificar al montar
        checkMobile();

        // Escuchar cambios de tamaño
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return isMobile;
}