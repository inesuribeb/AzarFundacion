// import { useState } from 'react';
// import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
// import Texts from '../../../../components/Texts/Texts';
// import './Finca.css'

// function Finca({ t }) {
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//     const fincaImages = [
//         {
//             id: '01',
//             image: '/Images/Finca/Nuevas/fincaNew-1.jpg',
//         },
//         {
//             id: '02',
//             image: '/Images/Finca/Nuevas/fincaNew-2.jpg',
//         },
//         {
//             id: '03',
//             image: '/Images/Finca/Nuevas/fincaNew-3.jpg',
//         },
//         {
//             id: '04',
//             image: '/Images/Finca/Nuevas/fincaNew-4.jpg',
//         },
//         {
//             id: '05',
//             image: '/Images/Finca/Nuevas/fincaNew-5.jpg',
//         },
//         {
//             id: '06',
//             image: '/Images/Finca/Nuevas/fincaNew-6.jpg',
//         },
//     ];

//     const handleImageSelect = (index) => {
//         setSelectedImageIndex(index);
//     };

//     return (
//         <section className='finca-section'>
//             <div className='first-line-finca'>
//                 <div className='column-left-finca'>
//                     <div className='main-image-container'>
//                         <img 
//                             src={fincaImages[selectedImageIndex].image} 
//                             alt={`Finca imagen ${fincaImages[selectedImageIndex].id}`}
//                             className='main-finca-image'
//                         />
//                     </div>
//                 </div>
//                 <div className='column-right-finca'>
//                     <MediumSans className='finca-section-title'>{t('finca')}</MediumSans>
//                     <Texts  className='finca-text'>{t('fincaText')}</Texts>
//                 </div>
//             </div>

//             <div className='other-pictures'>
//                 {fincaImages.map((image, index) => (
//                     <div 
//                         key={image.id}
//                         className={`thumbnail-container ${index === selectedImageIndex ? 'active' : ''}`}
//                         onClick={() => handleImageSelect(index)}
//                     >
//                         <img 
//                             src={image.image} 
//                             alt={`Thumbnail ${image.id}`}
//                             className='thumbnail-image'
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Finca;

import { useState, useEffect } from 'react';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Finca.css'

function Finca({ t }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const fincaImages = [
        {
            id: '01',
            image: '/Images/Finca/Nuevas/fincaNew-1.jpg',
        },
        {
            id: '02',
            image: '/Images/Finca/Nuevas/fincaNew-2.jpg',
        },
        {
            id: '03',
            image: '/Images/Finca/Nuevas/fincaNew-3.jpg',
        },
        {
            id: '04',
            image: '/Images/Finca/Nuevas/fincaNew-4.jpg',
        },
        {
            id: '05',
            image: '/Images/Finca/Nuevas/fincaNew-5.jpg',
        },
        {
            id: '06',
            image: '/Images/Finca/Nuevas/fincaNew-6.jpg',
        },
    ];

    // Auto-advance images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImageIndex((prevIndex) => 
                (prevIndex + 1) % fincaImages.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [fincaImages.length]);

    const handleImageSelect = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <section className='finca-section'>
            <div className='first-line-finca'>
                <div className='column-left-finca'>
                    <div className='main-image-container'>
                        <img 
                            src={fincaImages[selectedImageIndex].image} 
                            alt={`Finca imagen ${fincaImages[selectedImageIndex].id}`}
                            className='main-finca-image'
                        />
                    </div>
                </div>
                <div className='column-right-finca'>
                    <MediumSans className='finca-section-title'>{t('finca')}</MediumSans>
                    <Texts  className='finca-text'>{t('fincaText')}</Texts>
                </div>
            </div>

            <div className='other-pictures'>
                {fincaImages.map((image, index) => (
                    <div 
                        key={image.id}
                        className={`thumbnail-container ${index === selectedImageIndex ? 'active' : ''}`}
                        onClick={() => handleImageSelect(index)}
                    >
                        <img 
                            src={image.image} 
                            alt={`Thumbnail ${image.id}`}
                            className='thumbnail-image'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Finca;