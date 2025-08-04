import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import MiniBlue from '../../components/Titles/MiniBlue/MiniBlue';
import TabMenu from '../../components/TabMenu/TabMenu';
import Grid from '../../components/Grid/Grid';
import './Archive.css';

function Archive() {
    const { t, getRoute } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('exhibitions');

    // ✅ Leer query parameter al cargar
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tabParam = searchParams.get('tab');

        // Validar que el tab existe
        const validTabs = ['exhibitions', 'collectiveArtPieces', 'publications', 'collaborations'];
        if (tabParam && validTabs.includes(tabParam)) {
            setActiveTab(tabParam);
        }
    }, [location.search]);

    // Localizar todos los datos
    const localizedExhibitions = useLocalizedData(mockExhibitionsData);
    const localizedArtPieces = useLocalizedData(mockArtPiecesData);
    const localizedPublications = useLocalizedData(mockPublicationsData);

    // Función para obtener los datos según la tab activa
    const getCurrentData = () => {
        switch (activeTab) {
            case 'exhibitions':
                return localizedExhibitions;
            case 'collectiveArtPieces':
                return localizedArtPieces;
            case 'publications':
                return localizedPublications;
            case 'collaborations':
                return []; // Por ahora vacío, puedes añadir datos de colaboraciones después
            default:
                return localizedExhibitions;
        }
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        // ✅ Actualizar URL con query parameter
        const currentRoute = getRoute('archive');
        const newUrl = tabId === 'exhibitions'
            ? currentRoute  // Sin query param para el tab por defecto
            : `${currentRoute}?tab=${tabId}`;

        navigate(newUrl, { replace: true }); // replace: true evita crear nueva entrada en historial
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

            <div className='render-especific-grid'>
                {/* <Grid 
                    cards={getCurrentData()} 
                    className={`archive-grid ${activeTab}-grid`}
                /> */}
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