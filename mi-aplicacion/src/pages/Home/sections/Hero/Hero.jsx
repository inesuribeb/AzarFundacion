import { useEffect } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './Hero.css'

function Hero({ t }) {
    return (
        <section className='hero-section'>
            <h1>
                <span className="fundacionHero">FUNDACION </span>
                <span className="azarHero">AZAR</span>
            </h1>
            <h2 dangerouslySetInnerHTML={{ __html: t('heroSubtitle') }} />
        </section>
    )
}

export default Hero;
