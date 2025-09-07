import './ExpoCover.css';

function ExpoCover({ t, currentLanguage, exhibition }) {
    if (!exhibition) return null;

    return (
        <section className='expo-cover'>
            <div className='ex-img'>
                <img
                    src={exhibition?.image}
                    alt={exhibition?.title}
                />
                {/* <p>
                    <span>{t('imagesBy')}</span>
                    <span className='ex-img-name'> {exhibition?.imagesAuthor}</span>
                </p> */}
            </div>
            <h1
                className="pub-page-title"
                dangerouslySetInnerHTML={{ __html: exhibition.title }}
            />

        </section>
    );
}

export default ExpoCover;