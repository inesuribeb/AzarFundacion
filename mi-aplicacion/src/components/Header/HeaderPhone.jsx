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
//                     className={`header-phone-logo ? 'hidden-logo' : ''}`}

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
import './HeaderPhone.css';

function HeaderPhone() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { getRoute } = useLanguage();
    const { useLightLogo, useLightHamburger } = useHeader(); // Sin hideTitle

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
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Solo usar la lógica del scroll
    const shouldHideLogo = isScrollingDown && !isMenuOpen;
    
    const logoShouldBeLight = useLightLogo && !isMenuOpen;
    const logoSrc = logoShouldBeLight
        ? "/Images/Logo/LogoBlanco2.png"
        : "/Images/Logo/LogoAzul2.png";

    const hamburgerShouldBeLight = useLightHamburger && !isMenuOpen;

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
                <div className="menu-phone-overlay">
                    <NavigationPhone closeMenu={toggleMenu} />
                    <LangPhone closeMenu={toggleMenu} />
                </div>
            )}
        </>
    );
}

export default HeaderPhone;