// import './CoverResidency.css';

// function CoverResidency({ residencia }) {
//     if (!residencia) return null;

//     return (
//         <section className="cover-residency">
//             <div className="cover-residency-container">
//                 <div className="cover-residency-image">
//                     <img 
//                         src={residencia.image} 
//                         alt={residencia.title}
//                     />
//                 </div>

//                 <div className="cover-residency-content">
//                     <div className="cover-residency-title">
//                         <h1 dangerouslySetInnerHTML={{ 
//                             __html: residencia.title 
//                         }} />
//                         {residencia.title2 && (
//                             <h2 dangerouslySetInnerHTML={{ 
//                                 __html: residencia.title2 
//                             }} />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CoverResidency;

import { useEffect, useRef, useState } from 'react';
import './CoverResidency.css';

function CoverResidency({ residencia }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');

    if (!residencia) return null;

    useEffect(() => {
        const calculateHeight = () => {
            if (imageRef.current) {
                const imageHeight = imageRef.current.scrollHeight;
                const viewportHeight = window.innerHeight;
                const availableHeight = viewportHeight;

                if (imageHeight > availableHeight) {
                    const extraHeight = imageHeight - availableHeight;
                    const totalHeight = viewportHeight + extraHeight + 20;
                    setSectionHeight(`${totalHeight}px`);
                } else {
                    setSectionHeight('100vh');
                }
            }
        };

        const timer = setTimeout(calculateHeight, 100);
        window.addEventListener('resize', calculateHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateHeight);
        };
    }, [residencia]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !imageRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const image = imageRef.current;
            const container = containerRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const imageHeight = image.scrollHeight;
            const availableHeight = windowHeight;
            const maxScroll = Math.max(0, imageHeight - availableHeight);

            if (rect.top <= 0 && rect.bottom > windowHeight) {
                // Fase activa: fixed con scroll interno
                container.style.display = 'grid';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';

                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

                const translateY = -Math.min(scrollProgress * maxScroll, maxScroll);
                image.style.transform = `translateY(${translateY}px)`;

            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                // Fase final: absolute al final
                container.style.display = 'grid';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';

                image.style.transform = `translateY(-${maxScroll}px)`;

            } else if (rect.top > 0) {
                // Antes de la sección: mostrar en posición inicial
                container.style.display = 'grid';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                image.style.transform = 'translateY(0px)';

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
            className="cover-residency"
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className="cover-residency-container">
                <div className="cover-residency-image">
                    <div ref={imageRef} className="image-wrapper">
                        <img 
                            src={residencia.image} 
                            alt={residencia.title}
                        />
                    </div>
                </div>

                <div className="cover-residency-content">
                    <div className="cover-residency-title">
                        <h1 dangerouslySetInnerHTML={{ 
                            __html: residencia.title 
                        }} />
                        {residencia.title2 && (
                            <h2 dangerouslySetInnerHTML={{ 
                                __html: residencia.title2 
                            }} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoverResidency;