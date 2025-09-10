import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

function Footer() {
    const { t, getRoute } = useLanguage();

    return (
        <div className='footer-content'>
            <div className='footer-anagram'>
                <img src="/Images/Logo/LogoSinBordes.jpg" alt="" />
            </div>
            <div className='footer-info'>
                <div className='footer-info-column'>
                    <a href="mailto:residencia@fundacionazar.com">
                        residencia@fundacionazar.com
                    </a>
                </div>
                <div className='footer-menu'>
                    <Link to={getRoute('foundation')}>
                        {t('foundation')}
                    </Link>
                    <Link to={getRoute('residenciesProgram')}>
                        {t('residenciesProgram')}
                    </Link>
                    <Link to={getRoute('archive')}>
                        {t('archive')}
                    </Link>
                    <Link to={`${getRoute('archive')}?tab=publications`}>
                        {t('shop')}
                    </Link>
                </div>
                <div className='footer-info-column'>
                    <a href="https://www.instagram.com/fundacionazar/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;