import GenericCard from '../GenericCard/GenericCard';
import PublicationCard from '../GenericCard/PublicationCard';
import './Grid.css';

// function Grid({ 
//     cards = [], 
//     className = '' 
// }) {
//     const getGridColumns = (cardCount) => {
//         if (cardCount === 1) return 1
//         if (cardCount === 2) return 2
//         if (cardCount === 3) return 3
//         return 4 
//     }

//     const gridColumns = getGridColumns(cards.length)

//     return (
//         <div 
//             className={`grid ${className}`}
//             style={{ '--grid-columns': gridColumns }}
//         >
//             {cards.map((card, index) => (
//                 <GenericCard
//                     key={card.id || index}
//                     image={card.image}
//                     title={card.title}
//                     description={card.description}
//                     onClick={card.onClick}
//                     className={card.className}
//                 />
//             ))}
//         </div>
//     )
// }

// export default Grid;

function Grid({ 
    cards = [], 
    className = '',
    cardType = 'generic' // ✅ Nueva prop para especificar tipo de card
}) {
    // Determinar número de columnas basado en cantidad de cards
    const getGridColumns = (cardCount) => {
        // ✅ Si es publications, siempre 1 columna (layout en filas)
        if (cardType === 'publications') return 1
        
        if (cardCount === 1) return 1
        if (cardCount === 2) return 2
        if (cardCount === 3) return 3
        return 4 // 4 o más cards = 4 columnas máximo
    }

    const gridColumns = getGridColumns(cards.length)

    const renderCard = (card, index) => {
        if (cardType === 'publications') {
            // ✅ Usar PublicationCard para publications
            return (
                <PublicationCard
                    key={card.id || index}
                    images={card.images}
                    title={card.title}
                    number={card.number}
                    price={card.price}
                    onClick={card.onClick}
                    className={card.className}
                />
            )
        } else {
            // ✅ Usar GenericCard para el resto
            return (
                <GenericCard
                    key={card.id || index}
                    image={card.images ? card.images[0] : card.image} // ✅ Soporte para ambos formatos
                    title={card.title}
                    description={card.description}
                    onClick={card.onClick}
                    className={card.className}
                />
            )
        }
    }

    return (
        <div 
            className={`grid ${className} ${cardType === 'publications' ? 'publications-grid' : ''}`}
            style={{ '--grid-columns': gridColumns }}
        >
            {cards.map((card, index) => renderCard(card, index))}
        </div>
    )
}

export default Grid;