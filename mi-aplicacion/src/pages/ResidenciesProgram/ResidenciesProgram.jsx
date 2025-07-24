import { useLanguage } from '../../contexts/LanguageContext';
import IntroResidencies from './sections/Intro/IntroResidencies';
import OpenCallR from './sections/OpenCall/OpenCallR';
import Finca from './sections/Finca/Finca';
import PastResidencies from './sections/PastResidencies/PastResidencies';
import './ResidenciesProgram.css'

function ResidenciesProgram() {
    const { t } = useLanguage();
    return (
        <div className='residencies-program-content'>
            <IntroResidencies t={t}/>
            <OpenCallR t={t}/>
            <Finca t={t}/>
            <PastResidencies t={t}/>
        </div>
    )
}

export default ResidenciesProgram;