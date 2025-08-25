import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationTabs2.css';

function NavigationTabs2({ t, getRoute, onTabChange, onHoverStateChange }) {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    
    const tabItems = [
        { 
            id: 'residencias', 
            labelKey: 'residencies', 
            route: 'residenciesProgram',
            bgImage: '/Images/Home/Intro/Intro2-residencias.jpg',
            lightText: true 
        },
        { 
            id: 'exposiciones', 
            labelKey: 'exhibitions', 
            route: 'archive',
            bgImage: '/Images/Home/Intro/Intro2-expos.jpg',
            lightText: true 
        },
        { 
            id: 'obras-colectivas', 
            labelKey: 'collectiveArtPieces', 
            route: 'archive',
            queryParam: 'tab=collectiveArtPieces',
            bgImage: '/Images/Home/Intro/Intro2-obras.jpg',
            lightText: true 
        },
        { 
            id: 'publicaciones', 
            labelKey: 'publications', 
            route: 'archive',
            queryParam: 'tab=publications',
            bgImage: '/Images/Home/Intro/Intro2-pub.jpg',
            lightText: true 
        },
        { 
            id: 'colaboraciones', 
            labelKey: 'collaborations', 
            route: 'archive',
            queryParam: 'tab=collaborations',
            bgImage: '/Images/Home/Intro/Intro2-colabs.jpg',
            lightText: true 
        },
    ];

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

    const handleTabHover = (item) => {
        if (onHoverStateChange) {
            onHoverStateChange(item.lightText);
        }
    };

    const handleTabLeave = () => {
        if (onHoverStateChange) {
            onHoverStateChange(false);
        }
    };

    return (
        <div className="navigation-tabs2-container">
            <div className="tabs2-wrapper">
                {tabItems.map((item, index) => (
                    <div key={item.id} className="nav-tab2-group">
                        <div 
                            className="nav-tab2-image"
                            style={{
                                backgroundImage: `url(${item.bgImage})`
                            }}
                        />
                        <button
                            className={`nav-tab2 ${activeTab === index ? 'nav-tab2-active' : ''} ${item.lightText ? 'nav-tab2-light-text' : ''}`}
                            onClick={() => handleTabClick(index, item)}
                            onMouseEnter={() => handleTabHover(item)}
                            onMouseLeave={handleTabLeave}
                        >
                            <span className="nav-tab2-label">{t(item.labelKey)}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavigationTabs2;