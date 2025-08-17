import { useParams } from 'react-router-dom';
import { mockResidencias } from '../../utils/Data/ResidenciesData';
import { useLocalizedData } from '../../components/Hooks/Hooks';
import { useLanguage } from '../../contexts/LanguageContext';
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
                <h1>{t('residencyNotFound') || 'Residencia no encontrada'}</h1>
            </div>
        );
    }

    return (
        <div className="residency-page">
            <div className="residency-hero">
                <img 
                    src={residencia.image} 
                    alt={residencia.title}
                    className="residency-hero-image"
                />
            </div>
            
            <div className="residency-content">
                <div className="residency-header">
                    <h1 className="residency-title">{residencia.title}</h1>
                    <p className="residency-subtitle">{residencia.subtitle}</p>
                </div>
                
                <div className="residency-info">
                    <div className="residency-details">
                        <h3>{t('location') || 'Ubicación'}</h3>
                        <p>{residencia.location}</p>
                        
                        <h3>{t('description') || 'Descripción'}</h3>
                        <p>{residencia.description}</p>
                        
                        <h3>{t('year') || 'Año'}</h3>
                        <p>{residencia.year}</p>
                    </div>
                    
                    {/* Aquí puedes agregar más secciones como galería, participantes, etc. */}
                </div>
            </div>
        </div>
    );
}

export default Residency;