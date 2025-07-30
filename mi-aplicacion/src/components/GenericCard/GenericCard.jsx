import './GenericCard.css'

function GenericCard({ 
    image, 
    title, 
    subtitle, 
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
                {subtitle && (
                    <p className="card-subtitle">{subtitle}</p>
                )}
            </div>
        </div>
    )
}

export default GenericCard;