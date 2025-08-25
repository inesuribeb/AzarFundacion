import './CoverArtPiece.css';

function CoverArtPiece({ artPiece }) {
    if (!artPiece) return null;

    return (
        <section className='cover-artpiece'>
            {/* Imagen de fondo que ocupa todo el viewport */}
            <div className="cover-artpiece-background">
                <img 
                    src={artPiece.image2} 
                    alt={artPiece.title}
                />
            </div>

            {/* Overlay de texto */}
            <div className="cover-artpiece-content">
                {/* Texto pequeño arriba a la izquierda */}
                {artPiece.introduction && (
                    <div className="cover-artpiece-introduction">
                        {artPiece.introduction}
                    </div>
                )}

                {/* Título grande abajo a la izquierda */}
                <div className="cover-artpiece-title">
                    <h1>{artPiece.title}</h1>
                </div>
            </div>
        </section>
    );
}

export default CoverArtPiece;