import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { foundationTranslations } from './sections/FoundationContent';
import { residenciesProgramTranslations } from './sections/ResidenciesProgramContent'
import { archiveTranslations } from './sections/ArchiveContent';
import { homeTranslations } from './sections/HomeContent';
import { detailsTranslations } from './sections/DetailsContent';

const translations = {
  es: {
    home: "Inicio",
    foundation: "Fundación Azar",
    residenciesProgram: "Residencias",
    archive: "Actividades",
    residency: "Residencia",
    exposition: "Exposición",
    artPiece: "Obra Colectiva",
    publication: "Publicación",
    shop: "Tienda",
    ...foundationTranslations.es,
    ...residenciesProgramTranslations.es,
    ...archiveTranslations.es,
    ...homeTranslations.es,
    ...detailsTranslations.es,
  },
  en: {
    home: "Home",
    foundation: "Azar Foundation",
    residenciesProgram: "Residencies",
    archive: "Activities",
    residency: "Residency",
    exposition: "Exhibition",
    artPiece: "Collective Art Piece",
    publication: "Publication",
    shop: "Shop",
    ...foundationTranslations.en,
    ...residenciesProgramTranslations.en,
    ...archiveTranslations.en,
    ...homeTranslations.en,
    ...detailsTranslations.en,
  },
  pt: {
    home: "Início",
    foundation: "Fundação Azar",
    residenciesProgram: "Residências",
    archive: "Atividades",
    residency: "Residência",
    exposition: "Exposição",
    artPiece: "Obra Coletiva",
    publication: "Publicação",
    shop: "Loja",
    ...foundationTranslations.pt,
    ...residenciesProgramTranslations.pt,
    ...archiveTranslations.pt,
    ...homeTranslations.pt,
    ...detailsTranslations.pt,
  }
};

const routes = {
  es: {
    home: "/inicio",
    foundation: "/fundacion-azar",
    residenciesProgram: "/programa-residencias",
    archive: "/archivo",
    residency: "/residencia",
    exposition: "/exposicion",
    artPiece: "/obra-colectiva",
    publication: "/publicacion"
  },
  en: {
    home: "/home",
    foundation: "/azar-foundation",
    residenciesProgram: "/residencies-program",
    archive: "/archive",
    residency: "/residency",
    exposition: "/exhibition",
    artPiece: "/collective-art-piece",
    publication: "/publication"
  },
  pt: {
    home: "/pt/inicio",
    foundation: "/pt/azar-fundacao",
    residenciesProgram: "/pt/programa-residencias",
    archive: "/pt/arquivo",
    residency: "/pt/residencia",
    exposition: "/pt/exposicao",
    artPiece: "/pt/obra-coletiva",
    publication: "/pt/publicacao"
  }
};

const routeMap = {
  // Español (rutas por defecto)
  "/inicio": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/fundacion-azar": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/programa-residencias": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/archivo": { es: "/archivo", en: "/archive", pt: "/pt/arquivo" },
  "/residencia": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/exposicion": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/obra-colectiva": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/publicacion": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" },

  // Inglés
  "/home": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/azar-foundation": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/residencies-program": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/archive": { es: "/archivo", en: "/archive", pt: "/pt/arquivo" },
  "/residency": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/exhibition": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/collective-art-piece": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/publication": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" },

  // Portugués
  "/pt/inicio": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/pt/azar-fundacao": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/pt/programa-residencias": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/pt/arquivo": { es: "/archivo", en: "/archive", pt: "/pt/arquivo" },
  "/pt/residencia": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/pt/exposicao": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/pt/obra-coletiva": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/pt/publicacao": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" }
};

const detectLanguageFromPath = (path) => {
  if (path.startsWith('/pt/')) {
    return 'pt';
  }

  const firstSegment = '/' + path.split('/')[1];

  for (const route of Object.values(routes.en)) {
    if (route === firstSegment) {
      return 'en';
    }
  }

  return 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

  const changeLanguage = (newLanguage) => {
    const currentPath = location.pathname;
    let basePath;
    let params = '';

    const pathSegments = currentPath.split('/');
    
    if (currentPath.startsWith('/pt/')) {
      basePath = '/' + pathSegments.slice(0, 3).join('/').substring(1); 
      params = pathSegments.slice(3).join('/'); 
    } else {
      basePath = '/' + pathSegments[1]; 
      params = pathSegments.slice(2).join('/'); 
    }

    let newPath = routeMap[basePath]?.[newLanguage] || routes[newLanguage].home;

    const redirectPath = params ? `${newPath}/${params}` : newPath;

    navigate(redirectPath);
    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getRoute = (routeName, params = {}) => {
    const baseRoute = routes[language][routeName];

    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return routes[language].home;
    }

    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }

    return baseRoute;
  };

  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      getRoute,
      routes,
      availableLanguages: ['es', 'en', 'pt']
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;