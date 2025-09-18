import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Cancel.css';

function Cancel() {
    const { t, getRoute } = useLanguage();

    const handleTryAgain = () => {
        // Redirigir a la página de publicaciones donde está el carrito
        window.location.href = getRoute('archive');
    };

    return (
        <div className="cancel-page">
            <div className="cancel-container">
                <div className="cancel-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                </div>
                
                <h1 className="cancel-title">{t('cancelTitle')}</h1>
                <p className="cancel-message">{t('cancelMessage')}</p>
                
                <div className="cancel-reasons">
                    <h3>{t('cancelReason')}</h3>
                    <ul className="cancel-reason-list">
                        {t('cancelReasonList').split(' • ').map((reason, index) => (
                            <li key={index}>{reason}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="cancel-contact">
                    <p>{t('cancelContactSupport')} <a href={`mailto:${t('email')}`}>{t('email')}</a></p>
                </div>
                
                <div className="cancel-actions">
                    <button 
                        onClick={handleTryAgain}
                        className="cancel-btn cancel-btn-primary"
                    >
                        {t('cancelTryAgain')}
                    </button>
                    <Link 
                        to={getRoute('archive')} 
                        className="cancel-btn cancel-btn-secondary"
                    >
                        {t('cancelBackCatalog')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cancel;