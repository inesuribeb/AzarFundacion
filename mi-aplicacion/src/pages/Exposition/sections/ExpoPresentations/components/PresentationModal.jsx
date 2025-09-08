// components/PresentationModal/PresentationModal.js
import { useLanguage } from '../../../../../contexts/LanguageContext';
// import Carrusel from '../../pages/Foundation/sections/Team/components/Carrusel';
import Carrusel from '../../../../Foundation/sections/Team/components/Carrusel'
import Texts from '../../../../../components/Texts/Texts';
import './PresentationModal.css';

function PresentationModal({ isOpen, onClose, presentation }) {
    const { language, t } = useLanguage();

    if (!isOpen || !presentation) return null;

    // Adaptar imágenes para el carrusel
    const getCarruselImages = (images) => {
        return images.map((image, index) => ({
            id: index,
            name: `Imagen ${index + 1}`,
            role: '',
            image: image
        }));
    };

    return (
        <div className="presentation-modal-overlay" onClick={onClose}>
            <div className="presentation-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    {t('backButton')}
                </button>

                <h2 
                    className="modal-title"
                    dangerouslySetInnerHTML={{ 
                        __html: presentation.title[language] || presentation.title.es
                    }}
                />

                <div className="modal-carousel-container">
                    <Carrusel
                        items={getCarruselImages(presentation.images)}
                        className="modal-carousel"
                    />
                </div>

                <div className="modal-text">
                    <Texts
                        size="medium"
                        dangerouslySetInnerHTML={{ 
                            __html: presentation.text[language] || presentation.text.es 
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default PresentationModal;