import './GenericCard.css'

function GenericCard({
    image,
    title,
    description,
    onClick,
    className = '',
    isSingle = false,
    year = null,  
    showYear = false 
}) {
    return (
        <div
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
                {/* <h3
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                /> */}
                <div className="card-title-container">
                    <h3
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {showYear && year && (
                        <span className="card-year">({year})</span>
                    )}
                </div>
                {description && (
                    <p
                        className="card-subtitle"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </div>
        </div>
    )
}

export default GenericCard;