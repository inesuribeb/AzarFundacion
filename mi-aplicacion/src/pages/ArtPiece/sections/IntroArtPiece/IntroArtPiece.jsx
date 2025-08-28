// import { mockArtPiecesData } from '../../../../utils/Data/ArtPiecesData';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import Texts from '../../../../components/Texts/Texts';
import GalleryPreview from './components/GalleryPreview';
import './IntroArtPiece.css';

function IntroArtPiece({ artPiece, t, currentLanguage }) {
    const { getRoute, language } = useLanguage();

    if (!artPiece) {
        return null;
    }

    return (
        <section className='intro-art-piece'>
            <div className='description-info'>
                <h1 className='artpiece-title-year'>
                    {artPiece.title} ({artPiece.year})
                </h1>
                <p className= 'authors-ap' dangerouslySetInnerHTML={{ __html: artPiece.authors }}></p>
                <Texts
                    size="medium"
                    className='intro-artpiece-texts'
                    dangerouslySetInnerHTML={{ __html: artPiece.textAP1 }}
                />
                <GalleryPreview 
                    images={artPiece.gallery?.slice(0, 2)} 
                    title={artPiece.title} 
                    startIndex={0} 
                />
                <Texts
                    size="medium"
                    className='intro-artpiece-texts'
                    dangerouslySetInnerHTML={{ __html: artPiece.textAP2 }}
                />
                <GalleryPreview 
                    images={artPiece.gallery?.slice(2, 3)} 
                    title={artPiece.title} 
                    startIndex={2} 
                />
                <Texts
                    size="medium"
                    className='intro-artpiece-texts'
                    dangerouslySetInnerHTML={{ __html: artPiece.textAP3 }}
                />
                <GalleryPreview 
                    images={artPiece.gallery?.slice(3, 5)} 
                    title={artPiece.title} 
                    startIndex={3} 
                />
            </div>

        </section>
    );
}

export default IntroArtPiece;