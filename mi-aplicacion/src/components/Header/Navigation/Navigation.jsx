import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useRef } from 'react';
import './Navigation.css'

function Navigation({ closeMenu, onHoverChange }) {
    const { t, getRoute } = useLanguage();
    const currentActiveRef = useRef(null);
    
    const navItems = [
        { route: 'foundation', number: '01', text: 'foundation', image: '/Images/Header/HeaderFundacion.jpg', lightColor: true },
        { route: 'residenciesProgram', number: '02', text: 'residenciesProgram', image: '/Images/Header/HeaderResidencia.jpg', lightColor: true },
        { route: 'archive', number: '03', text: 'archive', image: '/Images/Header/HeaderArchivo.png', lightColor: true },
        { route: 'archive', number: '04', text: 'shop', image: '/Images/Header/HeaderPublication.png', lightColor: true }
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
            currentActiveRef.current.classList.add('hide-image');
        }
        
        linkElement.classList.remove('show-image', 'hide-image');
        linkElement.classList.add('reset');
        
        setTimeout(() => {
            linkElement.classList.remove('reset');
            linkElement.classList.add('show-image');
        }, 10);
        
        currentActiveRef.current = linkElement;
    };

    const handleMouseLeave = (e) => {
        const linkElement = e.currentTarget;
        
        if (onHoverChange) {
            onHoverChange(false);
        }
        
        linkElement.classList.remove('show-image');
        linkElement.classList.add('hide-image');
        
        if (currentActiveRef.current === linkElement) {
            currentActiveRef.current = null;
        }
    };

    return (
        <nav className="main-navigation">
            {navItems.map((item, index) => (
                <Link 
                    key={index}
                    data-index={index}
                    to={getRoute(item.route)} 
                    className={`nav-link ${item.lightColor ? 'light-text' : ''}`}
                    onClick={closeMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        '--bg-image': `url(${item.image})`,
                        '--translate-y': '100%'
                    }}
                >
                    <span className="nav-number">{t(item.number)}</span>
                    <span className="nav-text">{t(item.text)}</span>
                </Link>
            ))}
        </nav>
    )
}

export default Navigation;