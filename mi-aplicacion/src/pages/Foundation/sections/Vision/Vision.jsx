import './Vision.css';

function Vision({ t }) {
    return (
        <section className='section-vision'>
            <h1>{t('visionTitle')}</h1>
            <div 
                className="vision-text"
                dangerouslySetInnerHTML={{ __html: t('visionText') }}
            />
        </section>
    )
}

export default Vision;