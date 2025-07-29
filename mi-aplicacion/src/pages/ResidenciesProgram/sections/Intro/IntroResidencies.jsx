import MiniBlue from '../../../../components/Titles/MiniBlue/MiniBlue';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import Texts from '../../../../components/Texts/Texts';
import './IntroResidencies.css'

function IntroResidencies({ t }) {
    return (
        <section className='intro-residencies-section'>
            <MiniBlue>{t('residenciesProgramMini')}</MiniBlue>
            <BigSerif>{t('introTitle')}</BigSerif>
            <Texts size="large">{t('introText')}</Texts>


        </section>
    )
}

export default IntroResidencies;