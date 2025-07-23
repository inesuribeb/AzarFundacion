import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import Header from '../components/Header/Header';

function Root () {
    return (
        <LanguageProvider>
          <HeaderProvider>
          <div className="app">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
          </HeaderProvider>
        </LanguageProvider>
      );
}

export default Root;