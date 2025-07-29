// import { Outlet, useLocation} from "react-router-dom";
// import { LanguageProvider } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import { ResidenciesProvider } from "../contexts/ResidenciesContext";
// import { useLanguage } from "../contexts/LanguageContext";
// import { useResidencies } from "../contexts/ResidenciesContext";
// import Header from '../components/Header/Header';
// import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";

// function Root () {
//     return (
//         <LanguageProvider>
//           <HeaderProvider>
//           <div className="app">
//             <Header />
//             <main>
//               <Outlet />
//             </main>
//           </div>
//           </HeaderProvider>
//         </LanguageProvider>
//       );
// }

// export default Root;

import { Outlet, useLocation} from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import { ResidenciesProvider } from "../contexts/ResidenciesContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useResidencies } from "../contexts/ResidenciesContext";
import Header from '../components/Header/Header';
import BottomNavigation from "../pages/ResidenciesProgram/components/BottomNavigation";

// Componente interno que tiene acceso a los contextos
function AppContent() {
  const location = useLocation();
  const { t } = useLanguage();
  const { activeSection, setActiveSection } = useResidencies();
  
  // Mostrar BottomNavigation en todas las rutas de residencias
  const isResidenciesPage = () => {
    const residenciesRoutes = [
      '/programa-residencias',    // Español
      '/residencies-program',     // Inglés
      '/pt/programa-residencias'  // Portugués
    ];
    return residenciesRoutes.some(route => location.pathname.includes(route));
  };
  
  const showBottomNavigation = isResidenciesPage();

  return (
      <div className="app">
          <Header />
          <main>
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

// Componente Root que provee los contextos
function Root() {
  return (
      <LanguageProvider>
          <HeaderProvider>
              <ResidenciesProvider>
                  <AppContent />
              </ResidenciesProvider>
          </HeaderProvider>
      </LanguageProvider>
  );
}

export default Root;