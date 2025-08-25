import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useRef } from 'react';
import './Navigation2.css'

function Navigation2({ closeMenu, onHoverChange, isClosing }) {
    const { t, getRoute } = useLanguage();
    const currentActiveRef = useRef(null);
    
    const navItems = [
        { route: 'foundation', number: '01', text: 'foundation', image: '/Images/Header/Nuevas/Nav-fundacion.jpg', lightColor: true },
        { route: 'residenciesProgram', number: '02', text: 'residenciesProgram', image: '/Images/Header/Nuevas/Nav-residencias.jpg', lightColor: true },
        { route: 'archive', number: '03', text: 'archive', image: '/Images/Header/Nuevas/Nav-actividades.jpg', lightColor: true },
        { route: 'archive', number: '04', text: 'shop', image: '/Images/Header/Nuevas/Nav-tienda.jpg', lightColor: true, queryParam: 'tab=publications' }
    ];

    const handleMouseEnter = (e) => {
        const linkElement = e.currentTarget;
        const index = parseInt(linkElement.dataset.index);
        const item = navItems[index];
        
        if (onHoverChange) {
            onHoverChange(item.text === 'shop' && item.lightColor);
        }
        
        if (currentActiveRef.current && currentActiveRef.current !== linkElement) {
            currentActiveRef.current.classList.remove('show-image');
        }
        
        linkElement.classList.add('show-image');
        currentActiveRef.current = linkElement;
    };

    const handleMouseLeave = (e) => {
        const linkElement = e.currentTarget;
        
        if (onHoverChange) {
            onHoverChange(false);
        }
        
        linkElement.classList.remove('show-image');
        
        if (currentActiveRef.current === linkElement) {
            currentActiveRef.current = null;
        }
    };

    const getLinkTo = (item) => {
        const baseRoute = getRoute(item.route);
        return item.queryParam ? `${baseRoute}?${item.queryParam}` : baseRoute;
    };

    return (
        <nav className={`main-navigation-2 ${isClosing ? 'closing' : ''}`}>
            {navItems.map((item, index) => (
                <Link 
                    key={index}
                    data-index={index}
                    to={getLinkTo(item)}
                    className={`nav-link-2 ${item.lightColor ? 'light-text' : ''}`}
                    onClick={closeMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        '--bg-image': `url(${item.image})`
                    }}
                >
                    <span className="nav-number-2">{t(item.number)}</span>
                    <span className="nav-text-2">{t(item.text)}</span>
                </Link>
            ))}
        </nav>
    )
}

export default Navigation2;