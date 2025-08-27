import { useEffect } from 'react';
import { useMobile } from '../../components/Hooks/useMobile';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero2 from './sections/Hero/Hero2';
import HeroPhone from './sections/Hero/HeroPhone';
import Intro2 from './sections/Intro/Intro2';
import OpenCall from './sections/OpenCall/OpenCall';
import './Home.css'

function Home() {
    const { setHideTitle } = useHeader();
    const { t , getRoute } = useLanguage();
    const isMobile = useMobile(); 
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const heroSection = document.querySelector('.hero2-section');
    //         if (!heroSection) return;
            
    //         const heroRect = heroSection.getBoundingClientRect();
    //         const isInHero = heroRect.top <= 0 && heroRect.bottom > 0;
            
    //         setHideTitle(isInHero);
    //     };
        
    //     setHideTitle(true);
        
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         setHideTitle(false);
    //     };
    // }, [setHideTitle]);

    useEffect(() => {
        const handleScroll = () => {
            // Buscar la sección correcta según el dispositivo
            const heroSection = isMobile 
                ? document.querySelector('.section-hero-phone')  // 📱 Móvil
                : document.querySelector('.hero2-section');      // 🖥️ Desktop
                
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
            {/* <Hero2 
                t={t} 
                lightHeader={{ hamburger: true }}
            /> */}
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
            <Intro2 t={t} getRoute={getRoute}/>
            <OpenCall t={t}/>
        </div>
    )
}

export default Home;