import { useEffect, useRef, useState } from 'react';
import MiniBlue from '../../../../components/Titles/MiniBlue/MiniBlue';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import Texts from '../../../../components/Texts/Texts';
import './IntroResidencies.css'

function IntroResidencies({ t }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');

    useEffect(() => {
        const calculateHeight = () => {
            if (contentRef.current) {
                const contentHeight = contentRef.current.scrollHeight;
                const viewportHeight = window.innerHeight;
                const availableHeight = viewportHeight - 180;
                
                if (contentHeight > availableHeight) {
                    const extraHeight = contentHeight - availableHeight;
                    // Reducir el buffer para que coincidan mejor texto e imagen
                    const totalHeight = viewportHeight + extraHeight + 20; // ✅ Solo 20px buffer (antes era 50)
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
    }, [t]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !contentRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const content = contentRef.current;
            const container = containerRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calcular scroll interno máximo
            const contentHeight = content.scrollHeight;
            const availableHeight = windowHeight - 100;
            const maxScroll = Math.max(0, contentHeight - availableHeight);
            
            if (rect.top <= 0 && rect.bottom > windowHeight) {
                // Fase activa: fixed con scroll interno
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                
                // Calcular progreso del scroll interno
                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);
                
                // Aplicar scroll interno
                const translateY = -Math.min(scrollProgress * maxScroll, maxScroll);
                content.style.transform = `translateY(${translateY}px)`;
                
            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                // Fase final: cambiar a absolute al final de la sección
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';
                
                // Mantener texto en posición final
                content.style.transform = `translateY(-${maxScroll}px)`;
                
            } else if (rect.top > 0) {
                // Antes de la sección
                container.style.display = 'none';
                content.style.transform = 'translateY(0px)';
                
            } else {
                // Después de la sección
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
            className='intro-residencies-section'
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className='intro-viewport-container'>
                <div className='left-column-intro'>
                    <div ref={contentRef} className='intro-content-wrapper'>
                        <div className='intro-titles'>
                            <MiniBlue>{t('residenciesProgramMini')}</MiniBlue>
                            <BigSerif>{t('introTitle')}</BigSerif>
                        </div>
                        <div className='intro-info'>
                            <Texts size="large" className="intro-text">{t('introText')}</Texts>
                        </div>
                    </div>
                </div>
                <div className='right-column-intro'>
                    <img src="/Images/ResidenciesProgram/Intro/tijeras.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default IntroResidencies;