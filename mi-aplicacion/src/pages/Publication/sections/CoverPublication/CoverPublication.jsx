// import CarouselPublication from './components/CarouselPublication';
import ImageCarousel from '../../../../components/ImageCarousel/ImageCarousel';
import './CoverPublication.css';

function CoverPublication({ publication }) {
    if (!publication) return null;

    return (
        <section className='cover-pub-page'>
            {/* Título arriba */}
            <div className="pub-page-header">
                <h1
                    className="pub-page-title"
                    dangerouslySetInnerHTML={{ __html: publication.title }}
                />
            </div>

            {/* Carousel usando el componente genérico */}
            <div className="pub-page-viewer-container">
                <ImageCarousel
                    images={publication.images}
                    title={publication.title}
                    showCounter={true}      // ✅ Mostrar "5 / 12"
                    showDots={false}         // ✅ Mostrar puntos abajo
                    showArrows={false}      // ✅ Sin flechas
                    clickNavigation={true}  // ✅ Click en mitades para navegar
                    className="publication-viewer-carousel"
                />
            </div>

            <div className="pub-page-purchase-bar">
                <div className="pub-page-price">
                    {publication.price}
                </div>

                <div className="pub-page-spacer"></div>

                <div className="pub-page-quantity">
                    <select className="pub-quantity-selector">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <button className="pub-page-cart-btn">
                    Añadir a la cesta
                </button>
            </div>
        </section>
    );
}

export default CoverPublication;