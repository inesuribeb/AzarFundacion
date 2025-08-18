// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import Navigation from './Navigation/Navigation';
// import LanguageToggle from './LanguageToggle/LanguageToggle'
// import './Header.css'

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isMenuClosing, setIsMenuClosing] = useState(false);
//     const { t, getRoute } = useLanguage();
//     const [shouldUseLightColor, setShouldUseLightColor] = useState(false);
//     const { hideTitle } = useHeader();
//     const [isScrollingDown, setIsScrollingDown] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);

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
//         if (isMenuOpen) {
//             setIsMenuClosing(true);
//             setTimeout(() => {
//                 setIsMenuOpen(false);
//                 setIsMenuClosing(false);
//             }, 750);
//         } else {
//             setIsMenuOpen(true);
//         }
//     };

//     const handleHoverChange = (lightColor) => {
//         setShouldUseLightColor(lightColor);
//     };

//     const shouldHideTitle = (hideTitle && !isMenuOpen) || (isScrollingDown && !isMenuOpen);

//     return (
//         <>
//             <div className="header">
//                 <h1 className={shouldHideTitle ? 'hidden-title' : ''}>
//                     <Link to={getRoute('home')} className="header-home-link">
//                         <span className="fundacion">FUNDACIÓN </span>
//                         <span className="azar">AZAR</span>
//                     </Link>
//                 </h1>

//                 <button
//                     className={`sandwich-toggle ${isMenuOpen ? 'active' : ''} ${shouldUseLightColor ? 'light' : ''}`}
//                     onClick={toggleMenu}
//                     aria-label="Toggle menu"
//                 >
//                     <span className="line"></span>
//                     <span className="line"></span>
//                 </button>
//             </div>

//             {(isMenuOpen || isMenuClosing) && (
//                 <div className={`dropdown-menu ${isMenuClosing ? 'closing' : ''}`}>
//                     <Navigation
//                         closeMenu={toggleMenu}
//                         onHoverChange={handleHoverChange}
//                         isClosing={isMenuClosing}
//                     />
//                     <LanguageToggle />
//                 </div>
//             )}
//         </>
//     )
// }

// export default Header;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import { useCart } from '../../contexts/CartContext';
import Navigation from './Navigation/Navigation';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import ShoppingBasket from './ShoppingBasket/ShoppingBasket';
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);
    const { t, getRoute } = useLanguage();
    const [shouldUseLightColor, setShouldUseLightColor] = useState(false);
    const { hideTitle } = useHeader();
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { cartItems, updateCartItem } = useCart();

    // console.log('🔍 Header cartItems:', cartItems);


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

    const handleHoverChange = (lightColor) => {
        setShouldUseLightColor(lightColor);
    };

    const shouldHideTitle = (hideTitle && !isMenuOpen) || (isScrollingDown && !isMenuOpen);

    return (
        <>
            <div className="header">
                <h1 className={shouldHideTitle ? 'hidden-title' : ''}>
                    <Link to={getRoute('home')} className="header-home-link">
                        <span className="fundacion">FUNDACIÓN </span>
                        <span className="azar">AZAR</span>
                    </Link>
                </h1>

                <div className="header-right">
                    <ShoppingBasket 
                        cartItems={cartItems}
                        onUpdateCart={updateCartItem}
                        shouldUseLightColor={shouldUseLightColor}
                    />
                    <button
                        className={`sandwich-toggle ${isMenuOpen ? 'active' : ''} ${shouldUseLightColor ? 'light' : ''}`}
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
                    <Navigation
                        closeMenu={toggleMenu}
                        onHoverChange={handleHoverChange}
                        isClosing={isMenuClosing}
                    />
                    <LanguageToggle />
                </div>
            )}
        </>
    )
}

export default Header;