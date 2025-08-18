import CartItem from './CartItem';
import './CartItemsList.css';

function CartItemsList({ cartItems, onUpdateCart, onRemoveItem }) {

    // console.log('📋 CartItemsList props:', { onUpdateCart, onRemoveItem, isFunction: typeof onRemoveItem === 'function' });

    if (cartItems.length === 0) {
        return (
            <div className="cart-items-empty">
                <p>Tu cesta está vacía</p>
            </div>
        );
    }

    return (
        <div className="cart-items-list">
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateCart}
                    onRemove={onRemoveItem}
                />
            ))}
        </div>
    );
}

export default CartItemsList;