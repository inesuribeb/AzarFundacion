import './CartItem.css';

function CartItem({ item, onUpdateQuantity, onRemove, t }) {
    // console.log('🛍️ CartItem props:', { onUpdateQuantity, onRemove, isFunction: typeof onRemove === 'function' });

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 5) {
            onUpdateQuantity(item.id, newQuantity);
        }
    };

    const incrementQuantity = () => {
        handleQuantityChange(item.quantity + 1);
    };

    const decrementQuantity = () => {
        handleQuantityChange(item.quantity - 1);
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    // Calcular precio individual
    const priceNumber = parseFloat(item.price.replace('€', '').replace(',', '.'));
    const totalItemPrice = (priceNumber * item.quantity).toFixed(2);

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img 
                    src={item.cover} 
                    alt={item.title}
                />
            </div>
            
            <div className="cart-item-content">
                <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <div className="cart-item-price">€{totalItemPrice}</div>
                </div>
                
                <div className="cart-item-controls">
                    <div className="cart-item-quantity-container">
                        <button 
                            className="cart-item-quantity-btn"
                            onClick={decrementQuantity}
                            disabled={item.quantity <= 1}
                        >
                            -
                        </button>
                        <div className="cart-item-quantity">
                            {item.quantity}
                        </div>
                        <button 
                            className="cart-item-quantity-btn"
                            onClick={incrementQuantity}
                            disabled={item.quantity >= 5}
                        >
                            +
                        </button>
                    </div>
                    
                    <button 
                        className="cart-item-remove"
                        onClick={handleRemove}
                    >
                        {t('delete')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;