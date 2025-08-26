// import './CoverArtPiece.css';

// function CoverArtPiece({ artPiece }) {
//     if (!artPiece) return null;

//     return (
//         <section className='cover-artpiece'>
//             <div className="cover-artpiece-background">
//                 <img 
//                     src={artPiece.image2} 
//                     alt={artPiece.title}
//                 />
//             </div>
//             <div className="cover-artpiece-content">
//                 {artPiece.introduction && (
//                     <div className="cover-artpiece-introduction">
//                         {artPiece.introduction}
//                     </div>
//                 )}
//                 <div className="cover-artpiece-title">
//                     <h1>{artPiece.title}</h1>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CoverArtPiece;

import { useEffect, useRef, useState } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './CoverArtPiece.css';

function CoverArtPiece({ artPiece, lightHeader = {} }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');
    const { setUseLightLogo, setUseLightHamburger } = useHeader();

    const { logo = false, hamburger = false } = lightHeader;

    if (!artPiece) return null;

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
    }, [artPiece]);

    useEffect(() => {
        if (!logo && !hamburger) return; 

        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const isInSection = rect.top <= 0 && rect.bottom > 0;

            if (logo) setUseLightLogo(isInSection);
            if (hamburger) setUseLightHamburger(isInSection);
        };

        if (logo) setUseLightLogo(true);
        if (hamburger) setUseLightHamburger(true);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (logo) setUseLightLogo(false);
            if (hamburger) setUseLightHamburger(false);
        };
    }, [logo, hamburger, setUseLightLogo, setUseLightHamburger]);

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
                container.style.display = 'block';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';

                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

                const translateY = -Math.min(scrollProgress * maxScroll, maxScroll);
                image.style.transform = `translateY(${translateY}px)`;

            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                // Fase final: absolute al final
                container.style.display = 'block';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';

                image.style.transform = `translateY(-${maxScroll}px)`;

            } else if (rect.top > 0) {
                // Antes de la sección: mostrar en posición inicial
                container.style.display = 'block';
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
            className='cover-artpiece'
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className="cover-artpiece-container">
                <div className="cover-artpiece-background">
                    <div ref={imageRef} className="image-wrapper-artpiece">
                        <img 
                            src={artPiece.image2} 
                            alt={artPiece.title}
                        />
                    </div>
                </div>
                <div className="cover-artpiece-content">
                    {artPiece.introduction && (
                        <div className="cover-artpiece-introduction">
                            {artPiece.introduction}
                        </div>
                    )}
                    <div className="cover-artpiece-title">
                        <h1>{artPiece.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoverArtPiece;