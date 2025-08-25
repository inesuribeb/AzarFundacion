import { useEffect } from 'react';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero2 from './sections/Hero/Hero2';
import Intro from './sections/Intro/Intro';
import OpenCall from './sections/OpenCall/OpenCall';
import './Home.css'

function Home() {
    const { setHideTitle } = useHeader();
    const { t , getRoute } = useLanguage();
    
    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('.hero-section');
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
    }, [setHideTitle]);

    return (
        <div className='home-content'>
            <Hero2 t={t}/>
            <Intro t={t} getRoute={getRoute}/>
            <OpenCall t={t}/>
        </div>
    )
}

export default Home;