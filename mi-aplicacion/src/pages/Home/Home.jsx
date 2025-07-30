import { useEffect } from 'react';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero from './sections/Hero/Hero';
import Intro from './sections/Intro/Intro';
import OpenCall from './sections/OpenCall/OpenCall';
import './Home.css'

// function Home() {
//     return (
//         <div className='home-content'>
//             <Hero />
//             <Intro />
//             <OpenCall />
//         </div>
//     )
// }

// export default Home;

function Home() {
    const { setHideTitle } = useHeader();
    const { t } = useLanguage();
    
    useEffect(() => {
        // Detectar cuándo estamos en la sección Hero
        const handleScroll = () => {
            const heroSection = document.querySelector('.hero-section');
            if (!heroSection) return;
            
            const heroRect = heroSection.getBoundingClientRect();
            const isInHero = heroRect.top <= 0 && heroRect.bottom > 0;
            
            setHideTitle(isInHero);
        };
        
        // Inicialmente estamos en Hero
        setHideTitle(true);
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            setHideTitle(false); // Resetear al salir de Home
        };
    }, [setHideTitle]);

    return (
        <div className='home-content'>
            <Hero t={t}/>
            <Intro t={t}/>
            <OpenCall t={t}/>
        </div>
    )
}

export default Home;