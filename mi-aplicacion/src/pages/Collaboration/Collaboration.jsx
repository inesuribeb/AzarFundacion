import { useParams } from 'react-router-dom';
import { mockCollabsData } from '../../utils/Data/CollabsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverCollab from './sections/CoverCollab/CoverColab';
import DetailsColab from './sections/Details/DetailsColab';
import GalleryColab from './sections/GalleryColab/GalleryColab';
import './Collaboration.css';

function Collaboration() {
    const { id } = useParams();
    const { t, currentLanguage, language } = useLanguage();
    const localizedCollaborations = useLocalizedData(mockCollabsData);
    
    const collaboration = localizedCollaborations.find(collab => collab.id === id);

    if (!collaboration) {
        return (
            <div className="collaboration-page">
                <BackButton variant="floating" />
                <h1>{t('collaborationNotFound') || 'Colaboración no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="collaboration-page">
            <BackButton variant="floating" />
            
            <CoverCollab collaboration={collaboration} t={t} currentLanguage={currentLanguage}/>
            <DetailsColab collaboration={collaboration} t={t} currentLanguage={currentLanguage}/>
            <GalleryColab collaboration={collaboration} t={t} currentLanguage={currentLanguage}/>

        </div>
    );
}

export default Collaboration;