import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import './Participants.css';

function Participants({ residencia, isActive }) {
    const { language, t } = useLanguage();
    const [activeResident, setActiveResident] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollAreaRef = useRef(null);

    if (!residencia?.residents) {
        return <div>No hay residentes disponibles</div>;
    }

    const residents = residencia.residents;

    const handleScroll = (e) => {
        if (!isActive) {
            console.log('🚫 Tragaperras inactivo - permitiendo scroll de página');
            // NO hacer nada, permitir que el scroll pase al padre
            return;
        }

        const scrollTop = e.target.scrollTop;
        const scrollHeight = e.target.scrollHeight - e.target.clientHeight;
        const progress = scrollTop / scrollHeight;

        const totalResidents = residents.length;
        const activeIndex = Math.min(
            Math.floor(progress * totalResidents),
            totalResidents - 1
        );

        setScrollProgress(progress);
        setActiveResident(activeIndex);

        console.log('🎰 Tragaperras activo - Residente:', activeIndex + 1);
    };

    const getNumberPosition = (index) => {
        const totalResidents = residents.length;
        const currentProgress = scrollProgress;

        const basePosition = index * 100;
        const scrollOffset = currentProgress * (totalResidents - 1) * 100;

        return basePosition - scrollOffset;
    };

    return (
        <section className={`section-participants ${isActive ? 'active' : 'inactive'}`}>
            <div className='numbers-column'>
                {residents.map((resident, index) => (
                    <div
                        key={resident.id}
                        className={`number-item ${index === activeResident ? 'active' : ''}`}
                        style={{
                            transform: `translateY(${getNumberPosition(index)}vh)`,
                        }}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <div className='image-column'>
                <div className='image-container'>
                    <img
                        src={residents[activeResident]?.image}
                        alt={residents[activeResident]?.name}
                    />
                </div>
            </div>

            {/* <div className='info-column'>
                <div className='resident-info'>
                    <h2 className='resident-name'>
                        {residents[activeResident]?.name}
                    </h2>
                    <p className='resident-origin'>
                        {residents[activeResident]?.origin[language] || residents[activeResident]?.origin.es}
                    </p>
                    <h3 className='art-piece-title'>
                        {residents[activeResident]?.artPieceName[language] || residents[activeResident]?.artPieceName.es}
                    </h3>
                    <p className='art-piece-type'>
                        {residents[activeResident]?.artPieceType[language] || residents[activeResident]?.artPiecetype.es}
                    </p>
                    <div
                        className='art-piece-description'
                        dangerouslySetInnerHTML={{
                            __html: residents[activeResident]?.artPieceDescription[language] || residents[activeResident]?.artPieceDescription.es
                        }}
                    />
                </div>
            </div> */}
            <div className='info-column'>
                <div className='resident-info'>
                    <div
                        className='resident-name'
                        dangerouslySetInnerHTML={{
                            __html: `<h2>${residents[activeResident]?.name}</h2>`
                        }}
                    />
                    <div
                        className='resident-origin'
                        dangerouslySetInnerHTML={{
                            __html: `<p>${residents[activeResident]?.origin[language] || residents[activeResident]?.origin.es}</p>`
                        }}
                    />
                    <div
                        className='art-piece-title'
                        dangerouslySetInnerHTML={{
                            __html: `<h3>${residents[activeResident]?.artPieceName[language] || residents[activeResident]?.artPieceName.es}</h3>`
                        }}
                    />
                    <div
                        className='art-piece-type'
                        dangerouslySetInnerHTML={{
                            __html: `<p>${residents[activeResident]?.artPieceType[language] || residents[activeResident]?.artPiecetype.es}</p>`
                        }}
                    />
                    <div
                        className='art-piece-description'
                        dangerouslySetInnerHTML={{
                            __html: residents[activeResident]?.artPieceDescription[language] || residents[activeResident]?.artPieceDescription.es
                        }}
                    />
                </div>
            </div>

            <div
                className={`scroll-area ${isActive ? 'active' : 'inactive'}`}  // ← AÑADIR ESTO
                ref={scrollAreaRef}
                onScroll={handleScroll}
            >
                {residents.map((_, index) => (
                    <div key={index} className='scroll-section'></div>
                ))}
            </div>
        </section>
    );
}

export default Participants;