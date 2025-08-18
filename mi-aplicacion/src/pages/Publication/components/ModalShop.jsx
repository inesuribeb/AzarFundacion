import { useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import CartHeader from './CartHeader';
import CartItemsList from './CartItemsList';
import CartFooter from './CartFooter';
import './ModalShop.css';

function ModalShop({ isOpen, onClose, cartItems = [], onUpdateCart, onRemoveItem }) {
    const { t } = useLanguage();

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Calcular totales
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
        return total + (price * item.quantity);
    }, 0).toFixed(2);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleViewCart = () => {
        console.log('Ver cesta completa');
        // Aquí puedes redirigir a una página de carrito completa
        onClose();
    };

    const handleCheckout = () => {
        console.log('Iniciar proceso de checkout');
        // Aquí puedes redirigir al proceso de compra
        onClose();
    };

    return (
        <div className="modal-shop-overlay" onClick={handleBackdropClick}>
            <div className="modal-shop-sidebar">
                <CartHeader 
                    totalItems={totalItems}
                    onClose={onClose}
                    t={t}
                />
                
                <CartItemsList 
                    cartItems={cartItems}
                    onUpdateCart={onUpdateCart}
                    onRemoveItem={onRemoveItem}
                    t={t}
                />
                
                {cartItems.length > 0 && (
                    <CartFooter 
                        totalPrice={totalPrice}
                        onViewCart={handleViewCart}
                        onCheckout={handleCheckout}
                        t={t}
                    />
                )}
            </div>
        </div>
    );
}

export default ModalShop;