// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import { useMobile } from '../../components/Hooks/useMobile';
// import { useLocalizedData } from '../../components/Hooks/Hooks';
// import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
// import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
// import { mockPublicationsData } from '../../utils/Data/PublicationsData';
// import { mockCollabsData } from '../../utils/Data/CollabsData';
// import MiniBlue from '../../components/Titles/MiniBlue/MiniBlue';
// import TabMenu from '../../components/TabMenu/TabMenu';
// import TabMenuPhone from '../../components/TabMenu/TabMenuPhone';
// import Grid from '../../components/Grid/Grid';
// import './Archive.css';

// function Archive() {
//     const { t, getRoute } = useLanguage();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState('exhibitions');
//     const isMobile = useMobile();

//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const tabParam = searchParams.get('tab');

//         const validTabs = ['exhibitions', 'collectiveArtPieces', 'publications', 'collaborations'];
//         if (tabParam && validTabs.includes(tabParam)) {
//             setActiveTab(tabParam);
//         }
//     }, [location.search]);

//     const localizedExhibitions = useLocalizedData(mockExhibitionsData);
//     const localizedArtPieces = useLocalizedData(mockArtPiecesData);
//     const localizedPublications = useLocalizedData(mockPublicationsData);
//     const localizedCollaborations = useLocalizedData(mockCollabsData);


//     const createNavigateHandler = (id, type) => {
//         return () => {
//             const currentPath = window.location.pathname;
//             let basePath = '';

//             if (currentPath.startsWith('/pt/')) {
//                 if (type === 'exhibitions') basePath = '/pt/exposicao/';
//                 else if (type === 'collectiveArtPieces') basePath = '/pt/obra-coletiva/';
//                 else if (type === 'publications') basePath = '/pt/publicacao/';
//                 else if (type === 'collaborations') basePath = '/pt/colaboracao/'; // ← Ruta PT
//             } else if (currentPath.includes('/exhibition/') || currentPath.includes('/archive')) {
//                 if (type === 'exhibitions') basePath = '/exhibition/';
//                 else if (type === 'collectiveArtPieces') basePath = '/collective-art-piece/';
//                 else if (type === 'publications') basePath = '/publication/';
//                 else if (type === 'collaborations') basePath = '/collaboration/'; // ← Ruta EN
//             } else {
//                 if (type === 'exhibitions') basePath = '/exposicion/';
//                 else if (type === 'collectiveArtPieces') basePath = '/obra-colectiva/';
//                 else if (type === 'publications') basePath = '/publicacion/';
//                 else if (type === 'collaborations') basePath = '/colaboracion/'; // ← Ruta ES
//             }

//             navigate(`${basePath}${id}`);
//         };
//     };

//     const getCurrentData = () => {
//         let data, type;

//         switch (activeTab) {
//             case 'exhibitions':
//                 data = localizedExhibitions;
//                 type = 'exhibitions';
//                 break;
//             case 'collectiveArtPieces':
//                 data = localizedArtPieces;
//                 type = 'collectiveArtPieces';
//                 break;
//             case 'publications':
//                 data = localizedPublications;
//                 type = 'publications';
//                 break;
//             case 'collaborations':
//                 data = localizedCollaborations;
//                 type = 'collaborations';
//                 break;
//             default:
//                 data = localizedExhibitions;
//                 type = 'exhibitions';
//         }

//         return data.map(item => ({
//             ...item,
//             onClick: createNavigateHandler(item.id, type)
//         }));
//     };


//     const handleTabChange = (tabId) => {
//         setActiveTab(tabId);

//         const currentRoute = getRoute('archive');
//         const newUrl = tabId === 'exhibitions'
//             ? currentRoute
//             : `${currentRoute}?tab=${tabId}`;

//         navigate(newUrl, { replace: true });
//     };

//     return (
//         <div className='archive-container'>
//             <div className='filter-archive'>
//                 <MiniBlue className='azar-archive'>{t('azarArchive')}</MiniBlue>
//                 {isMobile ? (
//                     <TabMenuPhone
//                         t={t}
//                         onTabChange={handleTabChange}
//                         activeTab={activeTab}
//                         lightHeader={{ hamburger: true, logo: true }}
//                     />
//                 ) : (
//                     <TabMenu
//                         t={t}
//                         onTabChange={handleTabChange}
//                         activeTab={activeTab}
//                     />
//                 )}
//             </div>

//             <div className='render-especific-grid' key={activeTab}>
//                 <Grid
//                     cards={getCurrentData()}
//                     className={`archive-grid ${activeTab}-grid`}
//                     cardType={activeTab === 'publications' ? 'publications' : activeTab === 'collectiveArtPieces' ? 'artpieces' : 'generic'}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Archive;

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import { useMobile } from '../../components/Hooks/useMobile';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import { mockCollabsData } from '../../utils/Data/CollabsData';
import MiniBlue from '../../components/Titles/MiniBlue/MiniBlue';
import TabMenu from '../../components/TabMenu/TabMenu';
import TabMenuPhone from '../../components/TabMenu/TabMenuPhone';
import Grid from '../../components/Grid/Grid';
import './Archive.css';

