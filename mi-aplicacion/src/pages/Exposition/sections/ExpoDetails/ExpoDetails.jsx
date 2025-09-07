import Texts from '../../../../components/Texts/Texts'
import './ExpoDetails.css';

function ExpoDetails({ t, currentLanguage, exhibition }) {
    if (!exhibition) return null;

    return (
        <section className='section-expo-details'>
            <div className='expo-texts'>
                <div className='intro-expoDetails-img'>
                    <img
                        src={exhibition?.imageDetail}
                        alt={exhibition?.title}
                    />
                </div>

                <div className='intro-expoDetails-texts'>
                    <Texts
                        size="large"
                        // className='intro-expoDetails-texts'
                        dangerouslySetInnerHTML={{ __html: exhibition.intro }}
                    />

                    <img
                        src={exhibition?.imageDetail2}
                        alt={exhibition?.title}
                    />
                </div>

            </div>

        </section>
    );
}

export default ExpoDetails;