import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { mockArtPiecesData } from '../../utils/Data/ArtPiecesData';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import MiniBlue from '../../components/Titles/MiniBlue/MiniBlue';
import TabMenu from '../../components/TabMenu/TabMenu';
import Grid from '../../components/Grid/Grid'
import './Archive.css'

// function Archive() {
//     const { t } = useLanguage();
//     return (
//         <div className='archive-container'>
//             <div className='filter-archive'>
//                 <MiniBlue>{t('azarArchive')}</MiniBlue>
//                 <TabMenu t={t} />
//             </div>

//             <div className='render-especific-grid'>

//             </div>
//         </div>
//     )
// }

// export default Archive;

function Archive() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('exhibitions');

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
    };

    return (
        <div className='archive-container'>
            <div className='filter-archive'>
                <MiniBlue>{t('azarArchive')}</MiniBlue>
                <TabMenu 
                    t={t} 
                    onTabChange={handleTabChange}
                    activeTab={activeTab}
                />
            </div>

            <div className='render-especific-grid'>
                <Grid 
                    cards={getCurrentData()} 
                    className={`archive-grid ${activeTab}-grid`}
                />
            </div>
        </div>
    );
}

export default Archive;