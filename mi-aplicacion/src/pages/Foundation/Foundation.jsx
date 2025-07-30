import { useLanguage } from '../../contexts/LanguageContext';
import Vision from './sections/Vision/Vision';
import Team from './sections/Team/Team';
import './Foundation.css'

function Foundation() {
    const { t } = useLanguage();

    return (
        <div className='foundation-container'>
            <section className="vision-section">
                <Vision t={t} />
            </section>
            <section className="team-container">
                <Team t={t} />
            </section>
        </div>
    )
}

export default Foundation;