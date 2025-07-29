import { createContext, useContext, useState } from 'react';

const ResidenciesContext = createContext();

export function ResidenciesProvider({ children }) {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <ResidenciesContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ResidenciesContext.Provider>
    );
}

export function useResidencies() {
    const context = useContext(ResidenciesContext);
    if (!context) {
        throw new Error('useResidencies must be used within ResidenciesProvider');
    }
    return context;
}