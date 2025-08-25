import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import { mockCollabsData } from '../../utils/Data/CollabsData';
import MiniBlue from '../../components/Titles/MiniBlue/MiniBlue';
import TabMenu from '../../components/TabMenu/TabMenu';
import Grid from '../../components/Grid/Grid';
import './Archive.css';

function Archive() {
    const { t, getRoute } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('exhibitions');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tabParam = searchParams.get('tab');

        const validTabs = ['exhibitions', 'collectiveArtPieces', 'publications', 'collaborations'];
        if (tabParam && validTabs.includes(tabParam)) {
            setActiveTab(tabParam);
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

            // Detectar idioma y tipo de contenido
            // if (currentPath.startsWith('/pt/')) {
            //     if (type === 'exhibitions') basePath = '/pt/exposicao/';
            //     else if (type === 'collectiveArtPieces') basePath = '/pt/obra-coletiva/';
            //     else if (type === 'publications') basePath = '/pt/publicacao/';
            // } else if (currentPath.includes('/exhibition/') || currentPath.includes('/archive')) {
            //     if (type === 'exhibitions') basePath = '/exhibition/';
            //     else if (type === 'collectiveArtPieces') basePath = '/collective-art-piece/';
            //     else if (type === 'publications') basePath = '/publication/';
            // } else {
            //     if (type === 'exhibitions') basePath = '/exposicion/';
            //     else if (type === 'collectiveArtPieces') basePath = '/obra-colectiva/';
            //     else if (type === 'publications') basePath = '/publicacion/';
            // }

            if (currentPath.startsWith('/pt/')) {
                if (type === 'exhibitions') basePath = '/pt/exposicao/';
                else if (type === 'collectiveArtPieces') basePath = '/pt/obra-coletiva/';
                else if (type === 'publications') basePath = '/pt/publicacao/';
                else if (type === 'collaborations') basePath = '/pt/colaboracao/'; // ← Ruta PT
            } else if (currentPath.includes('/exhibition/') || currentPath.includes('/archive')) {
                if (type === 'exhibitions') basePath = '/exhibition/';
                else if (type === 'collectiveArtPieces') basePath = '/collective-art-piece/';
                else if (type === 'publications') basePath = '/publication/';
                else if (type === 'collaborations') basePath = '/collaboration/'; // ← Ruta EN
            } else {
                if (type === 'exhibitions') basePath = '/exposicion/';
                else if (type === 'collectiveArtPieces') basePath = '/obra-colectiva/';
                else if (type === 'publications') basePath = '/publicacion/';
                else if (type === 'collaborations') basePath = '/colaboracion/'; // ← Ruta ES
            }

            navigate(`${basePath}${id}`);
        };
    };

    const getCurrentData = () => {
        let data, type;

        switch (activeTab) {
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

        // Agregar navegación a cada item
        return data.map(item => ({
            ...item,
            onClick: createNavigateHandler(item.id, type)
        }));
    };


    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        const currentRoute = getRoute('archive');
        const newUrl = tabId === 'exhibitions'
            ? currentRoute
            : `${currentRoute}?tab=${tabId}`;

        navigate(newUrl, { replace: true });
    };

    return (
        <div className='archive-container'>
            <div className='filter-archive'>
                <MiniBlue className='azar-archive'>{t('azarArchive')}</MiniBlue>
                <TabMenu
                    t={t}
                    onTabChange={handleTabChange}
                    activeTab={activeTab}
                />
            </div>

            <div className='render-especific-grid' key={activeTab}>
                <Grid
                    cards={getCurrentData()}
                    className={`archive-grid ${activeTab}-grid`}
                    cardType={activeTab === 'publications' ? 'publications' : 'generic'} // ✅ Nueva prop
                />
            </div>
        </div>
    );
}

export default Archive;