import './GalleryPreview.css'

const GalleryPreview = ({ images, title, startIndex = 0 }) => {
    if (!images || images.length === 0) return null;
    
    const imageCount = images.length;
    
    return (
        <div className="gallery-preview">
            {images.map((image, index) => (
                <img 
                    key={`${startIndex}-${index}`}
                    src={image} 
                    alt={`${title} - imagen ${startIndex + index + 1}`}
                    className={`gallery-preview-image ${imageCount === 1 ? 'single-image' : ''}`}
                />
            ))}
        </div>
    );
};

export default GalleryPreview;