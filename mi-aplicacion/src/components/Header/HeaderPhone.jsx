// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import NavigationPhone from './Navigation/NavigationPhone';
// import LangPhone from './LanguageToggle/LangPhone';
// import './HeaderPhone.css';

// function HeaderPhone() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrollingDown, setIsScrollingDown] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const { getRoute } = useLanguage();
//     const { useLightLogo, useLightHamburger } = useHeader();

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (Math.abs(currentScrollY - lastScrollY) > 10) {
//                 if (currentScrollY > lastScrollY && currentScrollY > 100) {
//                     setIsScrollingDown(true);
//                 } else if (currentScrollY < lastScrollY) {
//                     setIsScrollingDown(false);
//                 }
//                 setLastScrollY(currentScrollY);
//             }
//         };

//         let ticking = false;
//         const optimizedScroll = () => {
//             if (!ticking) {
//                 requestAnimationFrame(() => {
//                     handleScroll();
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', optimizedScroll, { passive: true });
//         return () => window.removeEventListener('scroll', optimizedScroll);
//     }, [lastScrollY]);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     const shouldHideLogo = isScrollingDown && !isMenuOpen;

//     const logoShouldBeLight = useLightLogo && !isMenuOpen;
//     const logoSrc = logoShouldBeLight
//         ? "/Images/Logo/LogoBlanco2.png"
//         : "/Images/Logo/LogoAzul2.png";

//     const hamburgerShouldBeLight = useLightHamburger && !isMenuOpen;

//     return (
//         <>
//             <div className="header-phone">
//                 <Link
//                     to={getRoute('home')}
//                     className={`header-phone-logo ${shouldHideLogo ? 'hidden-logo' : ''}`}
//                     onClick={closeMenu}
//                 >
//                     <img src={logoSrc} alt="Fundación Azar" />
//                 </Link>

//                 <button
//                     className={`menu-toggle-phone ${isMenuOpen ? 'open' : ''} ${hamburgerShouldBeLight ? 'light' : ''}`}
//                     onClick={toggleMenu}
//                     aria-label="Toggle menu"
//                 >
//                     <span></span>
//                     <span></span>
//                 </button>
//             </div>

//             {isMenuOpen && (
//                 <div className="menu-phone-overlay">
//                     <NavigationPhone closeMenu={toggleMenu} />
//                     <LangPhone closeMenu={toggleMenu} />
//                 </div>
//             )}
//         </>
//     );
// }

// export default HeaderPhone;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import NavigationPhone from './Navigation/NavigationPhone';
import LangPhone from './LanguageToggle/LangPhone';
import ShoppingBasket from './ShoppingBasket/ShoppingBasket';
import './HeaderPhone.css';

function HeaderPhone() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { getRoute } = useLanguage();
    const { useLightLogo, useLightHamburger } = useHeader();

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
            // Cerrar menú
            setIsClosing(true);
            setShowContent(false);

            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 500); // Duración de la animación de cierre
        } else {
            // Abrir menú
            setIsMenuOpen(true);
            setIsClosing(false);

            // Mostrar contenido después de que el overlay aparezca
            setTimeout(() => {
                setShowContent(true);
            }, 300);
        }
    };

    const closeMenu = () => {
        setIsClosing(true);
        setShowContent(false);

        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 500);
    };

    const shouldHideLogo = isScrollingDown && !isMenuOpen;

    const logoShouldBeLight = useLightLogo && !isMenuOpen;
    const logoSrc = logoShouldBeLight
        ? "/Images/Logo/LogoBlanco2.png"
        : "/Images/Logo/LogoAzul2.png";

    const hamburgerShouldBeLight = useLightHamburger && !isMenuOpen;
    const shoppingBasketShouldBeLight = logoShouldBeLight || hamburgerShouldBeLight;

    return (
        <>
            <div className="header-phone">
                <Link
                    to={getRoute('home')}
                    className={`header-phone-logo ${shouldHideLogo ? 'hidden-logo' : ''}`}
                    onClick={closeMenu}
                >
                    <img src={logoSrc} alt="Fundación Azar" />
                </Link>

                <ShoppingBasket
                    shouldUseLightColor={shoppingBasketShouldBeLight}
                />

                <button
                    className={`menu-toggle-phone ${isMenuOpen ? 'open' : ''} ${hamburgerShouldBeLight ? 'light' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className={`menu-phone-overlay ${isClosing ? 'slide-up' : 'slide-down'}`}>
                    {showContent && (
                        <>
                            <NavigationPhone
                                closeMenu={closeMenu}
                                isClosing={isClosing}
                            />
                            <LangPhone
                                closeMenu={closeMenu}
                                isClosing={isClosing}
                            />
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default HeaderPhone;