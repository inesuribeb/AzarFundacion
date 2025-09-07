// import { useEffect, useRef } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext';
// import './HeroPhone.css';

// function HeroPhone({ lightHeader = {} }) {
//     const sectionRef = useRef(null);
//     const { setUseLightLogo, setUseLightHamburger } = useHeader();
//     const { logo = false, hamburger = false } = lightHeader;

//     useEffect(() => {
//         if (!logo && !hamburger) return;

//         const handleScroll = () => {
//             if (!sectionRef.current) return;

//             const section = sectionRef.current;
//             const rect = section.getBoundingClientRect();
//             const isInSection = rect.top <= 0 && rect.bottom > 0;

//             if (logo) setUseLightLogo(isInSection);
//             if (hamburger) setUseLightHamburger(isInSection);
//         };

//         if (logo) setUseLightLogo(true);
//         if (hamburger) setUseLightHamburger(true);

//         window.addEventListener('scroll', handleScroll, { passive: true });
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             if (logo) setUseLightLogo(false);
//             if (hamburger) setUseLightHamburger(false);
//         };
//     }, [logo, hamburger, setUseLightLogo, setUseLightHamburger]);

//     return (
//         <section ref={sectionRef} className='section-hero-phone'>
//         </section>
//     );
// }

// export default HeroPhone;


import { useEffect, useRef, useState } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './HeroPhone.css';

function HeroPhone({ lightHeader = {} }) {
    const sectionRef = useRef(null);
    const { setUseLightLogo, setUseLightHamburger } = useHeader();
    const { logo = false, hamburger = false } = lightHeader;
    
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const heroPhoneBg = [
        {
            id: 1,
            bgPhoto: '/Images/Home/HomePage.jpg',
            className: 'first-herophone-bg',
        },
        {
            id: 4,
            bgPhoto: '/Images/Header/Nuevas/Nav-actividades.jpg',
            className: 'fourth-herophone-bg',
        },
        // {
        //     id: 2,
        //     bgPhoto: '/Images/Header/Nuevas/Nav-fundacion.jpg',
        //     className: 'second-herophone-bg',
        // },
        {
            id: 3,
            bgPhoto: '/Images/Header/Nuevas/Nav-residencias.jpg',
            className: 'third-herophone-bg',
        },
        // {
        //     id: 4,
        //     bgPhoto: '/Images/Header/Nuevas/Nav-actividades.jpg',
        //     className: 'fourth-herophone-bg',
        // },
        {
            id: 5,
            bgPhoto: '/Images/Header/Nuevas/Nav-tienda.jpg',
            className: 'fifth-herophone-bg',
        },
        {
            id: 2,
            bgPhoto: '/Images/Header/Nuevas/Nav-fundacion.jpg',
            className: 'second-herophone-bg',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => 
                (prevIndex + 1) % heroPhoneBg.length
            );
        }, 2300); 

        return () => clearInterval(interval);
    }, [heroPhoneBg.length]);

    useEffect(() => {
        if (!logo && !hamburger) return;

        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const isInSection = rect.top <= 0 && rect.bottom > 0;

            if (logo) setUseLightLogo(isInSection);
            if (hamburger) setUseLightHamburger(isInSection);
        };

        if (logo) setUseLightLogo(true);
        if (hamburger) setUseLightHamburger(true);

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (logo) setUseLightLogo(false);
            if (hamburger) setUseLightHamburger(false);
        };
    }, [logo, hamburger, setUseLightLogo, setUseLightHamburger]);

    return (
        <section ref={sectionRef} className='section-hero-phone'>
            {heroPhoneBg.map((bg, index) => (
                <div
                    key={bg.id}
                    className={`hero-bg-layer ${bg.className} ${
                        index === currentBgIndex ? 'active' : ''
                    }`}
                    style={{
                        backgroundImage: `url(${bg.bgPhoto})`
                    }}
                />
            ))}
        </section>
    );
}

export default HeroPhone;