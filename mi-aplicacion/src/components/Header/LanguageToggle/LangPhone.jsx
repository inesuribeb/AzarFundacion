import { useLanguage } from '../../../contexts/LanguageContext';
import './LangPhone.css';

function LangPhone({ closeMenu }) {
    const { language, changeLanguage, availableLanguages } = useLanguage();
    
    const handleLanguageChange = (newLanguage) => {
        if (newLanguage !== language) {
            changeLanguage(newLanguage);
            closeMenu(); 
        }
    };
    return (
        <div className="lang-toggle-phone">
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    className={`language-option-phone ${language === lang ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LangPhone;