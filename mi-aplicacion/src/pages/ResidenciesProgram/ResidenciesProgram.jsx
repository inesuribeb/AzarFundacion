import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import IntroResidencies from './sections/Intro/IntroResidencies';
import OpenCallR from './sections/OpenCall/OpenCallR';
import Finca from './sections/Finca/Finca';
import PastResidencies from './sections/PastResidencies/PastResidencies';
import BottomNavigation from './components/BottomNavigation';
import './ResidenciesProgram.css'

function ResidenciesProgram() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState(null); // Cambiar de 'opencall' a null
    
    // Referencias para las secciones
    const introRef = useRef(null);
    const openCallRef = useRef(null);
    const fincaRef = useRef(null);
    const pastResidenciesRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2, // Cuando el 50% de la sección esté visible
            rootMargin: '-20% 0px -20% 0px' // Margen para activar antes
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    setActiveSection(sectionId);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observar las secciones
        const sections = [
            { ref: introRef.current, id: null }, // IntroResidencies no tiene sección activa
            { ref: openCallRef.current, id: 'opencall' },
            { ref: fincaRef.current, id: 'finca' },
            { ref: pastResidenciesRef.current, id: 'pastresidencies' }
        ];

        sections.forEach(section => {
            if (section.ref) {
                section.ref.setAttribute('data-section', section.id || 'intro');
                observer.observe(section.ref);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section.ref) {
                    observer.unobserve(section.ref);
                }
            });
        };
    }, []);

    return (
        <div className='residencies-program-content'>
            <div className='bottom-navigation'>
                <BottomNavigation 
                    t={t} 
                    activeSection={activeSection}
                    onNavigate={setActiveSection}
                />
            </div>
            <div className='RP-sections'>
                <div ref={introRef} id="intro-section">
                    <IntroResidencies t={t}/>
                </div>
                
                <div ref={openCallRef} id="opencall-section">
                    <OpenCallR t={t}/>
                </div>
                
                <div ref={fincaRef} id="finca-section">
                    <Finca t={t}/>
                </div>
                
                <div ref={pastResidenciesRef} id="pastresidencies-section">
                    <PastResidencies t={t}/>
                </div>
            </div>
        </div>
    )
}

export default ResidenciesProgram;