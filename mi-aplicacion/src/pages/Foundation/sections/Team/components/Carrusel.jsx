import { useState, useRef } from 'react';
import './Carrusel.css';

function Carrusel({ items, onItemClick, selectedItem, className = '' }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carruselRef = useRef(null);

    const length = items.length;
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return length - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleItemClick = (item, index) => {
        if (onItemClick) {
            onItemClick(item, index);
        }
    };

    return (
        <div className={`carrusel-container ${className}`}>
            <div
                className="carrusel-track"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                ref={carruselRef}
                style={{
                    transform: `translateX(-${currentIndex * 80}%)`,
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="carrusel-slide">
                        <div 
                            className="carrusel-item"
                            onClick={() => handleItemClick(item, index)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="carrusel-image"
                            />
                            <div className="carrusel-caption">
                                <h3 className="carrusel-name">{item.name}</h3>
                                <p className="carrusel-role">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrusel;