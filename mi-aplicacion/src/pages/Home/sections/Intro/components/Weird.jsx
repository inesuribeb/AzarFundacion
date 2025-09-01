import { useState, useEffect } from 'react';
import { useLanguage } from '../../../../../contexts/LanguageContext';
import './Weird.css';

function Weird() {
    const { t } = useLanguage();

    const weirdItems = [
        {
            id: 'residencias',
            labelKey: 'residencies',
            bgImage: '/Images/Residencies/Residency01/PortadaResi.jpg',
            lightText: true,
            bgClass: 'bg-residencias'
        },
        {
            id: 'exposiciones',
            labelKey: 'exhibitions',
            bgImage: '/Images/Exhibitions/Exhibition01/HeaderArchivo.png',
            lightText: false,
            bgClass: 'bg-exposiciones'
        },
        {
            id: 'obras-colectivas',
            labelKey: 'collectiveArtPieces',
            bgImage: '/Images/ArtPieces/ArtPiece01/obra01-1.jpg',
            lightText: true,
            bgClass: 'bg-obras-colectivas'
        },
        {
            id: 'publicaciones',
            labelKey: 'publications',
            bgImage: '/Images/Publications/Publication01/MencionPubli2.jpg',
            lightText: true,
            bgClass: 'bg-publicaciones'
        },
        {
            id: 'colaboraciones',
            labelKey: 'collaborations',
            bgImage: '/Images/Collaborations/Collab01/Collab01-3.jpg',
            lightText: false,
            bgClass: 'bg-colaboraciones'
        },
    ];

    const [currentBgImage, setCurrentBgImage] = useState(weirdItems[0].bgImage);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto slideshow
    useEffect(() => {
        let startTime = Date.now();
        let animationFrame;
        
        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const progressPercent = (elapsed / 6000) * 100;
            
            if (progressPercent >= 100) {
                setProgress(100);
                setActiveItemIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % weirdItems.length;
                    setCurrentBgImage(weirdItems[nextIndex].bgImage);
                    return nextIndex;
                });
                startTime = Date.now();
                setProgress(0);
            } else {
                setProgress(progressPercent);
            }
            
            animationFrame = requestAnimationFrame(updateProgress);
        };
        
        animationFrame = requestAnimationFrame(updateProgress);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [activeItemIndex]);

    const handleItemClick = (index) => {
        setActiveItemIndex(index);
        setCurrentBgImage(weirdItems[index].bgImage);
        setProgress(0); // Reset progress when manually clicked
    };

    return (
        <div
            className={`weird-content ${weirdItems[activeItemIndex].bgClass}`}
            style={{
                backgroundImage: `url(${weirdItems[activeItemIndex].bgImage})`
            }}
        >
            <div className="weird-overlay">
                <div className={`weird-navigation ${!weirdItems[activeItemIndex].lightText ? 'dark-theme' : ''}`}>
                    {weirdItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`weird-nav-item ${activeItemIndex === index ? 'active' : ''}`}
                            onClick={() => handleItemClick(index)}
                        >
                            <div 
                                className="circle"
                                style={{
                                    background: activeItemIndex === index 
                                        ? `conic-gradient(${weirdItems[activeItemIndex].lightText ? 'var(--light-color)' : 'var(--dark-color)'} ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                                        : 'transparent'
                                }}
                            ></div>
                            {t(item.labelKey)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Weird;