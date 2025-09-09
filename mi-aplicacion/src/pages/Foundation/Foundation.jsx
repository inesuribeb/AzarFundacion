import { useLanguage } from '../../contexts/LanguageContext';
import { useMobile } from '../../components/Hooks/useMobile';
import Vision from './sections/Vision/Vision';
import Team from './sections/Team/Team';
import TeamPhone from './sections/Team/TeamPhone';
import './Foundation.css'

function Foundation() {
    const { t } = useLanguage();
    const isMobile = useMobile();

    return (
        // <div className='foundation-container'>
        //     <section className="vision-section">
        //         <Vision t={t} />
        //     </section>
        //     <section className="team-container">
        //         {isMobile ? (
        //             <TeamPhone t={t} />
        //         ) : (
        //             <Team t={t} />
        //         )}
        //     </section>
        // </div>

        <div className='foundation-container'>
            <section className="team-container">
                {isMobile ? (
                    <TeamPhone t={t} />
                ) : (
                    <Team t={t} />
                )}
            </section>
        </div>
    )
}

export default Foundation;