function Archive() {
    const { t, getRoute } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');
    const isMobile = useMobile();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tabParam = searchParams.get('tab');

        const validTabs = ['all', 'exhibitions', 'collectiveArtPieces', 'publications', 'collaborations'];
        if (tabParam && validTabs.includes(tabParam)) {
            setActiveTab(tabParam);
        } else if (!tabParam) {
            // Si no hay parámetro tab, por defecto es 'all'
            setActiveTab('all');
        }
    }, [location.search]);

    const localizedExhibitions = useLocalizedData(mockExhibitionsData);
    const localizedArtPieces = useLocalizedData(mockArtPiecesData);
    const localizedPublications = useLocalizedData(mockPublicationsData);
    const localizedCollaborations = useLocalizedData(mockCollabsData);

    const createNavigateHandler = (id, type) => {
        return () => {
            const currentPath = window.location.pathname;
            let basePath = '';

            if (currentPath.startsWith('/pt/')) {
                if (type === 'exhibitions') basePath = '/pt/exposicao/';
                else if (type === 'collectiveArtPieces') basePath = '/pt/obra-coletiva/';
                else if (type === 'publications') basePath = '/pt/publicacao/';
                else if (type === 'collaborations') basePath = '/pt/colaboracao/';
            } else if (currentPath.includes('/exhibition/') || currentPath.includes('/archive')) {
                if (type === 'exhibitions') basePath = '/exhibition/';
                else if (type === 'collectiveArtPieces') basePath = '/collective-art-piece/';
                else if (type === 'publications') basePath = '/publication/';
                else if (type === 'collaborations') basePath = '/collaboration/';
            } else {
                if (type === 'exhibitions') basePath = '/exposicion/';
                else if (type === 'collectiveArtPieces') basePath = '/obra-colectiva/';
                else if (type === 'publications') basePath = '/publicacion/';
                else if (type === 'collaborations') basePath = '/colaboracion/';
            }

            navigate(`${basePath}${id}`);
        };
    };

    const getCurrentData = () => {
        let data, type;

        switch (activeTab) {
            case 'all':
                // Combinar todos los datos con sus respectivos tipos
                const allExhibitions = localizedExhibitions.map(item => ({
                    ...item,
                    dataType: 'exhibitions',
                    category: t('exhibitions'), // ← Traducido
                    showCategory: true
                }));
                const allArtPieces = localizedArtPieces.map(item => ({
                    ...item,
                    dataType: 'collectiveArtPieces',
                    category: t('collectiveArtPieces'),
                    showCategory: true
                }));
                const allPublications = localizedPublications.map(item => ({
                    ...item,
                    dataType: 'publications',
                    category: t('publications'),
                    showCategory: true
                }));
                const allCollaborations = localizedCollaborations.map(item => ({
                    ...item,
                    dataType: 'collaborations',
                    category: t('collaborations'),
                    showCategory: true
                }));

                data = [...allExhibitions, ...allArtPieces, ...allPublications, ...allCollaborations];

                // Opcional: ordenar por año si existe, o por algún otro criterio
                data.sort((a, b) => {
                    if (a.year && b.year) {
                        return b.year - a.year; // Más reciente primero
                    }
                    return 0;
                });

                // Crear handlers individuales para cada item basado en su tipo
                return data.map(item => ({
                    ...item,
                    onClick: createNavigateHandler(item.id, item.dataType),
                    // showCategory: false
                }));

            case 'exhibitions':
                data = localizedExhibitions;
                type = 'exhibitions';
                break;
            case 'collectiveArtPieces':
                data = localizedArtPieces;
                type = 'collectiveArtPieces';
                break;
            case 'publications':
                data = localizedPublications;
                type = 'publications';
                break;
            case 'collaborations':
                data = localizedCollaborations;
                type = 'collaborations';
                break;
            default:
                data = localizedExhibitions;
                type = 'exhibitions';
        }

        // Para tabs específicos (no 'all')
        return data.map(item => ({
            ...item,
            onClick: createNavigateHandler(item.id, type)
        }));
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        const currentRoute = getRoute('archive');
        const newUrl = tabId === 'all'
            ? currentRoute // Sin parámetros para 'all'
            : `${currentRoute}?tab=${tabId}`;

        navigate(newUrl, { replace: true });
    };

    const getCardType = () => {
        if (activeTab === 'all') {
            return 'generic';
        } else if (activeTab === 'publications') {
            return 'publications';
        } else if (activeTab === 'collectiveArtPieces') {
            return 'artpieces';
        } else {
            return 'generic';
        }
    };

    return (
        <div className='archive-container'>
            <div className='filter-archive'>
                <MiniBlue className='azar-archive'>{t('azarArchive')}</MiniBlue>
                {/* <MiniBlue className='azar-archive'>{t('azarArchive')}</MiniBlue> */}
                {/* <span className='hamburger-icon'>▼</span> */}
                {isMobile ? (
                    <TabMenuPhone
                        t={t}
                        onTabChange={handleTabChange}
                        activeTab={activeTab}
                        lightHeader={{ hamburger: true, logo: true }}
                    />
                ) : (
                    <TabMenu
                        t={t}
                        onTabChange={handleTabChange}
                        activeTab={activeTab}
                    />
                )}
            </div>

            <div className='render-especific-grid' key={activeTab}>
                <Grid
                    cards={getCurrentData()}
                    className={`archive-grid ${activeTab}-grid`}
                    cardType={getCardType()}
                />
            </div>
        </div>
    );
}

export default Archive;