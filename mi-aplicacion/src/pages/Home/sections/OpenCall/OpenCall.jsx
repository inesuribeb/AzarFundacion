import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import MiniBlue from '../../../../components/Titles/MiniBlue/MiniBlue';
import './OpenCall.css'

function OpenCall({ t, data }) {
    const residencyData = Array.isArray(data) ? data[0] : data;
    const navigate = useNavigate();
    const { getRoute } = useLanguage();

    const handleImageClick = () => {
        navigate(getRoute('residenciesProgram'));
        setTimeout(() => {
            const element = document.getElementById('opencall-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section className='OpenCall-section'>
            {/* <BigSerif className='o-title'>{t('openCall')}</BigSerif>
            <BigSerif className='o-subtitle'>{residencyData?.subtitle}</BigSerif> */}
            <MediumSans className='o-title'>{t('openCall')}</MediumSans>
            <MediumSans className='o-subtitle'>{residencyData?.subtitle}</MediumSans>
            <img
                src={residencyData?.image}
                alt={residencyData?.title}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
            <p className='o-p'>{t('callDeadline')}. {residencyData?.openCallDates}</p>
            <p className='o-p'>{residencyData?.title}. {residencyData?.residencyDates}</p>
        </section>
    )
}

export default OpenCall;