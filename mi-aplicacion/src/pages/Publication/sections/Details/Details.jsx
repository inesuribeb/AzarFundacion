import { useState } from 'react';
import './Details.css';

function Details({ publication, t }) {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (accordionName) => {
        setOpenAccordion(openAccordion === accordionName ? null : accordionName);
    };

    return (
        <section className='publication-details'>
            <div className="details-content">
                {/* Texto superior y accordions */}
                <div className='empty-column'></div>
                <div className="details-info">
                    <div className="details-text">
                        <div
                            dangerouslySetInnerHTML={{ __html: publication.info }}
                        />
                    </div>

                    <div className="details-accordions">
                        <div className="accordion-item">
                            <button
                                className={`accordion-header ${openAccordion === 'details' ? 'open' : ''}`}
                                onClick={() => toggleAccordion('details')}
                            >
                                <span>{t('details')}</span>
                                <span className="accordion-icon">
                                    {openAccordion === 'details' ? '−' : '+'}
                                </span>
                            </button>
                            {openAccordion === 'details' && (
                                <div className="accordion-content">
                                    {publication.pages && (
                                        <p><strong>{t('pages')}:</strong> {publication.pages}</p>
                                    )}
                                    {publication.format && (
                                        <p><strong>{t('format')}:</strong> {publication.format}</p>
                                    )}
                                    {publication.year && (
                                        <p><strong>{t('year')}:</strong> {publication.year}</p>
                                    )}
                                    {publication.type && (
                                        <p><strong>{t('type')}:</strong> {publication.type}</p>
                                    )}
                                    {/* {publication.subtitle && (
                                        <p><strong>Subtítulo:</strong> {publication.subtitle}</p>
                                    )} */}
                                </div>
                            )}
                        </div>

                        {/* Accordion Envíos */}
                        <div className="accordion-item">
                            <button
                                className={`accordion-header ${openAccordion === 'shipping' ? 'open' : ''}`}
                                onClick={() => toggleAccordion('shipping')}
                            >
                                <span>{t('shipping')}</span>
                                <span className="accordion-icon">
                                    {openAccordion === 'shipping' ? '−' : '+'}
                                </span>
                            </button>
                            {openAccordion === 'shipping' && (
                                <div className="accordion-content">
                                    <p><strong>{t('spain')}:</strong> {t('spainDetails')}</p>
                                    <p><strong>{t('europe')}:</strong> {t('europeDetails')}</p>
                                    <p><strong>{t('international')}:</strong> {t('internationalDetails')}</p>
                                    <p><strong>{t('freeShipping')}:</strong> {t('freeDetails')}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="details-images">
                <div className='first-line-gallery'>
                    {publication.detailImages && publication.detailImages.length > 0 ? (
                        <>
                            {publication.detailImages[0] && (
                                <div className="detail-image-container">
                                    <img
                                        src={publication.detailImages[0]}
                                        alt={`${publication.title} - detalle 1`}
                                        className="detail-image"
                                    />
                                </div>
                            )}
                            {publication.detailImages[1] && (
                                <div className="detail-image-container">
                                    <img
                                        src={publication.detailImages[1]}
                                        alt={`${publication.title} - detalle 2`}
                                        className="detail-image"
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="detail-image-placeholder"></div>
                            <div className="detail-image-placeholder"></div>
                        </>
                    )}
                </div>

                <div className='second-line-gallery'>
                    {publication.detailImages && publication.detailImages[2] ? (
                        <div className="detail-image-container">
                            <img
                                src={publication.detailImages[2]}
                                alt={`${publication.title} - detalle 3`}
                                className="detail-image"
                            />
                        </div>
                    ) : (
                        <div className="detail-image-placeholder"></div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Details;