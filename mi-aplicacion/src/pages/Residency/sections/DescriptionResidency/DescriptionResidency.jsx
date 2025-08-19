import Texts from '../../../../components/Texts/Texts';
import './DescriptionResidency.css';

function DescriptionResidency({ residencia, t, currentLanguage }) {

    return (
        <section className='section-residencyDescription'>
            <div className='description-info'>
            <Texts
                size="medium"
                className='residency-description'
                dangerouslySetInnerHTML={{ __html: residencia.textR }}
            />
            <Texts
                size="medium"
                className='residency-texts'
                dangerouslySetInnerHTML={{ __html: residencia.jurado }}
            />
            <Texts
                size="medium"
                className='residency-texts'
                dangerouslySetInnerHTML={{ __html: residencia.textR2 }}
            />
            </div>
        </section>
    )
}

export default DescriptionResidency;