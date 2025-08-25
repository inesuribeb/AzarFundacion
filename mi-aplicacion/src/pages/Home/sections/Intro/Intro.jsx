import Texts from '../../../../components/Texts/Texts';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import NavigationTabs from './components/NavigationTabs'; 
import './Intro.css'

function Intro({ t, getRoute }) {
    return (
        <section className='intro-section'>
            {/* <Texts size="extra-large" className='intro-text-home'>{t('visionText')}</Texts> */}
            <MediumSans className='intro-text-home2'>{t('heroSubtitle')}</MediumSans>
            <Texts className='intro-text-home'>{t('visionText')}</Texts>
            <div className='navigation-tabs'>
                <NavigationTabs
                    t={t}
                    getRoute={getRoute}
                    onTabChange={(item) => console.log('Tab selected:', item)}
                    onHoverStateChange={(isLight) => console.log('Hover:', isLight)}
                />
            </div>
        </section>
    )
}

export default Intro;