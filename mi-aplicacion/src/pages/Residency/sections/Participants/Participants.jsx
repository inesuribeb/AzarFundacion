// import { useState, useRef, useEffect } from 'react';
// import { useLanguage } from '../../../../contexts/LanguageContext';
// import './Participants.css';

// function Participants({ residencia, isActive }) {
//     const { language, t } = useLanguage();
//     const [activeResident, setActiveResident] = useState(0);
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const scrollAreaRef = useRef(null);

//     if (!residencia?.residents) {
//         return <div>No hay residentes disponibles</div>;
//     }

//     const residents = residencia.residents;

//     const handleScroll = (e) => {
//         if (!isActive) {
//             console.log('🚫 Tragaperras inactivo - permitiendo scroll de página');
//             return;
//         }

//         const scrollTop = e.target.scrollTop;
//         const scrollHeight = e.target.scrollHeight - e.target.clientHeight;
//         const progress = scrollTop / scrollHeight;

//         const totalResidents = residents.length;
//         const activeIndex = Math.min(
//             Math.floor(progress * totalResidents),
//             totalResidents - 1
//         );

//         setScrollProgress(progress);
//         setActiveResident(activeIndex);

//         console.log('🎰 Tragaperras activo - Residente:', activeIndex + 1);
//     };

//     const getNumberPosition = (index) => {
//         const totalResidents = residents.length;
//         const currentProgress = scrollProgress;

//         const basePosition = index * 100;
//         const scrollOffset = currentProgress * (totalResidents - 1) * 100;

//         return basePosition - scrollOffset;
//     };

//     return (
//         <section className={`section-participants ${isActive ? 'active' : 'inactive'}`}>
//             <div className='numbers-column'>
//                 {residents.map((resident, index) => (
//                     <div
//                         key={resident.id}
//                         className={`number-item ${index === activeResident ? 'active' : ''}`}
//                         style={{
//                             transform: `translateY(${getNumberPosition(index)}vh)`,
//                         }}
//                     >
//                         {index + 1}
//                     </div>
//                 ))}
//             </div>

//             <div className='image-column'>
//                 <div className='image-container'>
//                     <img
//                         src={residents[activeResident]?.image}
//                         alt={residents[activeResident]?.name}
//                     />
//                 </div>
//             </div>

//             <div className='info-column'>
//                 <div className='resident-info'>
//                     <div
//                         className='resident-name'
//                         dangerouslySetInnerHTML={{
//                             __html: `<h2>${residents[activeResident]?.name}</h2>`
//                         }}
//                     />
//                     <div
//                         className='resident-origin'
//                         dangerouslySetInnerHTML={{
//                             __html: `<p>${residents[activeResident]?.origin[language] || residents[activeResident]?.origin.es}</p>`
//                         }}
//                     />
//                     <div
//                         className='art-piece-title'
//                         dangerouslySetInnerHTML={{
//                             __html: `<h3>${residents[activeResident]?.artPieceName[language] || residents[activeResident]?.artPieceName.es}</h3>`
//                         }}
//                     />
//                     <div
//                         className='art-piece-type'
//                         dangerouslySetInnerHTML={{
//                             __html: `<p>${residents[activeResident]?.artPieceType[language] || residents[activeResident]?.artPiecetype.es}</p>`
//                         }}
//                     />
//                     <div
//                         className='art-piece-description'
//                         dangerouslySetInnerHTML={{
//                             __html: residents[activeResident]?.artPieceDescription[language] || residents[activeResident]?.artPieceDescription.es
//                         }}
//                     />
//                 </div>
//             </div>

//             <div
//                 className={`scroll-area ${isActive ? 'active' : 'inactive'}`}  // ← AÑADIR ESTO
//                 ref={scrollAreaRef}
//                 onScroll={handleScroll}
//             >
//                 {residents.map((_, index) => (
//                     <div key={index} className='scroll-section'></div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Participants;


import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import './Participants.css';

function Participants({ residencia, isActive }) {
    const { language, t } = useLanguage();
    const [activeResident, setActiveResident] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const scrollAreaRef = useRef(null);

    if (!residencia?.residents) {
        return <div>No hay residentes disponibles</div>;
    }

    const residents = residencia.residents;

    // Detectar cambios de tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Función para ir al siguiente residente (móvil)
    const goToNext = () => {
        setActiveResident((prev) => 
            prev === residents.length - 1 ? 0 : prev + 1
        );
    };

    // Función para ir al residente anterior (móvil)
    const goToPrevious = () => {
        setActiveResident((prev) => 
            prev === 0 ? residents.length - 1 : prev - 1
        );
    };

    // Funciones touch para móvil
    const handleTouchStart = (e) => {
        if (isMobile) {
            setTouchEnd(0);
            setTouchStart(e.targetTouches[0].clientX);
        }
    };

    const handleTouchMove = (e) => {
        if (isMobile) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (!isMobile || !touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    // Scroll handler para desktop
    const handleScroll = (e) => {
        if (isMobile || !isActive) {
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
    };

    const getNumberPosition = (index) => {
        const totalResidents = residents.length;
        const currentProgress = scrollProgress;

        const basePosition = index * 100;
        const scrollOffset = currentProgress * (totalResidents - 1) * 100;

        return basePosition - scrollOffset;
    };

    return (
        <section className={`section-participants ${isActive ? 'active' : 'inactive'} ${isMobile ? 'mobile' : ''}`}>
            {/* Columna de números - solo desktop */}
            {!isMobile && (
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
            )}

            {/* Contenedor principal móvil */}
            <div 
                className={`participants-content ${isMobile ? 'mobile-swipe' : ''}`}
                onTouchStart={isMobile ? handleTouchStart : undefined}
                onTouchMove={isMobile ? handleTouchMove : undefined}
                onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
                <div className='image-column'>
                    <div className='image-container'>
                        <img
                            src={residents[activeResident]?.image}
                            alt={residents[activeResident]?.name}
                        />
                    </div>
                </div>

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
            </div>

            {/* Contador móvil */}
            {isMobile && (
                <div className='mobile-participants-indicator'>
                    <span className='current-participant'>{String(activeResident + 1).padStart(2, '0')}</span>
                    <span className='participants-separator'> / </span>
                    <span className='total-participants'>{String(residents.length).padStart(2, '0')}</span>
                </div>
            )}

            {/* Área de scroll - solo desktop */}
            {!isMobile && (
                <div
                    className={`scroll-area ${isActive ? 'active' : 'inactive'}`}
                    ref={scrollAreaRef}
                    onScroll={handleScroll}
                >
                    {residents.map((_, index) => (
                        <div key={index} className='scroll-section'></div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Participants;