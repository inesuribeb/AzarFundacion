import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './BackButton.css';

function BackButton({ 
    className = '', 
    variant = 'default' 
}) {
    const { t } = useLanguage();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const scrollPosition = window.scrollY;
        
        const previousPath = sessionStorage.getItem('previousPath');
        if (previousPath && previousPath !== currentPath) {
            const previousScroll = sessionStorage.getItem('previousScroll');
            if (previousScroll) {
                sessionStorage.setItem(`scroll_${previousPath}`, previousScroll);
            }
        }

        sessionStorage.setItem('previousPath', currentPath);
        sessionStorage.setItem('previousScroll', scrollPosition.toString());

        const handleScroll = () => {
            sessionStorage.setItem('previousScroll', window.scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const handleBack = () => {
        try {
            navigate(-1);
            
            setTimeout(() => {
                const previousPath = sessionStorage.getItem('previousPath');
                if (previousPath) {
                    const savedScrollPosition = sessionStorage.getItem(`scroll_${previousPath}`);
                    if (savedScrollPosition) {
                        window.scrollTo({
                            top: parseInt(savedScrollPosition),
                            behavior: 'auto'
                        });
                    }
                }
            }, 50);
        } catch (error) {
            console.log('Error navegando hacia atrás, yendo a inicio');
            navigate('/');
        }
    };

    const getButtonClass = () => {
        const baseClass = 'back-button';
        const variantClass = `back-button--${variant}`;
        return `${baseClass} ${variantClass} ${className}`.trim();
    };

    return (
        <button 
            onClick={handleBack}
            className={getButtonClass()}
            type="button"
            aria-label="Volver a la página anterior"
        >
            ← {t('backButton')}
        </button>
    );
}

export default BackButton;