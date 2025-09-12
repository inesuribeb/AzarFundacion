// import { useState, useEffect } from 'react';
// import './ExpoGallery.css';

// function ExpoGallery({ exhibition }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [touchStart, setTouchStart] = useState(0);
//     const [touchEnd, setTouchEnd] = useState(0);

//     const handleTouchStart = (e) => {
//         setTouchEnd(0);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const handleTouchMove = (e) => {
//         setTouchEnd(e.targetTouches[0].clientX);
//     };

//     const handleTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;

//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > 50;
//         const isRightSwipe = distance < -50;

//         if (isLeftSwipe) {
//             setCurrentImageIndex((prevIndex) =>
//                 (prevIndex + 1) % exhibition.gallery.length
//             );
//         } else if (isRightSwipe) {
//             setCurrentImageIndex((prevIndex) =>
//                 prevIndex === 0 ? exhibition.gallery.length - 1 : prevIndex - 1
//             );
//         }
//     };

//     if (!exhibition?.gallery || exhibition.gallery.length === 0) {
//         return null;
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) =>
//                 (prevIndex + 1) % exhibition.gallery.length
//             );
//         }, 2500);

//         return () => clearInterval(interval);
//     }, [exhibition.gallery.length]);

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
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
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

import { useState, useEffect, useRef } from 'react';
import './ExpoGallery.css';

function ExpoGallery({ exhibition }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [enableTransition, setEnableTransition] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const trackRef = useRef(null);

    const handleTouchStart = (e) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }
    };

    if (!exhibition?.gallery || exhibition.gallery.length === 0) {
        return null;
    }

    const goToNext = () => {
        const nextIndex = (currentImageIndex + 1) % exhibition.gallery.length;
        
        // Si vamos de la última a la primera, desactivar transición
        if (currentImageIndex === exhibition.gallery.length - 1 && nextIndex === 0) {
            // Desactivar transición directamente en el DOM
            if (trackRef.current) {
                trackRef.current.style.transition = 'none';
                trackRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
                
                // Forzar reflow y reactivar transición
                trackRef.current.offsetHeight;
                trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
            setCurrentImageIndex(nextIndex);
        } else {
            setCurrentImageIndex(nextIndex);
        }
    };

    const goToPrev = () => {
        const prevIndex = currentImageIndex === 0 ? exhibition.gallery.length - 1 : currentImageIndex - 1;
        
        // Si vamos de la primera a la última, desactivar transición
        if (currentImageIndex === 0 && prevIndex === exhibition.gallery.length - 1) {
            // Desactivar transición directamente en el DOM
            if (trackRef.current) {
                trackRef.current.style.transition = 'none';
                trackRef.current.style.transform = `translateX(-${prevIndex * 100}%)`;
                
                // Forzar reflow y reactivar transición
                trackRef.current.offsetHeight;
                trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
            setCurrentImageIndex(prevIndex);
        } else {
            setCurrentImageIndex(prevIndex);
        }
    };

    // Auto-advance images every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 2500);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleMouseMove = (e) => {
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
            goToNext();
        } else {
            goToPrev();
        }
    };

    return (
        <section className='expo-gallery'>
            <div
                className='expo-images-container'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={trackRef}
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
                    <div className="expo-nav-area expo-next-next"></div>
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