// import { Outlet, useLocation} from "react-router-dom";
// import { useEffect } from "react";
// import { LanguageProvider } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import { ResidenciesProvider } from "../contexts/ResidenciesContext";
// import { useLanguage } from "../contexts/LanguageContext";
// import { useResidencies } from "../contexts/ResidenciesContext";
// import Header from '../components/Header/Header';
// import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";
// import './Root.css'

// function AppContent() {
//   const location = useLocation();
//   const { t } = useLanguage();
//   const { activeSection, setActiveSection } = useResidencies();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);
  
//   const isResidenciesPage = () => {
//     const residenciesRoutes = [
//       '/programa-residencias',    
//       '/residencies-program',     
//       '/pt/programa-residencias'  
//     ];
//     return residenciesRoutes.some(route => location.pathname.includes(route));
//   };
  
//   const showBottomNavigation = isResidenciesPage();

//   return (
//       <div className="app">
//           <Header />
//           <main className="outlet-desktop" key={location.pathname}>
//               <Outlet />
//           </main>
//           {showBottomNavigation && (
//               <BottomNavigation 
//                   t={t} 
//                   activeSection={activeSection}
//                   onNavigate={setActiveSection}
//               />
//           )}
//       </div>
//   );
// }

// function Root() {
//   return (
//       <LanguageProvider>
//           <HeaderProvider>
//               <ResidenciesProvider>
//                   <AppContent />
//               </ResidenciesProvider>
//           </HeaderProvider>
//       </LanguageProvider>
//   );
// }

// export default Root;

import { Outlet, useLocation} from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import { ResidenciesProvider } from "../contexts/ResidenciesContext";
import { CartProvider } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useResidencies } from "../contexts/ResidenciesContext";
import Header from '../components/Header/Header';
import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";
import './Root.css'

function AppContent() {
  const location = useLocation();
  const { t } = useLanguage();
  const { activeSection, setActiveSection } = useResidencies();
  
  // console.log('🔑 Current pathname:', location.pathname);

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

  return (
      <div className="app">
          <Header />
          <main className="outlet-desktop" key={location.pathname}>
              <Outlet />
          </main>
          {showBottomNavigation && (
              <BottomNavigation 
                  t={t} 
                  activeSection={activeSection}
                  onNavigate={setActiveSection}
              />
          )}
      </div>
  );
}

function Root() {
  return (
      <LanguageProvider>
          <HeaderProvider>
              <ResidenciesProvider>
                  <CartProvider>
                      <AppContent />
                  </CartProvider>
              </ResidenciesProvider>
          </HeaderProvider>
      </LanguageProvider>
  );
}

export default Root;