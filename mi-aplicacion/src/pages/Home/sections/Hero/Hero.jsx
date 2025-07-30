import { useEffect } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './Hero.css'

function Hero({ t }) {
    // const { setHideTitle } = useHeader();
    
    // useEffect(() => {
    //     setHideTitle(true);
    //     return () => setHideTitle(false);
    // }, [setHideTitle]);

    return (
        <section className='hero-section'>
            <h1>
                <span className="fundacionHero">FUNDACION </span>
                <span className="azarHero">AZAR</span>
            </h1>
            <h2>Una apuesta distinta para<br />el impulso de las artes</h2>
        </section>
    )
}

export default Hero;
