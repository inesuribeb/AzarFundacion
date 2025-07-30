// hooks/useLocalizedData.js
import { useLanguage } from "../../contexts/LanguageContext"

export const useLocalizedData = (data) => {
    const { language } = useLanguage()

    return data.map(item => {
        const localizedItem = { ...item }
        
        // Localizar campos que son objetos multiidioma
        Object.keys(item).forEach(key => {
            const value = item[key]
            
            // ✅ Verificar si es un objeto de traducción válido
            if (value && 
                typeof value === 'object' && 
                !Array.isArray(value) && 
                typeof value !== 'function' && // ✅ Excluir funciones
                value.hasOwnProperty('es') &&   // ✅ Debe tener idiomas
                value.hasOwnProperty('en') && 
                value.hasOwnProperty('pt') &&
                value[language]) {               // ✅ Y el idioma actual
                
                localizedItem[key] = value[language]
            }
        })
        
        return localizedItem
    })
}