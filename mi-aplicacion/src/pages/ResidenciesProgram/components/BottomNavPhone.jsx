// import { useState, useEffect } from 'react';
// import './BottomNavPhone.css';

// function BottomNavPhone({ t, activeSection, onNavigate }) {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const sections = [
//         { 
//             id: 'finca', 
//             label: t('theEspace'),
//             number: '01'
//         },
//         { 
//             id: 'opencall', 
//             label: t('openCall'),
//             number: '02'
//         },
//         { 
//             id: 'pastresidencies', 
//             label: t('previousResidencies'),
//             number: '03'
//         }
//     ];

//     const handleNavClick = (sectionId) => {
//         const element = document.getElementById(sectionId + '-section');
//         if (element) {
//             element.scrollIntoView({ 
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//         onNavigate && onNavigate(sectionId);
//         setIsExpanded(false);
//     };

//     const toggleExpanded = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const getCurrentSection = () => {
//         return sections.find(section => section.id === activeSection) || sections[0];
//     };

//     const currentSection = getCurrentSection();

//     useEffect(() => {
//         if (isExpanded) {
//             const options = document.querySelectorAll('.nav-option');
//             options.forEach((option, index) => {
//                 setTimeout(() => {
//                     option.classList.add('show');
//                 }, index * 100);
//             });
//         }
//     }, [isExpanded]);

//     return (
//         <nav className={`bottom-navigation-phone ${isExpanded ? 'expanded' : ''}`}>
//             <button 
//                 className="nav-main-button"
//                 onClick={toggleExpanded}
//             >
//                 <span className="nav-number">{currentSection.number}</span>
//                 <span className="nav-label">{currentSection.label}</span>
//             </button>

//             <div className="nav-options">
//                 {sections
//                     .filter(section => section.id !== activeSection)
//                     .map((section) => (
//                     <button
//                         key={section.id}
//                         className="nav-option"
//                         onClick={() => handleNavClick(section.id)}
//                     >
//                         <span className="option-number">{section.number}</span>
//                         <span className="option-label">{section.label}</span>
//                     </button>
//                 ))}
//             </div>
//         </nav>
//     );
// }

// export default BottomNavPhone;

// 2
// import { useState, useEffect } from 'react';
// import './BottomNavPhone.css';

// function BottomNavPhone({ t, activeSection, onNavigate }) {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const sections = [
//         { 
//             id: 'finca', 
//             label: t('theEspace'),
//             number: '01'
//         },
//         { 
//             id: 'opencall', 
//             label: t('openCall'),
//             number: '02'
//         },
//         { 
//             id: 'pastresidencies', 
//             label: t('previousResidencies'),
//             number: '03'
//         }
//     ];

//     const handleNavClick = (sectionId) => {
//         const element = document.getElementById(sectionId + '-section');
//         if (element) {
//             element.scrollIntoView({ 
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//         onNavigate && onNavigate(sectionId);
//         setIsExpanded(false);
//     };

//     const toggleExpanded = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const getCurrentSection = () => {
//         return sections.find(section => section.id === activeSection) || sections[0];
//     };

//     const currentSection = getCurrentSection();

//     useEffect(() => {
//         if (isExpanded) {
//             const options = document.querySelectorAll('.nav-option');
//             options.forEach((option, index) => {
//                 setTimeout(() => {
//                     option.classList.add('show');
//                 }, index * 100);
//             });
//         }
//     }, [isExpanded]);

//     return (
//         <div className={`bottom-navigation-phone ${isExpanded ? 'expanded' : ''}`}>
//             {/* Opciones expandidas hacia arriba - ANTES del botón principal */}
//             <div className="nav-options">
//                 {sections
//                     .filter(section => section.id !== activeSection)
//                     .map((section) => (
//                     <button
//                         key={section.id}
//                         className="nav-option"
//                         onClick={() => handleNavClick(section.id)}
//                     >
//                         <span className="option-number">{section.number}</span>
//                         <span className="option-label">{section.label}</span>
//                     </button>
//                 ))}
//             </div>

//             <button 
//                 className="nav-main-button"
//                 onClick={toggleExpanded}
//             >
//                 <span className="nav-number">{currentSection.number}</span>
//                 <span className="nav-label">{currentSection.label}</span>
//             </button>
//         </div>
//     );
// }

// export default BottomNavPhone;

import { useState, useEffect } from 'react';
import './BottomNavPhone.css';

function BottomNavPhone({ t, activeSection, onNavigate }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const sections = [
        { 
            id: 'finca', 
            label: t('theEspace'),
            number: '01'
        },
        { 
            id: 'opencall', 
            label: t('openCall'),
            number: '02'
        },
        { 
            id: 'pastresidencies', 
            label: t('previousResidencies'),
            number: '03'
        }
    ];

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId + '-section');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        onNavigate && onNavigate(sectionId);
        setIsExpanded(false);
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const getCurrentSection = () => {
        return sections.find(section => section.id === activeSection) || sections[0];
    };

    const currentSection = getCurrentSection();
    const isInIntro = activeSection === null;

    // Animar las opciones cuando se expanden
    useEffect(() => {
        if (isExpanded) {
            const options = document.querySelectorAll('.nav-option');
            options.forEach((option, index) => {
                setTimeout(() => {
                    option.classList.add('show');
                }, index * 100);
            });
        }
    }, [isExpanded]);

    return (
        <div className={`bottom-navigation-phone ${isExpanded ? 'expanded' : ''} ${isInIntro ? 'intro-mode' : ''}`}>
            {/* Opciones expandidas hacia arriba */}
            <div className="nav-options">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className="nav-option"
                        onClick={() => handleNavClick(section.id)}
                    >
                        <span className="option-number">{section.number}</span>
                        <span className="option-label">{section.label}</span>
                    </button>
                ))}
            </div>

            {/* Botón principal */}
            <button 
                className="nav-main-button"
                onClick={toggleExpanded}
            >
                {isInIntro ? (
                    <>
                        <span className="nav-content-label">{t('content')}</span>
                        <span className="nav-arrow">▼</span>
                    </>
                ) : (
                    <>
                        <span className="nav-number">{currentSection.number}</span>
                        <span className="nav-label">{currentSection.label}</span>
                    </>
                )}
            </button>
        </div>
    );
}

export default BottomNavPhone;