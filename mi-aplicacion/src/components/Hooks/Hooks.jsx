import { useLanguage } from "../../contexts/LanguageContext"

export const useLocalizedData = (data) => {
    const { language } = useLanguage()

    return data.map(item => {
        const localizedItem = { ...item }
        
        Object.keys(item).forEach(key => {
            const value = item[key]
            
            if (value && 
                typeof value === 'object' && 
                !Array.isArray(value) && 
                typeof value !== 'function' && 
                value.hasOwnProperty('es') &&  
                value.hasOwnProperty('en') && 
                value.hasOwnProperty('pt') &&
                value[language]) {             
                
                localizedItem[key] = value[language]
            }
        })
        
        return localizedItem
    })
}