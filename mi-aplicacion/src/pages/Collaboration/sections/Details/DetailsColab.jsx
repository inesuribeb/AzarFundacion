import Texts from '../../../../components/Texts/Texts';
import './DetailsColab.css';

function DetailsColab({ collaboration, t, currentLanguage }) {
    if (!collaboration) return null;

    return (
        <section className='details-colab-section'>
            <div className='colab-img'>
                <img
                    src={collaboration.gallery[0]}
                    alt={collaboration.title}
                    className='colab-image'
                />
            </div>
            <div className='colab-info'>
                <Texts
                    size="medium"
                    className='intro-artpiece-texts'
                    dangerouslySetInnerHTML={{ __html: collaboration.textC }}
                />
            </div>
        </section>
    );
}

export default DetailsColab;