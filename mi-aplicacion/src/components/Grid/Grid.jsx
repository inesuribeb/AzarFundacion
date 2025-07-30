import GenericCard from '../GenericCard/GenericCard'
import './Grid.css'

function Grid({ 
    cards = [], 
    className = '' 
}) {
    // Determinar número de columnas basado en cantidad de cards
    const getGridColumns = (cardCount) => {
        if (cardCount === 1) return 1
        if (cardCount === 2) return 2
        if (cardCount === 3) return 3
        return 4 // 4 o más cards = 4 columnas máximo
    }

    const gridColumns = getGridColumns(cards.length)

    return (
        <div 
            className={`grid ${className}`}
            style={{ '--grid-columns': gridColumns }}
        >
            {cards.map((card, index) => (
                <GenericCard
                    key={card.id || index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    onClick={card.onClick}
                    className={card.className}
                />
            ))}
        </div>
    )
}

export default Grid;