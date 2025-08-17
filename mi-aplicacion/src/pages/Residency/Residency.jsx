import { useParams } from 'react-router-dom';
import { mockResidencias } from '../../utils/Data/ResidenciesData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
import BackButton from '../../components/Button/BackButton';
import CoverResidency from './sections/CoverResidency/CoverResidency';
import DescriptionResidency from './sections/DescriptionResidency/DescriptionResidency';
import Jury from './sections/Jury/Jury';
import Participants from './sections/Participants/Participants';
import PublicationMention from './sections/PublicationMention/PublicationMention';
import ArtPieceMention from './sections/ArtPieceMention/ArtPieceMention';
import ExhibitionMention from './sections/ExhibitionMention/ExhibitionMention';
import './Residency.css';

function Residency() {
    const { id } = useParams();
    const { t } = useLanguage();
    const localizedResidencias = useLocalizedData(mockResidencias);
    
    // Buscar la residencia por ID
    const residencia = localizedResidencias.find(res => res.id === id);

    if (!residencia) {
        return (
            <div className="residency-page">
                <BackButton variant="floating" />
                <h1>{t('residencyNotFound') || 'Residencia no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="residency-page">
            {/* <BackButton variant="floating" /> */}
            
            <CoverResidency residencia={residencia} />
            <DescriptionResidency residencia={residencia} />
            <Jury residencia={residencia} />
            <Participants residencia={residencia} />
            <PublicationMention residencia={residencia} />
            <ArtPieceMention residencia={residencia} />
            <ExhibitionMention residencia={residencia} />
            
            {/* Aquí irán las siguientes secciones */}
            {/* <IntroResidency residencia={residencia} /> */}
            {/* <JuradoSection residencia={residencia} /> */}
            {/* <ParticipantsSection residencia={residencia} /> */}
            {/* <GallerySection residencia={residencia} /> */}
        </div>
    );
}

export default Residency;