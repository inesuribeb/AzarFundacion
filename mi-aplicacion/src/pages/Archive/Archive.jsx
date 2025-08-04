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

    const getCurrentData = () => {
        switch (activeTab) {
            case 'exhibitions':
                return localizedExhibitions;
            case 'collectiveArtPieces':
                return localizedArtPieces;
            case 'publications':
                return localizedPublications;
            case 'collaborations':
                return [];
            default:
                return localizedExhibitions;
        }
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