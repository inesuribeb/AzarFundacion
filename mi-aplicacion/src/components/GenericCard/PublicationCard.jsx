import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './PublicationCard.css';

function PublicationCard({ 
    images = [],
    title,
    number,
    price,
    onClick,
    className = ''
}) {
    return (
        <div 
            className={`publication-card ${className}`}
            onClick={onClick}
        >
            <ImageCarousel 
                images={images}
                title={title}
                showCounter={false}
                showDots={false}
                showArrows={true}
                clickNavigation={false}
                className="publication-card-carousel"
            />

            <div className="publication-info-bar">
                <div className="publication-number">
                    {number}
                </div>
                
                <div 
                    className="publication-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                
                <div className="publication-price">
                    {price}
                </div>
            </div>
        </div>
    );
}

export default PublicationCard;