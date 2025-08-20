import Texts from '../../../../components/Texts/Texts';
import { mockArtPiecesData } from '../../../../utils/Data/ArtPiecesData';
import './ArtPieceMention.css';

function ArtPieceMention({ residencia, t, currentLanguage }) {
    const artPiece = residencia.collectiveArtPiece && residencia.collectiveArtPiece.length > 0
        ? mockArtPiecesData.find(ap => ap.id === residencia.collectiveArtPiece[0])
        : null;

    if (!artPiece) {
        return null; // No mostrar nada si no hay artPiece
    }

    return (
        <section className='section-artPieceDescription'>
            <div className='description-info'>
                <Texts
                    size="medium"
                    className='residency-texts'
                    dangerouslySetInnerHTML={{ __html: residencia.textCAP }}
                />
            </div>
            <div className='artPM-picture'>
                <img
                    src={artPiece.image}
                    alt={artPiece.title[currentLanguage] || artPiece.title.es}
                    className="artpiece-image"
                />

                <h3>{artPiece.title[currentLanguage] || artPiece.title.es}</h3>
            </div>
        </section>
    )
}

export default ArtPieceMention;