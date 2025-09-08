import { useState, useEffect } from 'react';
import './ExpoGallery.css';

function ExpoGallery({ exhibition }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!exhibition?.gallery || exhibition.gallery.length === 0) {
        return null;
    }

    // Auto-advance images every 4 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => 
    //             (prevIndex + 1) % exhibition.gallery.length
    //         );
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, [exhibition.gallery.length]);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % exhibition.gallery.length
        );
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? exhibition.gallery.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className='expo-gallery'>
            <div className='expo-images-container'>
                <div 
                    className='expo-images-track'
                    style={{ 
                        transform: `translateX(-${currentImageIndex * 100}%)` 
                    }}
                >
                    {exhibition.gallery.map((image, index) => (
                        <div 
                            key={index} 
                            className='expo-image-slide'
                        >
                            <img 
                                src={image} 
                                alt={`Gallery image ${index + 1}`}
                                className='expo-gallery-image'
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button 
                    className='expo-nav-arrow expo-prev-arrow'
                    onClick={goToPrevImage}
                    aria-label="Previous image"
                >
                    &#8249;
                </button>
                
                <button 
                    className='expo-nav-arrow expo-next-arrow'
                    onClick={goToNextImage}
                    aria-label="Next image"
                >
                    &#8250;
                </button>
            </div>

            {/* Dots indicator */}
            <div className='expo-dots-container'>
                {exhibition.gallery.map((_, index) => (
                    <button
                        key={index}
                        className={`expo-dot ${index === currentImageIndex ? 'expo-active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default ExpoGallery;