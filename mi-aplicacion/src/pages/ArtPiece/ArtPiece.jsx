import { useParams } from 'react-router-dom';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import './ArtPiece.css';

function ArtPiece() {
    const { id } = useParams();
    const { t } = useLanguage();
    const localizedArtPieces = useLocalizedData(mockArtPiecesData);
    
    // Buscar la obra por ID
    const artPiece = localizedArtPieces.find(piece => piece.id === id);

    if (!artPiece) {
        return (
            <div className="artpiece-page">
                <h1>{t('artPieceNotFound') || 'Obra no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="artpiece-page">
            <div className="artpiece-hero">
                <img 
                    src={artPiece.image} 
                    alt={artPiece.title}
                    className="artpiece-hero-image"
                />
            </div>
            
            <div className="artpiece-content">
                <div className="artpiece-header">
                    <h1 className="artpiece-title">{artPiece.title}</h1>
                    <p className="artpiece-subtitle">{artPiece.subtitle}</p>
                </div>
                
                <div className="artpiece-info">
                    <div className="artpiece-details">
                        <h3>{t('description') || 'Descripción'}</h3>
                        <p>{artPiece.description}</p>
                        
                        {artPiece.medium && (
                            <>
                                <h3>{t('medium') || 'Técnica'}</h3>
                                <p>{artPiece.medium}</p>
                            </>
                        )}
                        
                        {artPiece.dimensions && (
                            <>
                                <h3>{t('dimensions') || 'Dimensiones'}</h3>
                                <p>{artPiece.dimensions}</p>
                            </>
                        )}
                        
                        {artPiece.year && (
                            <>
                                <h3>{t('year') || 'Año'}</h3>
                                <p>{artPiece.year}</p>
                            </>
                        )}
                        
                        {artPiece.artists && artPiece.artists.length > 0 && (
                            <>
                                <h3>{t('artists') || 'Artistas'}</h3>
                                <ul className="artists-list">
                                    {artPiece.artists.map((artist, index) => (
                                        <li key={index}>{artist}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    
                    {/* Información relacionada */}
                    {(artPiece.residencias || artPiece.exposiciones) && (
                        <div className="artpiece-related">
                            <h3>{t('relatedContent') || 'Contenido relacionado'}</h3>
                            
                            {artPiece.residencias && artPiece.residencias.length > 0 && (
                                <div className="related-section">
                                    <h4>{t('residencies') || 'Residencias'}</h4>
                                    <ul>
                                        {artPiece.residencias.map((residenciaId, index) => (
                                            <li key={index}>
                                                <span>{residenciaId}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {artPiece.exposiciones && artPiece.exposiciones.length > 0 && (
                                <div className="related-section">
                                    <h4>{t('exhibitions') || 'Exposiciones'}</h4>
                                    <ul>
                                        {artPiece.exposiciones.map((expoId, index) => (
                                            <li key={index}>
                                                <span>{expoId}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArtPiece;