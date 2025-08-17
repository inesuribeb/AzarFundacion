import { useParams } from 'react-router-dom';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import './Publication.css';

function Publication() {
    const { id } = useParams();
    const { t } = useLanguage();
    const localizedPublications = useLocalizedData(mockPublicationsData);
    
    // Buscar la publicación por ID
    const publication = localizedPublications.find(pub => pub.id === id);

    if (!publication) {
        return (
            <div className="publication-page">
                <h1>{t('publicationNotFound') || 'Publicación no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="publication-page">
            <div className="publication-hero">
                {publication.images && publication.images.length > 0 ? (
                    <img 
                        src={publication.images[0]} 
                        alt={publication.title}
                        className="publication-hero-image"
                    />
                ) : publication.image && (
                    <img 
                        src={publication.image} 
                        alt={publication.title}
                        className="publication-hero-image"
                    />
                )}
            </div>
            
            <div className="publication-content">
                <div className="publication-header">
                    <div className="publication-number">
                        {publication.number && `#${publication.number}`}
                    </div>
                    <h1 className="publication-title">{publication.title}</h1>
                    <p className="publication-subtitle">{publication.subtitle}</p>
                </div>
                
                <div className="publication-info">
                    <div className="publication-details">
                        <h3>{t('description') || 'Descripción'}</h3>
                        <p>{publication.description}</p>
                        
                        {publication.year && (
                            <>
                                <h3>{t('year') || 'Año'}</h3>
                                <p>{publication.year}</p>
                            </>
                        )}
                        
                        {publication.pages && (
                            <>
                                <h3>{t('pages') || 'Páginas'}</h3>
                                <p>{publication.pages}</p>
                            </>
                        )}
                        
                        {publication.language && (
                            <>
                                <h3>{t('language') || 'Idioma'}</h3>
                                <p>{publication.language}</p>
                            </>
                        )}
                        
                        {publication.isbn && (
                            <>
                                <h3>ISBN</h3>
                                <p>{publication.isbn}</p>
                            </>
                        )}
                        
                        {publication.editors && publication.editors.length > 0 && (
                            <>
                                <h3>{t('editors') || 'Editores'}</h3>
                                <ul className="editors-list">
                                    {publication.editors.map((editor, index) => (
                                        <li key={index}>{editor}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        
                        {publication.contributors && publication.contributors.length > 0 && (
                            <>
                                <h3>{t('contributors') || 'Colaboradores'}</h3>
                                <ul className="contributors-list">
                                    {publication.contributors.map((contributor, index) => (
                                        <li key={index}>{contributor}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    
                    <div className="publication-sidebar">
                        {/* Información de compra/precio */}
                        {publication.price && (
                            <div className="purchase-info">
                                <h3>{t('price') || 'Precio'}</h3>
                                <div className="price">{publication.price}</div>
                                
                                {publication.buyLink && (
                                    <a 
                                        href={publication.buyLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="buy-button"
                                    >
                                        {t('buyNow') || 'Comprar ahora'}
                                    </a>
                                )}
                            </div>
                        )}
                        
                        {/* Información relacionada */}
                        {(publication.residencias || publication.exposiciones) && (
                            <div className="publication-related">
                                <h3>{t('relatedContent') || 'Contenido relacionado'}</h3>
                                
                                {publication.residencias && publication.residencias.length > 0 && (
                                    <div className="related-section">
                                        <h4>{t('residencies') || 'Residencias'}</h4>
                                        <ul>
                                            {publication.residencias.map((residenciaId, index) => (
                                                <li key={index}>
                                                    <span>{residenciaId}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {publication.exposiciones && publication.exposiciones.length > 0 && (
                                    <div className="related-section">
                                        <h4>{t('exhibitions') || 'Exposiciones'}</h4>
                                        <ul>
                                            {publication.exposiciones.map((expoId, index) => (
                                                <li key={index}>
                                                    <span>{expoId}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                        
                        {/* Galería de imágenes adicionales */}
                        {publication.images && publication.images.length > 1 && (
                            <div className="publication-gallery">
                                <h3>{t('gallery') || 'Galería'}</h3>
                                <div className="gallery-grid">
                                    {publication.images.slice(1).map((image, index) => (
                                        <img 
                                            key={index}
                                            src={image} 
                                            alt={`${publication.title} - ${index + 2}`}
                                            className="gallery-image"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publication;