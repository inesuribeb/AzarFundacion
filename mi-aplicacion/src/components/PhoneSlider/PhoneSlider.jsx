import { useState, useRef, useEffect } from 'react';
import './PhoneSlider.css';

function PhoneSlider({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef(null);

    const totalImages = images.length;

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setCurrentX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        
        setCurrentX(e.touches[0].clientX);
        const diffX = currentX - startX;
        const newTranslateX = -(currentIndex * 100) + (diffX / window.innerWidth) * 100;
        setTranslateX(newTranslateX);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        const diffX = currentX - startX;
        const threshold = window.innerWidth * 0.2;

        let newIndex = currentIndex;
        
        if (diffX > threshold && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (diffX < -threshold && currentIndex < totalImages - 1) {
            newIndex = currentIndex + 1;
        }

        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
        }
        
        setTranslateX(-(newIndex * 100));
    };

    useEffect(() => {
        if (!isDragging) {
            setTranslateX(-(currentIndex * 100));
        }
    }, [currentIndex, isDragging]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setCurrentX(e.clientX);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const newCurrentX = e.clientX;
        setCurrentX(newCurrentX);
        const diffX = newCurrentX - startX;
        const newTranslateX = -(currentIndex * 100) + (diffX / window.innerWidth) * 100;
        
        const maxTranslate = 0;
        const minTranslate = -((totalImages - 1) * 100);
        const clampedTranslate = Math.max(minTranslate, Math.min(maxTranslate, newTranslateX));
        
        setTranslateX(clampedTranslate);
    };

    const handleMouseUp = (e) => {
        if (!isDragging) return;
        
        setIsDragging(false);
        const diffX = currentX - startX;
        const threshold = window.innerWidth * 0.05;

        let newIndex = currentIndex;
        
        if (diffX > threshold && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (diffX < -threshold && currentIndex < totalImages - 1) {
            newIndex = currentIndex + 1;
        }

        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
        }
        
        setTranslateX(-(newIndex * 100));
    };

    if (!images || images.length === 0) {
        return <div className='phone-slider'>No images provided</div>;
    }

    return (
        <div className='phone-slider'>
            <div 
                ref={sliderRef}
                className='slider-container'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div 
                    className='slider-track'
                    style={{
                        transform: `translateX(${translateX}%)`,
                        transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                    }}
                >
                    {images.map((imageData, index) => (
                        <div key={imageData.id || index} className='slider-slide'>
                            <img 
                                src={imageData.image} 
                                alt={`Slide ${imageData.id || index + 1}`}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='slider-counter'>
                <span className='current-slide'>{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className='separator'> / </span>
                <span className='total-slides'>{String(totalImages).padStart(2, '0')}</span>
            </div>
        </div>
    );
}

export default PhoneSlider;