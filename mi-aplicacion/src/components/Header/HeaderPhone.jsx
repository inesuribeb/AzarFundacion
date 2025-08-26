import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import NavigationPhone from './Navigation/NavigationPhone';
import LangPhone from './LanguageToggle/LangPhone';
import './HeaderPhone.css';

function HeaderPhone() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getRoute } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header-phone">
                <Link to={getRoute('home')} className="header-phone-logo">
                    <img src="/Images/Logo/LogoAzul2.png" alt="Fundación Azar" />
                </Link>

                <button
                    className={`menu-toggle-phone ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="menu-phone-overlay">
                    <NavigationPhone closeMenu={toggleMenu} />
                    <LangPhone closeMenu={toggleMenu}/>
                </div>
            )}
        </>
    );
}

export default HeaderPhone;