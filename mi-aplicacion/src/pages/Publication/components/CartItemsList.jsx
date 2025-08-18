import CartItem from './CartItem';
import './CartItemsList.css';

function CartItemsList({ cartItems, onUpdateCart, onRemoveItem, t }) {

    // console.log('📋 CartItemsList props:', { onUpdateCart, onRemoveItem, isFunction: typeof onRemoveItem === 'function' });

    if (cartItems.length === 0) {
        return (
            <div className="cart-items-empty">
                <p>{t('emptyCart')}</p>
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
                    t={t}
                />
            ))}
        </div>
    );
}

export default CartItemsList;