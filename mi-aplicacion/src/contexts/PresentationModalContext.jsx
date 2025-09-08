// contexts/PresentationModalContext.js
import { useState, createContext, useContext } from 'react';
// import PresentationModal from '../components/PresentationModal/PresentationModal';
import PresentationModal from '../pages/Exposition/sections/ExpoPresentations/components/PresentationModal';

const PresentationModalContext = createContext();

export const usePresentationModal = () => {
    const context = useContext(PresentationModalContext);
    if (!context) {
        throw new Error('usePresentationModal must be used within a PresentationModalProvider');
    }
    return context;
};

export const PresentationModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPresentation, setSelectedPresentation] = useState(null);

    const openModal = (presentation) => {
        setSelectedPresentation(presentation);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPresentation(null);
    };

    return (
        <PresentationModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isModalOpen && (
                <PresentationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    presentation={selectedPresentation}
                />
            )}
        </PresentationModalContext.Provider>
    );
};