// import { useLanguage } from '../../../contexts/LanguageContext';
// import './LangPhone.css';

// function LangPhone({ closeMenu }) {
//     const { language, changeLanguage, availableLanguages } = useLanguage();
    
//     const handleLanguageChange = (newLanguage) => {
//         if (newLanguage !== language) {
//             changeLanguage(newLanguage);
//             closeMenu(); 
//         }
//     };
//     return (
//         <div className="lang-toggle-phone">
//             {availableLanguages.map((lang) => (
//                 <button
//                     key={lang}
//                     className={`language-option-phone ${language === lang ? 'active' : ''}`}
//                     onClick={() => handleLanguageChange(lang)}
//                 >
//                     {lang.toUpperCase()}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default LangPhone;

import { useLanguage } from '../../../contexts/LanguageContext';
import './LangPhone.css';

function LangPhone({ closeMenu, isClosing }) {
    const { language, changeLanguage, availableLanguages } = useLanguage();
    
    const handleLanguageChange = (newLanguage) => {
        if (newLanguage !== language) {
            changeLanguage(newLanguage);
            closeMenu(); 
        }
    };

    return (
        <div className={`lang-toggle-phone ${isClosing ? 'fade-out' : 'fade-in'}`}>
            {availableLanguages.map((lang, index) => (
                <button
                    key={lang}
                    className={`language-option-phone ${language === lang ? 'active' : ''} ${isClosing ? 'fade-out' : 'fade-in'}`}
                    style={{
                        animationDelay: isClosing ? '0s' : `${0.6 + index * 0.15}s`
                    }}
                    onClick={() => handleLanguageChange(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LangPhone;