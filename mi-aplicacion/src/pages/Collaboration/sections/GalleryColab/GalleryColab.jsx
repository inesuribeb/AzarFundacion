import './GalleryColab.css';

function GalleryColab({ collaboration, t, currentLanguage }) {
    if (!collaboration) return null;

    return (
        <section className='galley-colab-section'>
            <img
                src={collaboration.gallery[1]}
                alt={collaboration.title}
                className='colab-image-g'
            />
            <img
                src={collaboration.gallery[3]}
                alt={collaboration.title}
                className='colab-image-g'
            />
        </section>
    );
}

export default GalleryColab;