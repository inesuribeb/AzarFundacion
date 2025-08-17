import { useParams } from 'react-router-dom';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';

function Exposition() {
    const { id } = useParams();
    const { t } = useLanguage();
    const localizedExhibitions = useLocalizedData(mockExhibitionsData);
    
    const exhibition = localizedExhibitions.find(expo => expo.id === id);

    if (!exhibition) {
        return <h1>{t('exhibitionNotFound') || 'Exposición no encontrada'}</h1>;
    }

    return (
        <div className="exposition-page">
            <h1>{exhibition.title}</h1>
            <p>{exhibition.description}</p>
            {/* Resto del contenido */}
        </div>
    );
}

export default Exposition;