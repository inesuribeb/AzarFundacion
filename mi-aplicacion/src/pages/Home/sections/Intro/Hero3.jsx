import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import Weird from './components/Weird';
import './Hero3.css';

function Hero3({ t }) {
    return (
        <section className='hero3-section'>
            <div className='bckgrnd-img-hero3'>
                <Weird
                    t={t}
                />
            </div>
            <div className='hero3-intro'>
                <MediumSans>{t('heroSubtitle')}</MediumSans>
                <Texts className='vision-text'>{t('visionText')}</Texts>
            </div>
        </section>
    );
}

export default Hero3;