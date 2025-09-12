import './GenericCard.css'

function GenericCard({
    image,
    title,
    description,
    onClick,
    className = '',
    isSingle = false,
    year = null,
    showYear = false,
    category = null,      // ← Nueva prop
    showCategory = false  // ← Nueva prop
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

            {/* aqui */}
            {/* {showCategory && category && (
                <div className="card-category">
                    <span className="category-label">{category}</span>
                </div>
            )} */}

            <div className="card-content">
                {showCategory && category && (
                    <div className="card-category">
                        <span className="category-label">{category}</span>
                    </div>
                )}
                <div className="card-title-container">
                    <h3
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {/* <h3
                        className="card-title"
                        dangerouslySetInnerHTML={{
                            __html: showYear && year ? `${title} (${year})` : title
                        }}
                    /> */}
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