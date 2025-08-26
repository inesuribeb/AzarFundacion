// import './Hero2.css'

// function Hero2({ t }) {
//     return (
//         <section className='hero2-section'>
//             <img src="/Images/Logo/Logo blanco.png" alt="logo-fundacion-azar" />
//         </section>
//     );
// }

// export default Hero2;

import { useEffect, useRef, useState } from 'react';
import './Hero2.css';

function Hero2({ t }) {
    const sectionRef = useRef(null);
    const backgroundRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');

    useEffect(() => {
        const calculateHeight = () => {
            if (backgroundRef.current) {
                // Para background-image, simulamos una altura mayor para el efecto
                const viewportHeight = window.innerHeight;
                // Asumimos que queremos un efecto de parallax moderado
                const totalHeight = viewportHeight * 1.5; // 150% de altura extra para el scroll
                setSectionHeight(`${totalHeight}px`);
            }
        };

        const timer = setTimeout(calculateHeight, 100);
        window.addEventListener('resize', calculateHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !backgroundRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const background = backgroundRef.current;
            const container = containerRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Para background-image, simulamos el movimiento cambiando background-position
            const maxScroll = windowHeight * 0.3; // 30% de movimiento del background

            if (rect.top <= 0 && rect.bottom > windowHeight) {
                // Fase activa: fixed con scroll interno
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';

                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

                const backgroundOffset = scrollProgress * maxScroll;
                background.style.backgroundPosition = `center ${-backgroundOffset}px`;

            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                // Fase final: absolute al final
                container.style.display = 'flex';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';

                background.style.backgroundPosition = `center ${-maxScroll}px`;

            } else if (rect.top > 0) {
                // Antes de la sección: mostrar en posición inicial
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                background.style.backgroundPosition = 'center center';

            } else {
                // Después de la sección: ocultar
                container.style.display = 'none';
            }
        };

        let ticking = false;
        const optimizedScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [sectionHeight]);

    return (
        <section
            ref={sectionRef}
            className='hero2-section'
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className='hero2-container'>
                <div ref={backgroundRef} className='hero2-background'>
                    <img src="/Images/Logo/Logo blanco.png" alt="logo-fundacion-azar" />
                </div>
            </div>
        </section>
    );
}

export default Hero2;