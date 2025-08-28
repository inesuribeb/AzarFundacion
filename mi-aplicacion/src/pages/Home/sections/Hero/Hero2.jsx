import { useEffect, useRef, useState } from 'react';
import { useMobile } from '../../../../components/Hooks/useMobile';
import { useHeader } from '../../../../contexts/HeaderContext';
import './Hero2.css';

function Hero2({ t, lightHeader = {} }) {
    const sectionRef = useRef(null);
    const backgroundRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');
    const { setUseLightLogo, setUseLightHamburger } = useHeader();

    const { logo = false, hamburger = false } = lightHeader;

    useEffect(() => {
        const calculateHeight = () => {
            if (backgroundRef.current) {
                const viewportHeight = window.innerHeight;
                const totalHeight = viewportHeight * 1.5;
                setSectionHeight(`${totalHeight}px`);
            }
        };

        const timer = setTimeout(calculateHeight, 100);
        window.addEventListener('resize', calculateHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    useEffect(() => {
        if (!logo && !hamburger) return;

        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

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

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !backgroundRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const background = backgroundRef.current;
            const container = containerRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const maxScroll = windowHeight * 0.3;

            if (rect.top <= 0 && rect.bottom > windowHeight) {
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';

                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

                const backgroundOffset = scrollProgress * maxScroll;
                background.style.backgroundPosition = `center ${-backgroundOffset}px`;

            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                container.style.display = 'flex';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';

                background.style.backgroundPosition = `center ${-maxScroll}px`;

            } else if (rect.top > 0) {
                container.style.display = 'flex';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                background.style.backgroundPosition = 'center center';

            } else {
                container.style.display = 'none';
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
        handleScroll();

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [sectionHeight]);

    return (
        <section
            ref={sectionRef}
            className='hero2-section'
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className='hero2-container'>
                <div ref={backgroundRef} className='hero2-background'>
                    <img src="/Images/Logo/Logo blanco.png"
                    alt="logo-fundacion-azar" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero2;