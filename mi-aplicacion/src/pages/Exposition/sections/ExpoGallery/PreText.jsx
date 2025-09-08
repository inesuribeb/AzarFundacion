import Texts from '../../../../components/Texts/Texts';
import './PreText.css';

function PreText({ t, currentLanguage, exhibition }) {
    return (
        <section className='pre-text-section'>
            <Texts
                size="extra-large"
                dangerouslySetInnerHTML={{ __html: exhibition.byeByeText }}
            />
        </section>
    );
}

export default PreText;