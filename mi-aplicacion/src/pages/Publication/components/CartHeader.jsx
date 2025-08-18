import './CartHeader.css';

function CartHeader({ totalItems, onClose }) {
    return (
        <div className="cart-header">
            <h2 className="cart-header-title">
                TU CESTA ({totalItems})
            </h2>
            <button className="cart-header-close" onClick={onClose}>
                ×
            </button>
        </div>
    );
}

export default CartHeader;