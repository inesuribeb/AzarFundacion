import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [hideTitle, setHideTitle] = useState(false);
    
    return (
        <HeaderContext.Provider value={{ hideTitle, setHideTitle }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeader = () => useContext(HeaderContext);