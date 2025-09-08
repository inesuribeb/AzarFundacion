import Texts from '../../../../components/Texts/Texts';
import PubCTA from '../../../../components/PubCTA/PubCTA';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import './ExpoPreSale.css';

function ExpoPreSale({ t, currentLanguage, exhibition }) {

    const getAssociatedPublication = () => {
        if (!exhibition?.publicaciones || exhibition.publicaciones.length === 0) {
            return null;
        }
        
        const publicationId = exhibition.publicaciones[0];
        
        return mockPublicationsData.find(pub => pub.id === publicationId);
    };

    const associatedPublication = getAssociatedPublication();

    return (
        <section className='expo-pre-sale'>
            <div className='presale-texts'>
                <div className='intro-presale-img'>
                    <img
                        src={exhibition?.preSaleImage}
                        alt={exhibition?.title}
                    />
                </div>

                <div className='intro-presale-texts'>
                    <Texts
                        size="medium"
                        // className='intro-expoDetails-texts'
                        dangerouslySetInnerHTML={{ __html: exhibition.preSaleText }}
                    />

                    {associatedPublication && (
                        <PubCTA 
                        className='pub-CTA-presale'
                        publication={associatedPublication} 
                        />
                    )}
                </div>

            </div>
        </section>
    );
}

export default ExpoPreSale;