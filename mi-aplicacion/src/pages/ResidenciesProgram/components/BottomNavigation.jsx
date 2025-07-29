import { useEffect, useState } from 'react';
import './BottomNavigation.css';

function BottomNavigation({ t, activeSection, onNavigate }) {
    const sections = [
        { 
            id: 'opencall', 
            label: t('openCall'),
            ref: 'opencall-section' 
        },
        { 
            id: 'finca', 
            label: t('theEspace'),
            ref: 'finca-section' 
        },
        { 
            id: 'pastresidencies', 
            label: t('previousResidencies'),
            ref: 'pastresidencies-section' 
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
    };

    return (
        <nav className="bottom-navigation">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
}

export default BottomNavigation;