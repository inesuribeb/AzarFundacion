import './GenericCard.css'

function GenericCard({ 
    image, 
    title, 
    description, 
    onClick, 
    className = '' 
}) {
    return (
        <div 
            className={`generic-card ${className}`}
            onClick={onClick}
        >
            <div className="card-image-container">
                <img 
                    src={image} 
                    alt={title}
                    className="card-image"
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {description && (
                    <p className="card-subtitle">{description}</p>
                )}
            </div>
        </div>
    )
}

export default GenericCard;