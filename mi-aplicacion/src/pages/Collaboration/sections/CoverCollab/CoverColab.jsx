
import './CoverColab.css';

function CoverColab({ collaboration, t, currentLanguage }) {
    if (!collaboration) return null;

    return (
        <section className='section-cover-colab'>
            <div className='cover-colab-container'>
                <div className='cover-colab-content'>
                    <h1 dangerouslySetInnerHTML={{ 
                            __html: collaboration.title
                        }} />
                </div>
                
                <div className='cover-colab-image'>
                    <img 
                        src={collaboration.gallery[2]} 
                        alt={collaboration.title}
                        className='colab-image'
                    />
                </div>
            </div>
        </section>
    );
}

export default CoverColab;