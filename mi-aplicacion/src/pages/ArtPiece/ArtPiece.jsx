import { useParams } from 'react-router-dom';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverArtPiece from './sections/CoverArtPiece/CoverArtPiece';
import IntroArtPiece from './sections/IntroArtPiece/IntroArtPiece';
import './ArtPiece.css';

function ArtPiece() {
    const { id } = useParams();
    const { t, currentLanguage, language } = useLanguage();
    const localizedArtPieces = useLocalizedData(mockArtPiecesData);
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
            <CoverArtPiece
                artPiece={artPiece}
                lightHeader={{ logo: true, hamburger: true }}
            />
            <IntroArtPiece artPiece={artPiece} t={t} currentLanguage={currentLanguage} />
        </div>
    );
}

export default ArtPiece;