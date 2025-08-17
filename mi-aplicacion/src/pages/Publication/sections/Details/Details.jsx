import { useState } from 'react';
import './Details.css';

function Details({ publication }) {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (accordionName) => {
        setOpenAccordion(openAccordion === accordionName ? null : accordionName);
    };

    return (
        <section className='publication-details'>
            <div className="details-content">
                {/* Texto superior y accordions */}
                <div className="details-info">
                    <div className="details-text">
                        {/* Info localizada de la publicación */}
                        <div 
                            dangerouslySetInnerHTML={{ __html: publication.info }}
                        />
                    </div>

                    <div className="details-accordions">
                        {/* Accordion Detalles */}
                        <div className="accordion-item">
                            <button 
                                className={`accordion-header ${openAccordion === 'details' ? 'open' : ''}`}
                                onClick={() => toggleAccordion('details')}
                            >
                                <span>Detalles</span>
                                <span className="accordion-icon">
                                    {openAccordion === 'details' ? '−' : '+'}
                                </span>
                            </button>
                            {openAccordion === 'details' && (
                                <div className="accordion-content">
                                    {publication.pages && (
                                        <p><strong>Páginas:</strong> {publication.pages}</p>
                                    )}
                                    {publication.format && (
                                        <p><strong>Formato:</strong> {publication.format}</p>
                                    )}
                                    {publication.year && (
                                        <p><strong>Año:</strong> {publication.year}</p>
                                    )}
                                    {publication.type && (
                                        <p><strong>Tipo:</strong> {publication.type}</p>
                                    )}
                                    {publication.subtitle && (
                                        <p><strong>Subtítulo:</strong> {publication.subtitle}</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Accordion Envíos */}
                        <div className="accordion-item">
                            <button 
                                className={`accordion-header ${openAccordion === 'shipping' ? 'open' : ''}`}
                                onClick={() => toggleAccordion('shipping')}
                            >
                                <span>Envíos</span>
                                <span className="accordion-icon">
                                    {openAccordion === 'shipping' ? '−' : '+'}
                                </span>
                            </button>
                            {openAccordion === 'shipping' && (
                                <div className="accordion-content">
                                    <p><strong>España:</strong> 3-5 días laborables</p>
                                    <p><strong>Europa:</strong> 7-10 días laborables</p>
                                    <p><strong>Internacional:</strong> 15-20 días laborables</p>
                                    <p><strong>Envío gratuito</strong> en pedidos superiores a €50</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Grid de imágenes detalle */}
                <div className="details-images">
                    {publication.detailImages && publication.detailImages.length > 0 ? (
                        publication.detailImages.map((image, index) => (
                            <div key={index} className="detail-image-container">
                                <img 
                                    src={image} 
                                    alt={`${publication.title} - detalle ${index + 1}`}
                                    className="detail-image"
                                />
                            </div>
                        ))
                    ) : (
                        // Placeholders si no hay detailImages
                        <>
                            <div className="detail-image-placeholder"></div>
                            <div className="detail-image-placeholder"></div>
                            <div className="detail-image-placeholder large"></div>
                            <div className="detail-image-placeholder"></div>
                            <div className="detail-image-placeholder"></div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Details;