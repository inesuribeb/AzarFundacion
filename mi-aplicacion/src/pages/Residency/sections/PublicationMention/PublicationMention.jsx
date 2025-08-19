import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import Texts from '../../../../components/Texts/Texts';
import './PublicationMention.css';

function PublicationMention({ residencia, t, currentLanguage }) {

    const publication = residencia.publicaciones && residencia.publicaciones.length > 0
        ? mockPublicationsData.find(pub => pub.id === residencia.publicaciones[0])
        : null;

    return (
        <section className='section-publication-mention'>
            <div className='description-info'>
                <Texts
                    size="medium"
                    className='residency-texts'
                    dangerouslySetInnerHTML={{ __html: residencia.textP }}
                />
            </div>

            <div className='residency-publication'>
                {publication && (
                    <>
                        {/* Cover de la publicación */}
                        <img
                            src={publication.cover}
                            alt={publication.title[currentLanguage] || publication.title.es}
                            className="publication-cover"
                        />

                        {/* Primera imagen de detailImages */}
                        {publication.detailImages && publication.detailImages.length > 0 && (
                            <img
                                src={publication.detailImages[0]}
                                alt="Detail"
                                className="publication-detail"
                            />
                        )}
                    </>
                )}
            </div>
        </section>
    )
}

export default PublicationMention;