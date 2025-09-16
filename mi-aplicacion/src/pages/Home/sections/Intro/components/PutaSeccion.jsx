import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PutaSeccion.css';

function PutaSeccion({ t, getRoute }) {
    const navigate = useNavigate();
    
    const sectionItems = [
        { 
            id: 'residencias', 
            labelKey: 'residencies', 
            route: 'residenciesProgram',
            // image: '/Images/Home/PutaSeccion/PutaSeccion-res.jpg',
            image: '/Images/Home/Pruebas/1.JPG',
            lightText: true 
        },
        { 
            id: 'exposiciones', 
            labelKey: 'exhibitions', 
            route: 'archive',
            queryParam: 'tab=exhibitions', 
            image: '/Images/Home/PutaSeccion/PutaSeccion-exp.jpg',
            lightText: true 
        },
        { 
            id: 'obras-colectivas', 
            labelKey: 'collectiveArtPieces', 
            route: 'archive',
            queryParam: 'tab=collectiveArtPieces',
            image: '/Images/Home/PutaSeccion/PutaSeccion-obra.jpg',
            lightText: true 
        },
        { 
            id: 'publicaciones', 
            labelKey: 'publications', 
            route: 'archive',
            queryParam: 'tab=publications',
            image: '/Images/Home/PutaSeccion/PutaSeccion-pub.jpg',
            lightText: true 
        },
    ];

    const getNavigationPath = (item) => {
        const baseRoute = getRoute(item.route);
        return item.queryParam ? `${baseRoute}?${item.queryParam}` : baseRoute;
    };

    const handleItemClick = (item) => {
        const path = getNavigationPath(item);
        navigate(path);
    };

    return (
        <div className="puta-seccion-container">
            <div className="puta-seccion-grid">
                {sectionItems.map((item) => (
                    <div
                        key={item.id}
                        className="puta-seccion-item"
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="puta-seccion-image">
                            <img 
                                src={item.image} 
                                alt={t(item.labelKey)}
                            />
                        </div>
                        <div className="puta-seccion-overlay">
                            <h3 className="puta-seccion-title">
                                {t(item.labelKey)}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PutaSeccion;