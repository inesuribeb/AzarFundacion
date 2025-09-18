// import Requirements from './Requirements';
// import Jurado from './Jurado';
// import SelectionProcess from './components/SelectionProcess';
// import './OpenCallR.css'

// function OpenCallR({ t }) {
//     return (
//         <section className='open-call-section'>
//             <Requirements t={t} />
//             <Jurado t={t} />
//             <SelectionProcess t={t} />
//         </section>
//     )
// }

// export default OpenCallR;

import { useEffect, useRef } from 'react';
import Requirements from './Requirements';
import Jurado from './Jurado';
import SelectionProcess from './components/SelectionProcess';
import './OpenCallR.css'

function OpenCallR({ t, residency }) {
    const sectionRef = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !sidebarRef.current) return;

            const section = sectionRef.current;
            const sidebar = sidebarRef.current;
            const sectionRect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Si la sección está completamente visible o parcialmente visible
            if (sectionRect.top <= 0 && sectionRect.bottom > windowHeight) {
                // Estamos scrolleando dentro de la sección - sidebar fijo
                sidebar.style.position = 'fixed';
                sidebar.style.top = '0';
                sidebar.style.left = '0';
            } else if (sectionRect.top > 0) {
                // La sección está por debajo - sidebar se va arriba con la sección
                sidebar.style.position = 'absolute';
                sidebar.style.top = '0';
                sidebar.style.left = '0';
            } else {
                // La sección se ha scrolleado hacia arriba - sidebar se queda al final
                sidebar.style.position = 'absolute';
                sidebar.style.top = 'auto';
                sidebar.style.bottom = '0';
                sidebar.style.left = '0';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Llamar una vez al montar para posicionar correctamente
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='open-call-section' ref={sectionRef}>
            <div className='main-content'>
                <Requirements t={t} residency={residency}  />
                <Jurado t={t} residency={residency}  />
            </div>
            
            <div className='selection-process-sidebar' ref={sidebarRef}>
                <SelectionProcess t={t} />
            </div>
        </section>
    )
}

export default OpenCallR;