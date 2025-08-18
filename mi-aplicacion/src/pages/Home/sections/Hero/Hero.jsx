// import { useEffect, useRef, useState } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext';
// import './Hero.css'

// function Hero({ t }) {
//     const sectionRef = useRef(null);
//     const containerRef = useRef(null);
//     const imageRef = useRef(null);
//     const [sectionHeight, setSectionHeight] = useState('300vh');

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!sectionRef.current || !containerRef.current || !imageRef.current) return;

//             const section = sectionRef.current;
//             const container = containerRef.current;
//             const image = imageRef.current;
//             const rect = section.getBoundingClientRect();
//             const windowHeight = window.innerHeight;
            
//             if (rect.top <= 0 && rect.bottom > windowHeight) {
//                 container.style.position = 'fixed';
//                 container.style.top = '0px';
//                 container.style.left = '0px';
                
//                 const scrollDistance = rect.height - windowHeight;
//                 const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);
                
//                 const imageTranslateY = (1 - scrollProgress) * 70;
//                 image.style.transform = `translateY(${imageTranslateY}vh)`;
                
//             } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
//                 container.style.position = 'absolute';
//                 container.style.top = `${rect.height - windowHeight}px`;
//                 container.style.left = '0px';
                
//                 image.style.transform = 'translateY(0)';
                
//             } else if (rect.top > 0) {
//                 container.style.position = 'fixed';
//                 container.style.top = '0px';
//                 container.style.left = '0px';
                
//                 image.style.transform = 'translateY(70vh)';
                
//             } else {
//                 container.style.display = 'none';
//             }
//         };

//         let ticking = false;
//         const optimizedScroll = () => {
//             if (!ticking) {
//                 requestAnimationFrame(() => {
//                     handleScroll();
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', optimizedScroll, { passive: true });
//         handleScroll(); 

//         return () => window.removeEventListener('scroll', optimizedScroll);
//     }, []);

//     return (
//         <section 
//             ref={sectionRef}
//             className='hero-section'
//             style={{ height: sectionHeight }}
//         >
//             <div ref={containerRef} className='hero-viewport-container'>
//                 <h1>
//                     <span className="fundacionHero">FUNDACIÓN </span>
//                     <span className="azarHero">AZAR</span>
//                 </h1>
//                 <div className='hero-image-container'>
//                     <img 
//                         ref={imageRef}
//                         src="/Images/Home/HomeBackground.jpg" 
//                         alt="" 
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero;

import { useEffect, useRef, useState } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './Hero.css'

function Hero({ t }) {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('300vh');

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current || !imageRef.current) return;

            const section = sectionRef.current;
            const container = containerRef.current;
            const image = imageRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= 0 && rect.bottom > windowHeight) {
                // Fase activa: fixed container
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                
                // Calcular progreso del scroll (0 = inicio, 1 = final)
                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);
                
                // La imagen empieza abajo (70vh) y sube hasta el centro (0)
                const imageTranslateY = (1 - scrollProgress) * 70;
                image.style.transform = `translateY(${imageTranslateY}vh)`;
                
            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                // Fase final: absolute al final
                container.style.display = 'flex';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';
                
                // Imagen en posición final (centrada)
                image.style.transform = 'translateY(0)';
                
            } else if (rect.top > 0) {
                // Antes de la sección: posición inicial
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                
                // Imagen en posición inicial (abajo)
                image.style.transform = 'translateY(70vh)';
                
            } else {
                // Solo ocultar cuando esté completamente fuera del viewport
                if (rect.bottom <= 0) {
                    container.style.display = 'none';
                } else {
                    // Si aún hay parte visible, mantener visible con estado final
                    container.style.display = 'flex';
                    container.style.position = 'fixed';
                    container.style.top = '0px';
                    container.style.left = '0px';
                    image.style.transform = 'translateY(0)';
                }
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
        handleScroll(); // Ejecutar una vez al cargar

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, []);

    return (
        <section 
            ref={sectionRef}
            className='hero-section'
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className='hero-viewport-container'>
                <h1>
                    <span className="fundacionHero">FUNDACIÓN </span>
                    <span className="azarHero">AZAR</span>
                </h1>
                <div className='hero-image-container'>
                    <img 
                        ref={imageRef}
                        src="/Images/Home/HomeBackground.jpg" 
                        alt="" 
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;