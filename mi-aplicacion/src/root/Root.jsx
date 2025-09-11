// import { Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { LanguageProvider } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import { ResidenciesProvider } from "../contexts/ResidenciesContext";
// import { CartProvider } from "../contexts/CartContext";
// import { CartModalProvider } from "../components/GlobalCartModal/GlobalCartModal";
// import { useLanguage } from "../contexts/LanguageContext";
// import { useResidencies } from "../contexts/ResidenciesContext";
// import { useMobile } from "../components/Hooks/useMobile";
// import { PresentationModalProvider } from "../contexts/PresentationModalContext";
// import Header from '../components/Header/Header';
// import HeaderPhone from "../components/Header/HeaderPhone";
// import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";
// import BottomNavPhone from "../pages/ResidenciesProgram/components/BottomNavPhone";
// import Footer from "../components/Footer/Footer";
// import './Root.css'

// function AppContent() {
//     const location = useLocation();
//     const { t } = useLanguage();
//     const { activeSection, setActiveSection } = useResidencies();
//     const isMobile = useMobile();


//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     const isResidenciesPage = () => {
//         const residenciesRoutes = [
//             '/programa-residencias',
//             '/residencies-program',
//             '/pt/programa-residencias'
//         ];
//         return residenciesRoutes.some(route => location.pathname.includes(route));
//     };

//     const showBottomNavigation = isResidenciesPage();

//     return (
//         <div className="app">
//             {isMobile ? <HeaderPhone /> : <Header />}

//             <main className="outlet-desktop" key={location.pathname}>
//                 <Outlet />
//             </main>

//             {showBottomNavigation && (
//                 isMobile ? (
//                     <BottomNavPhone
//                         t={t}
//                         activeSection={activeSection}
//                         onNavigate={setActiveSection}
//                     />
//                 ) : (
//                     <BottomNavigation
//                         t={t}
//                         activeSection={activeSection}
//                         onNavigate={setActiveSection}
//                     />
//                 )
//             )}

//             <Footer />
//         </div>
//     );
// }

// function Root() {
//     return (
//         <LanguageProvider>
//             <HeaderProvider>
//                 <ResidenciesProvider>
//                     <CartProvider>
//                         <CartModalProvider>
//                             <PresentationModalProvider>
//                                 <AppContent />
//                             </PresentationModalProvider>
//                         </CartModalProvider>
//                     </CartProvider>
//                 </ResidenciesProvider>
//             </HeaderProvider>
//         </LanguageProvider>
//     );
// }

// export default Root;

import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import { ResidenciesProvider } from "../contexts/ResidenciesContext";
import { CartProvider } from "../contexts/CartContext";
import { CartModalProvider } from "../components/GlobalCartModal/GlobalCartModal";
import { useLanguage } from "../contexts/LanguageContext";
import { useResidencies } from "../contexts/ResidenciesContext";
import { useMobile } from "../components/Hooks/useMobile";
import { PresentationModalProvider } from "../contexts/PresentationModalContext";
import Header from '../components/Header/Header';
import HeaderPhone from "../components/Header/HeaderPhone";
import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";
import BottomNavPhone from "../pages/ResidenciesProgram/components/BottomNavPhone";
import Footer from "../components/Footer/Footer";
import './Root.css'

function AppContent() {
    const location = useLocation();
    const { t } = useLanguage();
    const { activeSection, setActiveSection } = useResidencies();
    const isMobile = useMobile();

    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isResidenciesPage = () => {
        const residenciesRoutes = [
            '/programa-residencias',
            '/residencies-program',
            '/pt/programa-residencias'
        ];
        return residenciesRoutes.some(route => location.pathname.includes(route));
    };

    const showBottomNavigation = isResidenciesPage();

    // useEffect(() => {
    //     if (!showBottomNavigation) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsFooterVisible(entry.isIntersecting);
    //         },
    //         {
    //             threshold: 0,
    //             rootMargin: '0px 0px -50px 0px' 
    //         }
    //     );

    //     const footer = document.querySelector('.footer-content');
    //     if (footer) {
    //         observer.observe(footer);
    //     }

    //     return () => {
    //         if (footer) observer.unobserve(footer);
    //     };
    // }, [showBottomNavigation, location.pathname]);

    return (
        <div className="app">
            {isMobile ? <HeaderPhone /> : <Header />}

            <main className="outlet-desktop" key={location.pathname}>
                <Outlet />
            </main>

            {/* {showBottomNavigation && (
                isMobile ? (
                    <BottomNavPhone
                        t={t}
                        activeSection={activeSection}
                        onNavigate={setActiveSection}
                    />
                ) : (
                    <BottomNavigation
                        t={t}
                        activeSection={activeSection}
                        onNavigate={setActiveSection}
                    />
                )
            )} */}
            

            <Footer />
        </div>
    );
}

function Root() {
    return (
        <LanguageProvider>
            <HeaderProvider>
                <ResidenciesProvider>
                    <CartProvider>
                        <CartModalProvider>
                            <PresentationModalProvider>
                                <AppContent />
                            </PresentationModalProvider>
                        </CartModalProvider>
                    </CartProvider>
                </ResidenciesProvider>
            </HeaderProvider>
        </LanguageProvider>
    );
}

export default Root;