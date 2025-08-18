import './CartFooter.css';

function CartFooter({ totalPrice, onViewCart, onCheckout, t }) {
    return (
        <div className="cart-footer">
            <div className="cart-footer-total">
                <span className="cart-footer-total-label">Total:</span>
                <span className="cart-footer-total-price">€{totalPrice}</span>
            </div>

            <div className="cart-footer-actions">
                <button
                    className="cart-footer-btn cart-footer-btn-view"
                    onClick={onViewCart}
                >
                    {/* VER CESTA */}
                    {t('viewCart')}
                </button>
                <button
                    className="cart-footer-btn cart-footer-btn-checkout"
                    onClick={onCheckout}
                >
                    {t('checkout')}
                </button>
            </div>
        </div>
    );
}

export default CartFooter;