import { useEffect } from 'react';
import { useMobile } from '../../components/Hooks/useMobile';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { mockNextResidencia } from '../../utils/Data/NextResidencyData';
import Hero2 from './sections/Hero/Hero2';
import Hero3 from './sections/Intro/Hero3';
import HeroPhone from './sections/Hero/HeroPhone';
import Intro2 from './sections/Intro/Intro2';
import Intro from './sections/Intro/Intro';
import OpenCall from './sections/OpenCall/OpenCall';
import NavigationTabs from './sections/Intro/components/NavigationTabs';
import './Home.css'

function Home() {
    const { setHideTitle } = useHeader();
    const { t, getRoute } = useLanguage();
    const isMobile = useMobile();
    const localizedNextResidency = useLocalizedData(mockNextResidencia);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = isMobile
                ? document.querySelector('.section-hero-phone')
                : document.querySelector('.hero2-section');

            if (!heroSection) return;

            const heroRect = heroSection.getBoundingClientRect();
            const isInHero = heroRect.top <= 0 && heroRect.bottom > 0;

            setHideTitle(isInHero);
        };

        setHideTitle(true);
        

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            setHideTitle(false);
        };
    }, [setHideTitle, isMobile]);

    return (
        <div className='home-content'>
            {isMobile ? (
                <HeroPhone
                    t={t}
                    lightHeader={{ hamburger: true, logo: true }}
                />
            ) : (
                <Hero2
                    t={t}
                    lightHeader={{ hamburger: true }}
                />
            )}
            <Intro t={t} getRoute={getRoute} />
            <OpenCall
                t={t}
                data={localizedNextResidency}
            />
        </div>
    )
}

export default Home;