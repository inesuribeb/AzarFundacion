import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import './Vision.css';


function Vision({ t }) {
    return (
        <section className='section-vision'>
            {/* <h1>{t('visionTitle')}</h1> */}
            <MediumSans>{t('visionTitle')}</MediumSans>
            <div 
                className="vision-text"
                dangerouslySetInnerHTML={{ __html: t('visionText') }}
            />
        </section>
    )
}

export default Vision;