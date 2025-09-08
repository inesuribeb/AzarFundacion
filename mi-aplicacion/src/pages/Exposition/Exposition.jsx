import { useParams } from 'react-router-dom';
import { mockExhibitionsData } from '../../utils/Data/ExhibitionsData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMobile } from '../../components/Hooks/useMobile';
import ExpoCover2 from './sections/ExpoCover/ExpoCover2';
import ExpoDetails from './sections/ExpoDetails/ExpoDetails';
import ExpoPresentations from './sections/ExpoPresentations/ExpoPresentations';
import ExpoPresPhone from './sections/ExpoPresentations/ExpoPresPhone';
import ExpoPreSale from './sections/ExpoPreSale/ExpoPreSale';
import PreText from './sections/ExpoGallery/PreText';
import ExpoGallery from './sections/ExpoGallery/ExpoGallery';
import BackButton from '../../components/Button/BackButton';

function Exposition() {
    const { id } = useParams();
    const { t, currentLanguage } = useLanguage();
    const localizedExhibitions = useLocalizedData(mockExhibitionsData);
    const isMobile = useMobile();
    const exhibition = localizedExhibitions.find(expo => expo.id === id);

    if (!exhibition) {
        return <h1>{t('exhibitionNotFound') || 'Exposición no encontrada'}</h1>;
    }

    return (
        <div className="exposition-page">
            {/* <h1>{exhibition.title}</h1>
            <p>{exhibition.description}</p> */}

            <ExpoCover2
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
                lightHeader={{ logo: true, hamburger: true }}
            />
            <ExpoDetails
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            />
            {isMobile ? (
                <ExpoPresPhone
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            />
            ) : (
                <ExpoPresentations
                    exhibition={exhibition}
                    t={t}
                    currentLanguage={currentLanguage}
                />
            )}
            {/* <ExpoPresentations
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            /> */}
            <ExpoPreSale
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            />
            <PreText
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            />
            <ExpoGallery
                exhibition={exhibition}
                t={t}
                currentLanguage={currentLanguage}
            />
        </div>
    );
}

export default Exposition;