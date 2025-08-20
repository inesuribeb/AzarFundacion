import { mockExhibitionsData } from '../../../../utils/Data/ExhibitionsData';
import Texts from '../../../../components/Texts/Texts';
import './ExhibitionMention.css';

function ExhibitionMention({ residencia, t, currentLanguage }) {
    const exhibition = residencia.exposiciones && residencia.exposiciones.length > 0 
        ? mockExhibitionsData.find(expo => expo.id === residencia.exposiciones[0])
        : null;

    return (
        <section className='section-exhibition-mention'>
            <div className='description-info'>
            <Texts
                    size="medium"
                    className='residency-texts'
                    dangerouslySetInnerHTML={{ __html: residencia.textE }}
                />
            </div>

            <div className='residency-exhibitionM'>
                {exhibition && (
                    <img 
                        src={exhibition.image} 
                        alt={exhibition.title[currentLanguage] || exhibition.title.es}
                        className="exhibition-image"
                    />
                )}
            </div>

        </section>
    )
}

export default ExhibitionMention;