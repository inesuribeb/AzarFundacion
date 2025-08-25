import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import NavigationTabs2 from './components/NavigationTabs2'; // Ajusta la ruta según tu estructura
import './Intro2.css';

function Intro2({ t, getRoute }) {
    // const tabItems = [
    //     { 
    //         id: 'residencias', 
    //         labelKey: 'residencies', 
    //         route: 'residenciesProgram',
    //         bgImage: '/Images/Home/Intro/Intro2-residencias.jpg',
    //         lightText: true 
    //     },
    //     { 
    //         id: 'exposiciones', 
    //         labelKey: 'exhibitions', 
    //         route: 'archive',
    //         bgImage: '/Images/Home/Intro/Intro2-expos.jpg',
    //         lightText: true 
    //     },
    //     { 
    //         id: 'obras-colectivas', 
    //         labelKey: 'collectiveArtPieces', 
    //         route: 'archive',
    //         queryParam: 'tab=collectiveArtPieces',
    //         bgImage: '/Images/ArtPieces/ArtPiece01/artpiece01-01.png',
    //         lightText: true 
    //     },
    //     { 
    //         id: 'publicaciones', 
    //         labelKey: 'publications', 
    //         route: 'archive',
    //         queryParam: 'tab=publications',
    //         bgImage: '/Images/Header/HeaderResidencia.jpg',
    //         lightText: true 
    //     },
    //     { 
    //         id: 'colaboraciones', 
    //         labelKey: 'collaborations', 
    //         route: 'archive',
    //         queryParam: 'tab=collaborations',
    //         bgImage: '/Images/Header/HeaderResidencia.jpg',
    //         lightText: true 
    //     },
    // ];
    return (
        <section className='section-intro2'>
            <div className='intro2-info'>
                <div className='intro2-title'>
                    <MediumSans>{t('heroSubtitle')}</MediumSans>
                </div>
                <div className='intro2-text'>
                    <Texts>{t('visionText')}</Texts>
                </div>
            </div>

            <div className='intro2-links'>
                <NavigationTabs2
                    t={t}
                    getRoute={getRoute}
                    onTabChange={(item) => console.log('Tab selected:', item)}
                    onHoverStateChange={(isLight) => console.log('Hover:', isLight)}
                />
            </div>
        </section>
    );
}

export default Intro2;