// import { useState, useRef } from 'react';
// import './ImageCarousel.css';

// function ImageCarousel({ 
//     images = [],
//     title = '',
//     showCounter = false,
//     showDots = false, 
//     showArrows = true,
//     clickNavigation = false,
//     className = '',
//     onImageClick = null
// }) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef(null);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         if (clickNavigation) {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         }
//     };

//     const handleMouseLeave = () => {
//         if (clickNavigation) {
//             setMousePosition({ x: 0, y: 0 });
//         }
//     };

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) => 
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const goToPrevious = () => {
//         setCurrentIndex((prevIndex) => 
//             prevIndex === 0 ? images.length - 1 : prevIndex - 1
//         );
//     };

//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     const handleCarouselClick = (e) => {
//         if (!clickNavigation) return;
        
//         const rect = carouselRef.current.getBoundingClientRect();
//         const clickX = e.clientX - rect.left;
//         const carouselWidth = rect.width;
        
//         if (clickX > carouselWidth / 2) {
//             goToNext();
//         } else {
//             goToPrevious();
//         }
//     };

//     const handleArrowClick = (e, direction) => {
//         e.stopPropagation(); 
//         if (direction === 'next') {
//             goToNext();
//         } else {
//             goToPrevious();
//         }
//     };

//     if (!images || images.length === 0) {
//         return (
//             <div className={`image-carousel-placeholder ${className}`}>
//                 No hay imágenes disponibles
//             </div>
//         );
//     }

//     return (
//         <div className={`image-carousel ${className}`}>
//             {showCounter && !clickNavigation && (
//                 <div className="image-carousel-counter">
//                     {currentIndex + 1} / {images.length}
//                 </div>
//             )}

//             <div 
//                 className={`image-carousel-container ${clickNavigation ? 'click-nav' : ''}`}
//                 ref={carouselRef}
//                 onClick={onImageClick || handleCarouselClick}
//             >
//                 <div 
//                     className="image-carousel-slides"
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                     {images.map((image, index) => (
//                         <div key={index} className="image-carousel-slide">
//                             <img 
//                                 src={image} 
//                                 alt={title ? `${title} - imagen ${index + 1}` : `Imagen ${index + 1}`}
//                                 className="image-carousel-image"
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {showArrows && images.length > 1 && (
//                     <>
//                         <button 
//                             className="image-carousel-arrow image-carousel-arrow-left"
//                             onClick={(e) => handleArrowClick(e, 'prev')}
//                             aria-label="Imagen anterior"
//                         >
//                             <img 
//                                 src="/Icons/arrow.png" 
//                                 alt="Anterior" 
//                                 className="arrow-icon"
//                             />
//                         </button>
//                         <button 
//                             className="image-carousel-arrow image-carousel-arrow-right"
//                             onClick={(e) => handleArrowClick(e, 'next')}
//                             aria-label="Imagen siguiente"
//                         >
//                             <img 
//                                 src="/Icons/arrow.png" 
//                                 alt="Siguiente" 
//                                 className="arrow-icon arrow-icon-right"
//                             />
//                         </button>
//                     </>
//                 )}

//                 {clickNavigation && (
//                     <>
//                         <div 
//                             className="image-carousel-nav-overlay"
//                             onMouseMove={handleMouseMove}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div className="nav-area nav-prev"></div>
//                             <div className="nav-area nav-next"></div>
//                         </div>
                        
//                         <span 
//                             className="nav-counter"
//                             style={{
//                                 left: mousePosition.x,
//                                 top: mousePosition.y,
//                                 display: mousePosition.x > 0 ? 'block' : 'none'
//                             }}
//                         >
//                             {currentIndex + 1} / {images.length}
//                         </span>
//                     </>
//                 )}
//             </div>

    
//         </div>
//     );
// }

// export default ImageCarousel;


import { useState, useRef } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ 
    images = [],
    title = '',
    showCounter = false,
    showDots = false, 
    showArrows = true,
    clickNavigation = false,
    className = '',
    onImageClick = null
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Detectar si es móvil
    useState(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e) => {
        if (clickNavigation && !isMobile) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseLeave = () => {
        if (clickNavigation && !isMobile) {
            setMousePosition({ x: 0, y: 0 });
        }
    };

    // Funciones de navegación
    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Funciones touch para móvil
    const handleTouchStart = (e) => {
        if (isMobile) {
            setTouchEnd(0); // Reset touch end
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

    const handleCarouselClick = (e) => {
        if (!clickNavigation || isMobile) return;
        
        const rect = carouselRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const carouselWidth = rect.width;
        
        if (clickX > carouselWidth / 2) {
            goToNext();
        } else {
            goToPrevious();
        }
    };

    const handleArrowClick = (e, direction) => {
        e.stopPropagation(); 
        if (direction === 'next') {
            goToNext();
        } else {
            goToPrevious();
        }
    };

    if (!images || images.length === 0) {
        return (
            <div className={`image-carousel-placeholder ${className}`}>
                No hay imágenes disponibles
            </div>
        );
    }

    return (
        <div className={`image-carousel ${className}`}>
            {showCounter && !clickNavigation && !isMobile && (
                <div className="image-carousel-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            <div 
                className={`image-carousel-container ${clickNavigation && !isMobile ? 'click-nav' : ''}`}
                ref={carouselRef}
                onClick={onImageClick || (!isMobile ? handleCarouselClick : null)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="image-carousel-slides"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="image-carousel-slide">
                            <img 
                                src={image} 
                                alt={title ? `${title} - imagen ${index + 1}` : `Imagen ${index + 1}`}
                                className="image-carousel-image"
                            />
                        </div>
                    ))}
                </div>

                {/* Flechas solo en desktop */}
                {showArrows && images.length > 1 && !isMobile && (
                    <>
                        <button 
                            className="image-carousel-arrow image-carousel-arrow-left"
                            onClick={(e) => handleArrowClick(e, 'prev')}
                            aria-label="Imagen anterior"
                        >
                            <img 
                                src="/Icons/arrow.png" 
                                alt="Anterior" 
                                className="arrow-icon"
                            />
                        </button>
                        <button 
                            className="image-carousel-arrow image-carousel-arrow-right"
                            onClick={(e) => handleArrowClick(e, 'next')}
                            aria-label="Imagen siguiente"
                        >
                            <img 
                                src="/Icons/arrow.png" 
                                alt="Siguiente" 
                                className="arrow-icon arrow-icon-right"
                            />
                        </button>
                    </>
                )}

                {/* Navegación por click solo en desktop */}
                {clickNavigation && !isMobile && (
                    <>
                        <div 
                            className="image-carousel-nav-overlay"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="nav-area nav-prev"></div>
                            <div className="nav-area nav-next"></div>
                        </div>
                        
                        <span 
                            className="nav-counter"
                            style={{
                                left: mousePosition.x,
                                top: mousePosition.y,
                                display: mousePosition.x > 0 ? 'block' : 'none'
                            }}
                        >
                            {currentIndex + 1} / {images.length}
                        </span>
                    </>
                )}
            </div>

            {/* Contador móvil estilo slider */}
            {isMobile && images.length > 1 && (
                <div className='mobile-carousel-indicator'>
                    <span className='current-image'>{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span className='indicator-separator'> / </span>
                    <span className='total-images'>{String(images.length).padStart(2, '0')}</span>
                </div>
            )}
        </div>
    );
}

export default ImageCarousel;