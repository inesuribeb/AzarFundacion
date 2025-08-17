// import { useState } from 'react';
// import './PublicationCard.css';

// function PublicationCard({ 
//     images = [],
//     title,
//     number,
//     price,
//     onClick,
//     className = ''
// }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const goToPrevImage = (e) => {
//         e.stopPropagation();
//         setCurrentImageIndex(prev => 
//             prev === 0 ? images.length - 1 : prev - 1
//         );
//     };

//     const goToNextImage = (e) => {
//         e.stopPropagation(); 
//         setCurrentImageIndex(prev => 
//             prev === images.length - 1 ? 0 : prev + 1
//         );
//     };

//     return (
//         <div 
//             className={`publication-card ${className}`}
//             onClick={onClick}
//         >
//             {/* Carousel superior */}
//             <div className="publication-carousel">
//                 {images.length > 0 && (
//                     <>
//                         <img 
//                             src={images[currentImageIndex]} 
//                             alt={title}
//                             className="publication-image"
//                         />
                        
//                         {/* Flechas de navegación - solo si hay más de 1 imagen */}
//                         {images.length > 1 && (
//                             <>
//                                 <button 
//                                     className="carousel-arrow carousel-arrow-left"
//                                     onClick={goToPrevImage}
//                                     aria-label="Imagen anterior"
//                                 >
//                                     <img 
//                                         src="/Icons/arrow.png" 
//                                         alt="Anterior" 
//                                         className="arrow-icon"
//                                     />
//                                 </button>
//                                 <button 
//                                     className="carousel-arrow carousel-arrow-right"
//                                     onClick={goToNextImage}
//                                     aria-label="Imagen siguiente"
//                                 >
//                                     <img 
//                                         src="/Icons/arrow.png" 
//                                         alt="Siguiente" 
//                                         className="arrow-icon arrow-icon-right"
//                                     />
//                                 </button>
//                             </>
//                         )}
//                     </>
//                 )}
//             </div>

//             {/* Barra inferior con información */}
//             <div className="publication-info-bar">
//                 <div className="publication-number">
//                     {number}
//                 </div>
                
//                 <div className="publication-title">
//                     {title}
//                 </div>
                
//                 <div className="publication-price">
//                     {price}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PublicationCard;

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './PublicationCard.css';

function PublicationCard({ 
    images = [],
    title,
    number,
    price,
    onClick,
    className = ''
}) {
    return (
        <div 
            className={`publication-card ${className}`}
            onClick={onClick}
        >
            {/* Carousel usando el componente genérico */}
            <ImageCarousel 
                images={images}
                title={title}
                showCounter={false}
                showDots={false}
                showArrows={true}
                clickNavigation={false}
                className="publication-card-carousel"
            />

            {/* Barra inferior con información */}
            <div className="publication-info-bar">
                <div className="publication-number">
                    {number}
                </div>
                
                <div 
                    className="publication-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                
                <div className="publication-price">
                    {price}
                </div>
            </div>
        </div>
    );
}

export default PublicationCard;