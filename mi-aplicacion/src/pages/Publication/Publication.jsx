import { useParams } from 'react-router-dom';
import { mockPublicationsData } from '../../utils/Data/PublicationsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverPublication from './sections/CoverPublication/CoverPublication';
import Details from './sections/Details/Details';
import './Publication.css';

function Publication() {
    const { id } = useParams();
    const { t } = useLanguage();
    const localizedPublications = useLocalizedData(mockPublicationsData);
    
    const publication = localizedPublications.find(pub => pub.id === id);

    if (!publication) {
        return (
            <div className="publication-page">
                <BackButton variant="floating" />
                <h1>{t('publicationNotFound') || 'Publicación no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="publication-page">
            <BackButton variant="floating" />
            <CoverPublication publication={publication} />
            <Details publication={publication}/>
        </div>
    );
}

export default Publication;