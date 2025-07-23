import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from './Navigation/Navigation';
import LanguageToggle from './LanguageToggle/LanguageToggle'
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, getRoute } = useLanguage();
    const [shouldUseLightColor, setShouldUseLightColor] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleHoverChange = (lightColor) => {
        setShouldUseLightColor(lightColor);
    };

    return (
        <div className="header">
            <h1>
                <Link to={getRoute('home')} className="header-home-link">
                    <span className="fundacion">FUNDACIÓN </span>
                    <span className="azar">AZAR</span>
                </Link>
            </h1>

            <button
                className={`sandwich-toggle ${isMenuOpen ? 'active' : ''} ${shouldUseLightColor ? 'light' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="line"></span>
                <span className="line"></span>
            </button>

            {isMenuOpen && (
                <div className="dropdown-menu">
                    <Navigation
                        closeMenu={() => setIsMenuOpen(false)}
                        onHoverChange={handleHoverChange}
                    />
                    <LanguageToggle />
                </div>
            )}
        </div>
    )
}

export default Header;