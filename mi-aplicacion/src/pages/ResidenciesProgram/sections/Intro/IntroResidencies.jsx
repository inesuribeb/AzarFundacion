import MiniBlue from '../../../../components/Titles/MiniBlue/MiniBlue';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import Texts from '../../../../components/Texts/Texts';
import './IntroResidencies.css'

function IntroResidencies({ t }) {
    return (
        <section className='intro-residencies-section'>
            <div className='left-column-intro'>
                <div className='intro-titles'>
                    <MiniBlue>{t('residenciesProgramMini')}</MiniBlue>
                    <BigSerif>{t('introTitle')}</BigSerif>
                </div>
                <div className='intro-info'>
                    <Texts size="large" className="intro-text">{t('introText')}</Texts>
                </div>
            </div>
            <div className='right-column-intro'>
                <img src="/Images/ResidenciesProgram/Intro/tijeras.png" alt="" />
            </div>


        </section>
    )
}

export default IntroResidencies;