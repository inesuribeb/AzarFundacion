import Texts from '../../../../components/Texts/Texts';
import PubCTA from '../../../../components/PubCTA/PubCTA';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans'
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
                    <div className='pre-sale-text'>
                        {/* <MediumSans
                            dangerouslySetInnerHTML={{ __html: exhibition.preSaleTitle }}
                        /> */}
                        <h1
                            className="tu-clase-aqui"
                            dangerouslySetInnerHTML={{ __html: exhibition.preSaleTitle }}
                        />                        <Texts
                            size="medium"
                            // className='intro-expoDetails-texts'
                            dangerouslySetInnerHTML={{ __html: exhibition.preSaleText }}
                        />
                        {/* <Texts
                            size="large"
                            dangerouslySetInnerHTML={{ __html: exhibition.byeByeText }}
                        /> */}
                    </div>
                    {/* {associatedPublication && (
                        <PubCTA
                            className='pub-CTA-presale'
                            publication={associatedPublication}
                        />
                    )} */}

                    <img
                        src={exhibition?.preSaleImage2}
                        alt={exhibition?.title}
                    />

                </div>

            </div>
        </section>
    );
}

export default ExpoPreSale;