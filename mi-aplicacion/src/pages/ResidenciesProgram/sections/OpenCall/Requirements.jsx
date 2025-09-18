import { useLanguage } from '../../../../contexts/LanguageContext';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Requirements.css'

function Requirements({ t, residency }) {
    const { language } = useLanguage();

    return (
        <div className='requirements-section-of'>
            <div className='NR-column-left'>
                <div>
                    <BigSerif className='RP-title'>{residency?.artTitle}</BigSerif>
                    <MediumSans className='RP-disciplines'>{residency?.artDisciplines?.[language]}</MediumSans>
                    <Texts
                        size="medium"
                        className='NR-texts'
                        dangerouslySetInnerHTML={{ __html: residency?.artDescription?.[language] }}
                    />
                </div>
                <div className='pdf-button-container'>
                    <button className='pdf-button'>
                        {t('downloadPDF')}
                    </button>
                </div>
            </div>
            <div className='NR-column-right'>
                <div className='fantasmata-img'>
                    <img src="/Images/Residencies/NextResidency/Fantasmata.jpg" alt="" />
                </div>
                <div className='application'>
                    <MediumSans className='sendUsTitle'>{t('sendUs')}</MediumSans>
                    <div className='appSending'>
                        <img src="Icons/largeArrow.png" alt="arrow-icon" />
                        {t('whereToSend')}</div>
                    <div className='appSending'>
                        <img src="Icons/largeArrow.png" alt="arrow-icon" />
                        {t('whenToSend')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requirements;