// import Texts from '../../../../components/Texts/Texts';
// import './Intro.css'

// function Intro({ t }) {
//     return (
//         <section className='intro-section'>
//             <Texts size="extra-large" >{t('introHomeText')}</Texts>
//             <div className='navigation-tabs'>

//             </div>
//         </section>
//     )
// }

// export default Intro;

import Texts from '../../../../components/Texts/Texts';
import NavigationTabs from './components/NavigationTabs'; // Ajusta la ruta según tu estructura
import './Intro.css'

function Intro({ t , getRoute }) {
    return (
        <section className='intro-section'>
            <Texts size="extra-large" className='intro-text-home'>{t('visionText')}</Texts>
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