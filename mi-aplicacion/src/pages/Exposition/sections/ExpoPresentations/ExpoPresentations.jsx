import { useState } from 'react';
// import { useLanguage } from '../../contexts/LanguageContext';
import { useLanguage } from '../../../../contexts/LanguageContext';
import Texts from '../../../../components/Texts/Texts'
import './ExpoPresentations.css';

function ExpoPresentations({ t, exhibition }) {
    const { language } = useLanguage();
    const [selectedPresentationId, setSelectedPresentationId] = useState(1);
    
    if (!exhibition || !exhibition.presentations) return null;
    
    const selectedPresentation = exhibition.presentations.find(
        presentation => presentation.id === selectedPresentationId
    );
    
    const handleArtistClick = (presentationId) => {
        setSelectedPresentationId(presentationId);
    };
    
    return (
        <section className='expo-presentations'>
            <div className='artist-names'>
                {exhibition.presentations.map((presentation) => (
                    <button
                        key={presentation.id}
                        className={`artist-name ${selectedPresentationId === presentation.id ? 'active' : ''}`}
                        onClick={() => handleArtistClick(presentation.id)}
                    >
                        {presentation.artist}
                    </button>
                ))}
            </div>
            
            {selectedPresentation && (
                <div className='presentation-info'>
                    <div className='presentation-title-and-text'>
                        <h2 
                            className='presentation-title'
                            dangerouslySetInnerHTML={{ 
                                __html: selectedPresentation.title[language] || selectedPresentation.title.es
                            }}
                        />
                        {/* <div 
                            className='presentation-text'
                            dangerouslySetInnerHTML={{ 
                                __html: selectedPresentation.text[language] || selectedPresentation.text.es
                            }}
                        /> */}
                        <Texts
                        size="medium"
                        className='presentation-text'
                        dangerouslySetInnerHTML={{ __html: selectedPresentation.text[language] || selectedPresentation.text.es }}
                    />
                    </div>
                    
                    <div className='presentation-images'>
                        {selectedPresentation.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${selectedPresentation.artist} - Image ${index + 1}`}
                                className='presentation-image'
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default ExpoPresentations;