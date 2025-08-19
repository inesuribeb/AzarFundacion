// import { useParams, useRef, useState, useEffect } from 'react-router-dom';
// import { mockResidencias } from '../../utils/Data/ResidenciesData';
// import { useLocalizedData } from '../../components/Hooks/Hooks';
// import { useLanguage } from '../../contexts/LanguageContext';
// import BackButton from '../../components/Button/BackButton';
// import CoverResidency from './sections/CoverResidency/CoverResidency';
// import DescriptionResidency from './sections/DescriptionResidency/DescriptionResidency';
// import Jury from './sections/Jury/Jury';
// import Participants from './sections/Participants/Participants';
// import PublicationMention from './sections/PublicationMention/PublicationMention';
// import ArtPieceMention from './sections/ArtPieceMention/ArtPieceMention';
// import ExhibitionMention from './sections/ExhibitionMention/ExhibitionMention';
// import './Residency.css';

// function Residency() {
//     const { id } = useParams();
//     const { t , currentLanguage} = useLanguage();
//     const localizedResidencias = useLocalizedData(mockResidencias);
    
//     const residencia = localizedResidencias.find(res => res.id === id);

//     if (!residencia) {
//         return (
//             <div className="residency-page">
//                 <BackButton variant="floating" />
//                 <h1>{t('residencyNotFound') || 'Residencia no encontrada'}</h1>
//             </div>
//         );
//     }

//     return (
//         <div className="residency-page">
            
//             <CoverResidency residencia={residencia} t={t} currentLanguage={currentLanguage}/>
//             <DescriptionResidency residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            
//             <Participants residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            
//             <ArtPieceMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
//             <PublicationMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
//             <ExhibitionMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            
//         </div>
//     );
// }

// export default Residency;

import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react'; 
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
    const { t, currentLanguage } = useLanguage();
    const localizedResidencias = useLocalizedData(mockResidencias);
    const [isParticipantsActive, setIsParticipantsActive] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false); // ← AQUÍ, no dentro del useEffect
    const participantsRef = useRef(null);
    
    const residencia = localizedResidencias.find(res => res.id === id);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const ratio = entry.intersectionRatio;
                const isFullyVisible = ratio >= 0.95;
                
                // Enganche automático
                if (ratio >= 0.9 && ratio < 0.99 && !isAutoScrolling) {
                    console.log('🧲 Enganche automático activado');
                    setIsAutoScrolling(true);
                    participantsRef.current?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    setTimeout(() => {
                        setIsAutoScrolling(false);
                    }, 1000);
                }
                
                setIsParticipantsActive(isFullyVisible);
                console.log('Participants active:', isFullyVisible, 'ratio:', ratio);
            },
            {
                threshold: [0, 0.5, 0.9, 0.95, 1.0],
                rootMargin: '0px'
            }
        );

        if (participantsRef.current) {
            observer.observe(participantsRef.current);
        }

        return () => {
            if (participantsRef.current) {
                observer.unobserve(participantsRef.current);
            }
        };
    }, [isAutoScrolling]); 

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
            <CoverResidency residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            <DescriptionResidency residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            
            <div ref={participantsRef}>
                <Participants 
                    residencia={residencia} 
                    t={t} 
                    currentLanguage={currentLanguage}
                    isActive={isParticipantsActive}
                />
            </div>
            
            <ArtPieceMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            <PublicationMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
            <ExhibitionMention residencia={residencia} t={t} currentLanguage={currentLanguage}/>
        </div>
    );
}

export default Residency;