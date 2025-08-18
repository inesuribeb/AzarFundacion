import './CartHeader.css';

function CartHeader({ totalItems, onClose, t }) {
    return (
        <div className="cart-header">
            <div className="cart-header-spacer"></div>
            <h2 className="cart-header-title">
                {t('yourCart')} ({totalItems})
            </h2>
            <button className="cart-header-close" onClick={onClose}>
                <span className="close-line close-line-1"></span>
                <span className="close-line close-line-2"></span>
            </button>
        </div>
    );
}

export default CartHeader;