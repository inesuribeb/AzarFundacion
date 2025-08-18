import { useLanguage } from '../../../contexts/LanguageContext';
import './LanguageToggle.css';

function LanguageToggle({ closeMenu }) {
    const { language, changeLanguage, availableLanguages } = useLanguage();

    // const handleLanguageChange = (newLanguage) => {
    //     if (newLanguage !== language) {
    //         changeLanguage(newLanguage);
    //     }
    // };
    const handleLanguageChange = (newLanguage) => {
        if (newLanguage !== language) {
            changeLanguage(newLanguage);
            closeMenu(); // ← Cerrar el menú después del cambio
        }
    };

    return (
        <div className="language-toggle">
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    className={`language-option ${language === lang ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LanguageToggle;