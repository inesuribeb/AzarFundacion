import { useLanguage } from '../../../../contexts/LanguageContext';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Jurado.css';
import './JuradoSlider.css';

function Jurado({ t, residency }) {
    const { language } = useLanguage();

    return (
        <div className='jurado-section'>
            {/* <MediumSans>{t('juryR')}</MediumSans> */}
            <div className='opencall-large'>
                <MediumSans className='openCalltitle'>{t('openCall')}</MediumSans>
                <Texts
                    size="medium"
                    className='description-large'
                    dangerouslySetInnerHTML={{ __html: residency?.largeDescription?.[language] }}
                />

                <MediumSans className='openCalltitle'>{t('juryR')}</MediumSans>

            </div>
            {/* <div className='convocatoria-abierta'>
                <div className='columnJ-left'>
                </div>
                <div className='columnJ-right'>
                    <MediumSans className='openCalltitle'>{t('openCall')}</MediumSans>
                    <Texts
                        size="medium"
                        className='NR-texts'
                        dangerouslySetInnerHTML={{ __html: residency?.largeDescription?.[language] }}
                    />
                </div>
            </div> */}

            {/* <div className='jury-desplegado'>

            </div> */}
            <div className='jury-desplegado'>
                {/* <MediumSans>{t('juryR')}</MediumSans> */}
                {residency?.jury?.map((member, index) => (
                    <div key={member.id} className='jury-member'>
                        <div className='jury-photo-container'>
                            <img
                                src={member.portrait}
                                alt={member.name}
                                className='jury-photo'
                            />
                        </div>
                        <div className='jury-info'>
                            <h3 className='jury-name'>{member.name}</h3>
                            <p className='jury-profession'>{member.proffesion[language]}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Jurado;