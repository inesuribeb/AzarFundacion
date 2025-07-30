import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationTabs.css';

function NavigationTabs({ t, getRoute, onTabChange, onHoverStateChange }) {
    const [activeTab, setActiveTab] = useState(0);
    const currentHoverRef = useRef(null);
    const navigate = useNavigate();
    
    const tabItems = [
        { 
            id: 'residencias', 
            labelKey: 'residencies', 
            route: 'residenciesProgram',
            bgImage: '/Images/Header/HeaderResidencia.jpg',
            lightText: true 
        },
        { 
            id: 'exposiciones', 
            labelKey: 'exhibitions', 
            route: 'archive',
            bgImage: '/Images/Residencies/Residency02/prueba4.PNG',
            lightText: true 
        },
        { 
            id: 'obras-colectivas', 
            labelKey: 'collectiveArtPieces', 
            route: 'archive',
            queryParam: 'tab=collectiveArtPieces',
            bgImage: '/Images/ArtPieces/ArtPiece01/artpiece01-01.png',
            lightText: true 
        },
        { 
            id: 'publicaciones', 
            labelKey: 'publications', 
            route: 'archive',
            queryParam: 'tab=publications',
            bgImage: '/Images/Header/HeaderResidencia.jpg',
            lightText: true 
        },
        { 
            id: 'colaboraciones', 
            labelKey: 'collaborations', 
            route: 'archive',
            queryParam: 'tab=collaborations',
            bgImage: '/Images/Header/HeaderResidencia.jpg',
            lightText: true 
        },
    ];

    // Función para construir la URL con query params si es necesario
    const getNavigationPath = (item) => {
        const baseRoute = getRoute(item.route);
        return item.queryParam ? `${baseRoute}?${item.queryParam}` : baseRoute;
    };

    const handleTabClick = (index, item) => {
        setActiveTab(index);
        
        // Navegar a la ruta correspondiente
        const path = getNavigationPath(item);
        navigate(path);
        
        if (onTabChange) {
            onTabChange(item);
        }
    };

    const handleTabHover = (e, item, index) => {
        const tabElement = e.currentTarget;
        
        if (onHoverStateChange) {
            onHoverStateChange(item.lightText);
        }

        // Limpiar hover anterior
        if (currentHoverRef.current && currentHoverRef.current !== tabElement) {
            currentHoverRef.current.classList.remove('tab-hover-active');
            currentHoverRef.current.classList.add('tab-hover-exit');
        }

        // Resetear y aplicar nuevo hover
        tabElement.classList.remove('tab-hover-active', 'tab-hover-exit');
        tabElement.classList.add('tab-hover-reset');

        setTimeout(() => {
            tabElement.classList.remove('tab-hover-reset');
            tabElement.classList.add('tab-hover-active');
        }, 10);

        currentHoverRef.current = tabElement;
    };

    const handleTabLeave = (e) => {
        const tabElement = e.currentTarget;
        
        if (onHoverStateChange) {
            onHoverStateChange(false);
        }

        tabElement.classList.remove('nav-tab-hover-active');
        tabElement.classList.add('nav-tab-hover-exit');

        if (currentHoverRef.current === tabElement) {
            currentHoverRef.current = null;
        }
    };

    return (
        <div className="navigation-tabs-container">
            <div className="tabs-wrapper">
                {tabItems.map((item, index) => (
                    <button
                        key={item.id}
                        className={`nav-tab ${activeTab === index ? 'nav-tab-active' : ''} ${item.lightText ? 'nav-tab-light-text' : ''}`}
                        onClick={() => handleTabClick(index, item)}
                        onMouseEnter={(e) => handleTabHover(e, item, index)}
                        onMouseLeave={handleTabLeave}
                        style={{
                            '--nav-tab-bg-image': `url(${item.bgImage})`,
                            '--nav-tab-transform': 'translateY(100%)'
                        }}
                    >
                        <span className="nav-tab-label">{t(item.labelKey)}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default NavigationTabs;