import './GenericCard.css'

function GenericCard({
    image,
    title,
    description,
    onClick,
    className = '',
    isSingle = false
}) {
    return (
        <div
            // className={`generic-card ${className}`}
            className={`generic-card ${className} ${isSingle ? 'single-card' : ''}`}
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
                {/* <h3 className="card-title">{title}</h3> */}
                <h3
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {description && (
                    <p className="card-subtitle">{description}</p>
                )}
            </div>
        </div>
    )
}

export default GenericCard;