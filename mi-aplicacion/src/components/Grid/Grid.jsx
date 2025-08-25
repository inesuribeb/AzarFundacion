import GenericCard from '../GenericCard/GenericCard';
import PublicationCard from '../GenericCard/PublicationCard';
import './Grid.css';

function Grid({ 
    cards = [], 
    className = '',
    cardType = 'generic' 
}) {
    const getGridColumns = (cardCount) => {
        if (cardType === 'publications') return 1
        
        if (cardCount === 1) return 1
        if (cardCount === 2) return 2
        if (cardCount === 3) return 3
        return 4 
    }

    const gridColumns = getGridColumns(cards.length)

    // const renderCard = (card, index) => {
    //     if (cardType === 'publications') {
    //         return (
    //             <PublicationCard
    //                 key={card.id || index}
    //                 images={card.images}
    //                 title={card.title}
    //                 number={card.number}
    //                 price={card.price}
    //                 onClick={card.onClick}
    //                 className={card.className}
    //             />
    //         )
    //     } else {
    //         return (
    //             <GenericCard
    //                 key={card.id || index}
    //                 image={card.images ? card.images[0] : card.image} 
    //                 title={card.title}
    //                 description={card.description}
    //                 onClick={card.onClick}
    //                 className={card.className}
    //             />
    //         )
    //     }
    // }

    const renderCard = (card, index) => {
        const isSingle = cards.length === 1; // ← Detectar si hay solo una card
        
        if (cardType === 'publications') {
            return (
                <PublicationCard
                    key={card.id || index}
                    images={card.images}
                    title={card.title}
                    number={card.number}
                    price={card.price}
                    onClick={card.onClick}
                    className={card.className}
                    isSingle={isSingle} // ← Pasar la prop
                />
            )
        } else {
            return (
                <GenericCard
                    key={card.id || index}
                    image={card.images ? card.images[0] : card.image} 
                    title={card.title}
                    description={card.description}
                    onClick={card.onClick}
                    className={card.className}
                    isSingle={isSingle} // ← Pasar la prop
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