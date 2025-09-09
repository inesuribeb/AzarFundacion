import { usePresentationModal } from '../../../../contexts/PresentationModalContext';
import Texts from '../../../../components/Texts/Texts';
import './ExpoPresPhone.css';

function ExpoPresPhone({ t, exhibition }) {
    const { openModal } = usePresentationModal();

    if (!exhibition || !exhibition.presentations) return null;

    return (
        <div className="expo-pres-phone">
            <div className="artist-names-list">
                <Texts
                    size="medium"
                    dangerouslySetInnerHTML={{ __html: t('discoverPresentations') }}
                />
                {exhibition.presentations.map((presentation) => (
                    <button
                        key={presentation.id}
                        className="artist-name-button"
                        onClick={() => openModal(presentation)}
                    >
                        {presentation.artist} 
                        <span className="arrow-icon">→</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ExpoPresPhone;