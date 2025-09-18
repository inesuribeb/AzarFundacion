import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Success.css';

function Success() {
    const { t, getRoute } = useLanguage();

    return (
        <div className="success-page">
            <div className="success-container">
                <div className="success-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                </div>
                
                <h1 className="success-title">{t('successTitle')}</h1>
                <p className="success-message">{t('successMessage')}</p>
                
                <div className="success-next-steps">
                    <h3>{t('successNextSteps')}</h3>
                    <p>{t('successShippingInfo')}</p>
                </div>
                
                <div className="success-contact">
                    <p>{t('successContactInfo')} <a href={`mailto:${t('email')}`}>{t('email')}</a></p>
                </div>
                
                <div className="success-actions">
                    <Link 
                        to={getRoute('home')} 
                        className="success-btn success-btn-primary"
                    >
                        {t('successBackHome')}
                    </Link>
                    <Link 
                        to={getRoute('archive')} 
                        className="success-btn success-btn-secondary"
                    >
                        {t('successViewCatalog')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Success;