import Texts from '../../../../components/Texts/Texts';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import NavigationTabs from './components/NavigationTabs'; 
import PutaSeccion from './components/PutaSeccion';
import './Intro.css'

function Intro({ t, getRoute }) {
    return (
        <section className='intro-section'>
            <MediumSans className='intro-text-home2'>{t('heroSubtitle')}</MediumSans>
            {/* <BigSerif className='i-title'>{t('heroSubtitle')}</BigSerif> */}
            <Texts className='intro-text-home'>{t('visionText')}</Texts>
            {/* <div className='navigation-tabs'>
                <NavigationTabs
                    t={t}
                    getRoute={getRoute}
                    onTabChange={(item) => console.log('Tab selected:', item)}
                    onHoverStateChange={(isLight) => console.log('Hover:', isLight)}
                />
            </div> */}
            <PutaSeccion 
            t={t}
            getRoute={getRoute}
            />

        </section>
    )
}

export default Intro;