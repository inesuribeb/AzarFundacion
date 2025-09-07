// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../../contexts/LanguageContext';
// import './NavigationPhone.css';

// function NavigationPhone({ closeMenu }) {
//     const { t, getRoute } = useLanguage();
    
//     const navItems = [
//         { route: 'foundation', number: '01', text: 'foundation' },
//         { route: 'residenciesProgram', number: '02', text: 'residenciesProgram' },
//         { route: 'archive', number: '03', text: 'archive' },
//         { route: 'archive', number: '04', text: 'shop', queryParam: 'tab=publications' }
//     ];

//     const getLinkTo = (item) => {
//         const baseRoute = getRoute(item.route);
//         return item.queryParam ? `${baseRoute}?${item.queryParam}` : baseRoute;
//     };

//     return (
//         <nav className="navigation-phone">
//             {navItems.map((item, index) => (
//                 <Link 
//                     key={index}
//                     to={getLinkTo(item)}
//                     className="nav-link-phone"
//                     onClick={closeMenu}
//                 >
//                     <span className="nav-number-phone">{t(item.number)}</span>
//                     <span className="nav-text-phone">{t(item.text)}</span>
//                 </Link>
//             ))}
//         </nav>
//     );
// }

// export default NavigationPhone;


import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import './NavigationPhone.css';

function NavigationPhone({ closeMenu, isClosing }) {
    const { t, getRoute } = useLanguage();
    
    const navItems = [
        { route: 'foundation', number: '01', text: 'foundation' },
        { route: 'residenciesProgram', number: '02', text: 'residenciesProgram' },
        { route: 'archive', number: '03', text: 'archive' },
        { route: 'archive', number: '04', text: 'shop', queryParam: 'tab=publications' }
    ];

    const getLinkTo = (item) => {
        const baseRoute = getRoute(item.route);
        return item.queryParam ? `${baseRoute}?${item.queryParam}` : baseRoute;
    };

    return (
        <nav className={`navigation-phone ${isClosing ? 'fade-out' : 'fade-in'}`}>
            {navItems.map((item, index) => (
                <Link 
                    key={index}
                    to={getLinkTo(item)}
                    className={`nav-link-phone ${isClosing ? 'fade-out' : 'fade-in'}`}
                    style={{
                        animationDelay: isClosing ? '0s' : `${0.1 + index * 0.1}s`
                    }}
                    onClick={closeMenu}
                >
                    <span className="nav-number-phone">{t(item.number)}</span>
                    <span className="nav-text-phone">{t(item.text)}</span>
                </Link>
            ))}
        </nav>
    );
}

export default NavigationPhone;