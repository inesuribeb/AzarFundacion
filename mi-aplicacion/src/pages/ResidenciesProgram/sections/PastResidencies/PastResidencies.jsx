import { useNavigate } from 'react-router-dom';
import { mockResidencias } from '../../../../utils/Data/ResidenciesData';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Grid from '../../../../components/Grid/Grid';
import './PastResidencies.css'

// function PastResidencies({ t }) {
//     const localizedResidencias = useLocalizedData(mockResidencias)

//     return (
//         <section className='past-residencies-section'>
//             <MediumSans>{t('previousResidencies')}</MediumSans>
//             <Grid cards={localizedResidencias} className="past-residencies-grid" />
//         </section>
//     )
// }

// export default PastResidencies;

function PastResidencies({ t }) {
    const navigate = useNavigate();
    
    const createNavigateHandler = (id) => {
        return () => {
            const currentPath = window.location.pathname;
            let basePath = '';
            
            if (currentPath.startsWith('/pt/')) {
                basePath = '/pt/residencia/';
            } else if (currentPath.includes('/residency/') || currentPath.includes('/residencies-program')) {
                basePath = '/residency/';
            } else {
                basePath = '/residencia/';
            }
            
            navigate(`${basePath}${id}`);
        };
    };

    const residenciasWithNavigation = mockResidencias.map(residencia => ({
        ...residencia,
        onClick: createNavigateHandler(residencia.id)
    }));

    const localizedResidencias = useLocalizedData(residenciasWithNavigation);

    return (
        <section className='past-residencies-section'>
            <MediumSans>{t('previousResidencies')}</MediumSans>
            <Grid cards={localizedResidencias} className="past-residencies-grid" />
        </section>
    )
}

export default PastResidencies;