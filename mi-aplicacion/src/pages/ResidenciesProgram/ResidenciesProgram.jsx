import { useLanguage } from '../../contexts/LanguageContext';
import IntroResidencies from './sections/Intro/IntroResidencies';
import OpenCallR from './sections/OpenCall/OpenCallR';
import Finca from './sections/Finca/Finca';
import PastResidencies from './sections/PastResidencies/PastResidencies';
import BottomNavigation from './components/BottomNavigation';
import './ResidenciesProgram.css'

function ResidenciesProgram() {
    const { t } = useLanguage();
    return (
        <div className='residencies-program-content'>
            <div className='bottom-navigation'>
                <BottomNavigation t={t}/>
            </div>
            <div className='RP-sections'>
            <IntroResidencies t={t}/>
            <OpenCallR t={t}/>
            <Finca t={t}/>
            <PastResidencies t={t}/>
            </div>
        </div>
    )
}

export default ResidenciesProgram;