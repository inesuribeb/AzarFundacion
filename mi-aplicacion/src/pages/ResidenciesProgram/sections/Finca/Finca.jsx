import { useState } from 'react';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Finca.css'

function Finca({ t }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const fincaImages = [
        {
            id: '01',
            image: '/Images/Finca/finca01.jpg',
        },
        {
            id: '02',
            image: '/Images/Finca/finca02.jpg',
        },
        {
            id: '03',
            image: '/Images/Finca/finca03.jpg',
        },
        {
            id: '04',
            image: '/Images/Finca/finca04.jpg',
        },
        {
            id: '05',
            image: '/Images/Finca/finca05.jpg',
        },
        {
            id: '06',
            image: '/Images/Finca/finca06.jpg',
        },
        {
            id: '07',
            image: '/Images/Finca/finca07.jpg',
        },
        {
            id: '08',
            image: '/Images/Finca/finca08.jpg',
        },
        {
            id: '09',
            image: '/Images/Finca/finca09.jpg',
        }
    ];

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
                    <Texts size="large" className='finca-text'>{t('fincaText')}</Texts>
                </div>
            </div>

            <div className='other-pictures'>
                {fincaImages.map((image, index) => (
                    <div 
                        key={image.id}
                        className={`thumbnail-container ${index === selectedImageIndex ? 'active' : ''}`}
                        onClick={() => handleImageSelect(index)}
                    >
                        {/* <div className='thumbnail-number'>{image.id}</div> */}
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