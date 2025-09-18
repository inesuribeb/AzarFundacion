import { useLanguage } from '../../contexts/LanguageContext';
import { useMobile } from '../../components/Hooks/useMobile';
import { useResidencies } from '../../contexts/ResidenciesContext';
import { useEffect, useRef } from 'react';
import { mockNextResidencia } from '../../utils/Data/NextResidencyData';
import IntroResidencies from './sections/Intro/IntroResidencies';
import IntroRPhone from './sections/Intro/IntroRPhone';
import OpenCallR from './sections/OpenCall/OpenCallR';
import Finca from './sections/Finca/Finca';
import FincaPhone from './sections/Finca/FincaPhone';
import PastResidencies from './sections/PastResidencies/PastResidencies';
import BottomNavigation from './components/BottomNavigation';
import BottomNavPhone from './components/BottomNavPhone';
import './ResidenciesProgram.css'

function ResidenciesProgram() {
    const { t } = useLanguage();
    // const { setActiveSection } = useResidencies();
    const { activeSection, setActiveSection } = useResidencies();
    const currentResidency = mockNextResidencia[0]; 

    const isMobile = useMobile();

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
                { ref: fincaRef.current, id: 'finca' },
                { ref: openCallRef.current, id: 'opencall' },
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

    // En ResidenciesProgram.js, añade este useEffect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollCenter = scrollY + windowHeight / 2;

            const sections = [
                { ref: introRef.current, id: 'intro' },
                { ref: fincaRef.current, id: 'finca' },
                { ref: openCallRef.current, id: 'opencall' },
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

            const programContent = document.querySelector('.residencies-program-content');
            const footer = document.querySelector('.footer-content');
            const navigation = document.querySelector(isMobile ? '.bottom-navigation-phone' : '.bottom-navigation');

            if (programContent && footer && navigation) {
                const footerRect = footer.getBoundingClientRect();

                if (footerRect.top <= windowHeight) {
                    navigation.style.position = 'absolute';
                    navigation.style.bottom = isMobile ? '0.5rem' : '0';
                    if (isMobile) navigation.style.left = '0.5rem';
                } else {
                    navigation.style.position = 'fixed';
                    navigation.style.bottom = isMobile ? '0.5rem' : '0';
                    if (isMobile) navigation.style.left = '0.5rem';
                }
            }
        };

        // Resto del useEffect igual...
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
    }, [setActiveSection, isMobile]); 

    return (
        <div className='residencies-program-content'>
            <div className='RP-sections'>
                <div ref={introRef} id="intro-section">
                    {isMobile ? (
                        <IntroRPhone t={t} />
                    ) : (
                        <IntroResidencies t={t} />
                    )}
                </div>

                <div ref={fincaRef} id="finca-section">
                    {isMobile ? (
                        <FincaPhone t={t} />
                    ) : (
                        <Finca t={t} />
                    )}
                </div>

                <div ref={openCallRef} id="opencall-section">
                    <OpenCallR t={t} residency={currentResidency}/>
                </div>

                <div ref={pastResidenciesRef} id="pastresidencies-section">
                    <PastResidencies t={t} />
                </div>
            </div>

            {isMobile ? (
                <BottomNavPhone
                    t={t}
                    activeSection={activeSection}
                    onNavigate={setActiveSection}
                />
            ) : (
                <BottomNavigation
                    t={t}
                    activeSection={activeSection}
                    onNavigate={setActiveSection}
                />
            )}
        </div>
    )
}

export default ResidenciesProgram;