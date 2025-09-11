import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import { useCart } from '../../contexts/CartContext';
import Navigation2 from './Navigation/Navigation2';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import ShoppingBasket from './ShoppingBasket/ShoppingBasket';
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);
    const { t, getRoute } = useLanguage();
    const [shouldUseLightColor, setShouldUseLightColor] = useState(false);

    const { hideTitle, useLightLogo, useLightHamburger } = useHeader();

    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) > 10) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsScrollingDown(true);
                } else if (currentScrollY < lastScrollY) {
                    setIsScrollingDown(false);
                }
                setLastScrollY(currentScrollY);
            }
        };

        let ticking = false;
        const optimizedScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScroll, { passive: true });
        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [lastScrollY]);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsMenuClosing(false);
            }, 750);
        } else {
            setIsMenuOpen(true);
        }
    };

    const closeMenu = () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    };

    const handleHoverChange = (lightColor) => {
        setShouldUseLightColor(lightColor);
    };

    const shouldHideTitle = (hideTitle && !isMenuOpen) || (isScrollingDown && !isMenuOpen);
    // const isInHeroSection = hideTitle && !isScrollingDown; 
    const logoShouldBeLight = (useLightLogo && !isMenuOpen);

    const logoSrc = logoShouldBeLight
        ? "/Images/Logo/LogoBlanco2.png"
        : "/Images/Logo/LogoAzul2.png";


    const hamburgerShouldBeLight = (useLightHamburger && !isMenuOpen) || shouldUseLightColor;

    const shoppingBasketShouldBeLight = logoShouldBeLight || hamburgerShouldBeLight || shouldUseLightColor;

    return (
        <>
            <div className="header">
                <div className={`header-logo ${shouldHideTitle ? 'hidden-title' : ''}`}>
                {/* <div className={`header-logo ${hideTitle ? 'in-hero-section' : ''}`}> */}

                    <Link
                        to={getRoute('home')}
                        className="header-home-link"
                        onClick={closeMenu}
                    >
                        <img src={logoSrc} alt="Fundación Azar" />
                    </Link>
                </div>

                <div className="header-right">
                    <ShoppingBasket
                        // shouldUseLightColor={shouldUseLightColor}
                        shouldUseLightColor={shoppingBasketShouldBeLight}

                    />
                    <button
                        className={`sandwich-toggle ${isMenuOpen ? 'active' : ''} ${hamburgerShouldBeLight ? 'light' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </div>

            {(isMenuOpen || isMenuClosing) && (
                <div className={`dropdown-menu ${isMenuClosing ? 'closing' : ''}`}>
                    <LanguageToggle closeMenu={toggleMenu} />
                    <Navigation2
                        closeMenu={toggleMenu}
                        onHoverChange={handleHoverChange}
                        isClosing={isMenuClosing}
                    />
                </div>
            )}
        </>
    )
}

export default Header;