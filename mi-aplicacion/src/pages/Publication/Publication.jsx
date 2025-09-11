import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverPublication from './sections/CoverPublication/CoverPublication';
import Details from './sections/Details/Details';
import PurchaseBar from './PurchaseBar/PurchaseBar';
import './Publication.css';

function Publication() {
    const { id } = useParams();
    const { t, currentLanguage } = useLanguage();
    const localizedPublications = useLocalizedData(mockPublicationsData);

    const publication = localizedPublications.find(pub => pub.id === id);

    if (!publication) {
        return (
            <div className="publication-page">
                {/* <BackButton variant="floating" /> */}
                <h1>{t('publicationNotFound') || 'Publicación no encontrada'}</h1>
            </div>
        );
    }

    // Dentro del componente Publication, añade este useEffect
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer-content');
            const purchaseBar = document.querySelector('.pub-page-purchase-bar');
            const windowHeight = window.innerHeight;
            
            if (footer && purchaseBar) {
                const footerRect = footer.getBoundingClientRect();
                const isMobile = window.innerWidth <= 768;
                
                if (footerRect.top <= windowHeight) {
                    purchaseBar.style.position = 'absolute';
                    purchaseBar.style.bottom = isMobile ? '0.5rem' : '2rem';
                    purchaseBar.style.left = isMobile ? '0.5rem' : '2rem';
                } else {
                    purchaseBar.style.position = 'fixed';
                    purchaseBar.style.bottom = isMobile ? '0.5rem' : '2rem';
                    purchaseBar.style.left = isMobile ? '0.5rem' : '2rem';
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="publication-page">
            {/* <BackButton variant="floating" /> */}

            <CoverPublication
                publication={publication}
                t={t}
                currentLanguage={currentLanguage}
            />
            <Details
                publication={publication}
                t={t}
                currentLanguage={currentLanguage}
            />


            <PurchaseBar
                publication={publication}
                t={t}
                currentLanguage={currentLanguage}
            />
        </div>


    );
}

export default Publication;