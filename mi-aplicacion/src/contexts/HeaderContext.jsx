import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [hideTitle, setHideTitle] = useState(false);
    const [useLightLogo, setUseLightLogo] = useState(false);
    const [useLightHamburger, setUseLightHamburger] = useState(false);
    
    return (
        <HeaderContext.Provider value={{ 
            hideTitle, 
            setHideTitle,
            useLightLogo,
            setUseLightLogo,
            useLightHamburger,
            setUseLightHamburger
        }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeader = () => useContext(HeaderContext);