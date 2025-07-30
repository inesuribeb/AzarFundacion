import { useLanguage } from '../../contexts/LanguageContext';
import { useResidencies } from '../../contexts/ResidenciesContext';
import { useEffect, useRef } from 'react';
import IntroResidencies from './sections/Intro/IntroResidencies';
import OpenCallR from './sections/OpenCall/OpenCallR';
import Finca from './sections/Finca/Finca';
import PastResidencies from './sections/PastResidencies/PastResidencies';
import './ResidenciesProgram.css'

function ResidenciesProgram() {
    const { t } = useLanguage();
    const { setActiveSection } = useResidencies();

    const introRef = useRef(null);
    const openCallRef = useRef(null);
    const fincaRef = useRef(null);
    const pastResidenciesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollCenter = scrollY + windowHeight / 2;

            const sections = [
                { ref: introRef.current, id: 'intro' },
                { ref: openCallRef.current, id: 'opencall' },
                { ref: fincaRef.current, id: 'finca' },
                { ref: pastResidenciesRef.current, id: 'pastresidencies' }
            ];

            let currentSection = null;

            sections.forEach(section => {
                if (section.ref) {
                    const rect = section.ref.getBoundingClientRect();
                    const sectionTop = scrollY + rect.top;
                    const sectionBottom = sectionTop + rect.height;

                    if (scrollCenter >= sectionTop && scrollCenter < sectionBottom) {
                        currentSection = section.id;
                    }
                }
            });

            if (currentSection !== null) {
                setActiveSection(currentSection === 'intro' ? null : currentSection);
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
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [setActiveSection]);


    return (
        <div className='residencies-program-content'>
            <div className='RP-sections'>
                <div ref={introRef} id="intro-section">
                    <IntroResidencies t={t} />
                </div>

                <div ref={openCallRef} id="opencall-section">
                    <OpenCallR t={t} />
                </div>

                <div ref={fincaRef} id="finca-section">
                    <Finca t={t} />
                </div>

                <div ref={pastResidenciesRef} id="pastresidencies-section">
                    <PastResidencies t={t} />
                </div>
            </div>
        </div>
    )
}

export default ResidenciesProgram;