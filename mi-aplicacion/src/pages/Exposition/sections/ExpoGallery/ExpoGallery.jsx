// import { useState } from 'react';
// import './ExpoGallery.css';

// function ExpoGallery({ exhibition }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     if (!exhibition?.gallery || exhibition.gallery.length === 0) {
//         return null;
//     }

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseLeave = () => {
//         setMousePosition({ x: 0, y: 0 });
//     };

//     const handleClick = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const clickX = e.clientX - rect.left;
//         const containerWidth = rect.width;
        
//         if (clickX > containerWidth / 2) {
//             setCurrentImageIndex((prevIndex) => 
//                 (prevIndex + 1) % exhibition.gallery.length
//             );
//         } else {
//             setCurrentImageIndex((prevIndex) => 
//                 prevIndex === 0 ? exhibition.gallery.length - 1 : prevIndex - 1
//             );
//         }
//     };

//     return (
//         <section className='expo-gallery'>
//             <div 
//                 className='expo-images-container'
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={handleClick}
//             >
//                 <div 
//                     className='expo-images-track'
//                     style={{ 
//                         transform: `translateX(-${currentImageIndex * 100}%)` 
//                     }}
//                 >
//                     {exhibition.gallery.map((image, index) => (
//                         <div 
//                             key={index} 
//                             className='expo-image-slide'
//                         >
//                             <img 
//                                 src={image} 
//                                 alt={`Gallery image ${index + 1}`}
//                                 className='expo-gallery-image'
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="expo-nav-overlay">
//                     <div className="expo-nav-area expo-nav-prev"></div>
//                     <div className="expo-nav-area expo-nav-next"></div>
//                 </div>
                
//                 <span 
//                     className="expo-nav-counter"
//                     style={{
//                         left: mousePosition.x,
//                         top: mousePosition.y,
//                         display: mousePosition.x > 0 ? 'block' : 'none'
//                     }}
//                 >
//                     {currentImageIndex + 1} / {exhibition.gallery.length}
//                 </span>
//             </div>
//         </section>
//     );
// }

// export default ExpoGallery;

import { useState, useEffect } from 'react';
import './ExpoGallery.css';

function ExpoGallery({ exhibition }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    if (!exhibition?.gallery || exhibition.gallery.length === 0) {
        return null;
    }

    // Auto-advance images every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % exhibition.gallery.length
            );
        }, 2500);

        return () => clearInterval(interval);
    }, [exhibition.gallery.length]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const containerWidth = rect.width;
        
        if (clickX > containerWidth / 2) {
            // Click derecho - siguiente imagen
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % exhibition.gallery.length
            );
        } else {
            // Click izquierdo - imagen anterior
            setCurrentImageIndex((prevIndex) => 
                prevIndex === 0 ? exhibition.gallery.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <section className='expo-gallery'>
            <div 
                className='expo-images-container'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
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

                {/* Overlay para navegación por click */}
                <div className="expo-nav-overlay">
                    <div className="expo-nav-area expo-nav-prev"></div>
                    <div className="expo-nav-area expo-nav-next"></div>
                </div>
                
                {/* Contador que sigue al mouse */}
                <span 
                    className="expo-nav-counter"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        display: mousePosition.x > 0 ? 'block' : 'none'
                    }}
                >
                    {currentImageIndex + 1} / {exhibition.gallery.length}
                </span>
            </div>
        </section>
    );
}

export default ExpoGallery;