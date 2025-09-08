// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import './PubCTA.css';

// function PubCTA({ publication }) {
//     const { language, getRoute, t } = useLanguage();
    
//     if (!publication) return null;
    
//     const publicationRoute = getRoute('publication', publication.id);
    
//     return (
//         <div className='pub-cta'>
//             <div className='pub-cover'>
//                 <img 
//                     src={publication.cover} 
//                     alt={publication.title[language] || publication.title.es}
//                     className='pub-cover-image'
//                 />
//             </div>
            
//             <h3 
//                 className='pub-title'
//                 dangerouslySetInnerHTML={{ 
//                     __html: publication.title[language] || publication.title.es 
//                 }}
//             />
            
//             <Link 
//                 to={publicationRoute}
//                 className='add-to-cart-button'
//             >
//                 {t('addToCart') || 'Añadir a la cesta'}
//             </Link>
//         </div>
//     );
// }

// export default PubCTA;

import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './PubCTA.css';

function PubCTA({ publication }) {
    const { language, getRoute, t } = useLanguage();
    
    if (!publication) return null;
    
    const publicationRoute = getRoute('publication', { id: publication.id });
    
    return (
        <div className='pub-cta'>
            <div className='pub-cover'>
                <img 
                    src={publication.cover} 
                    alt={publication.title[language] || publication.title.es}
                    className='pub-cover-image'
                />
            </div>
            
            <h3 
                className='pub-title'
                dangerouslySetInnerHTML={{ 
                    __html: publication.title[language] || publication.title.es 
                }}
            />
            
            <Link 
                to={publicationRoute}
                className='add-to-cart-button'
            >
                {t('addToCart') || 'Añadir a la cesta'}
            </Link>
        </div>
    );
}

export default PubCTA;