import { useParams } from 'react-router-dom';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverArtPiece from './sections/CoverArtPiece/CoverArtPiece';
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
                <BackButton variant="floating" />
                <h1>{t('artPieceNotFound') || 'Obra no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="artpiece-page">
            <BackButton variant="floating" />
            
            {/* Sección de portada */}
            <CoverArtPiece artPiece={artPiece} />
            
            {/* Aquí irán las siguientes secciones */}
            {/* <IntroArtPiece artPiece={artPiece} /> */}
            {/* <DetailsSection artPiece={artPiece} /> */}
            {/* <GallerySection artPiece={artPiece} /> */}
        </div>
    );
}

export default ArtPiece;