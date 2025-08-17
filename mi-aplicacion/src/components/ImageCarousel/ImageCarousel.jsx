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

    const handleMouseMove = (e) => {
        if (clickNavigation) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseLeave = () => {
        if (clickNavigation) {
            setMousePosition({ x: 0, y: 0 });
        }
    };

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

    const handleCarouselClick = (e) => {
        if (!clickNavigation) return;
        
        const rect = carouselRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const carouselWidth = rect.width;
        
        // Si el click es en la mitad derecha, ir adelante; si es en la izquierda, ir atrás
        if (clickX > carouselWidth / 2) {
            goToNext();
        } else {
            goToPrevious();
        }
    };

    const handleArrowClick = (e, direction) => {
        e.stopPropagation(); // Evitar que se active el onClick del carousel
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
            {/* Contador fijo arriba a la derecha - solo si no hay clickNavigation */}
            {showCounter && !clickNavigation && (
                <div className="image-carousel-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Contenedor principal */}
            <div 
                className={`image-carousel-container ${clickNavigation ? 'click-nav' : ''}`}
                ref={carouselRef}
                onClick={onImageClick || handleCarouselClick}
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

                {/* Flechas de navegación */}
                {showArrows && images.length > 1 && (
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

                {/* Overlay para navegación por click */}
                {clickNavigation && (
                    <>
                        <div 
                            className="image-carousel-nav-overlay"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="nav-area nav-prev"></div>
                            <div className="nav-area nav-next"></div>
                        </div>
                        
                        {/* Contador que sigue al ratón - FUERA del overlay */}
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

    
        </div>
    );
}

export default ImageCarousel;