import { useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import CartHeader from './CartHeader';
import CartItemsList from './CartItemsList';
import ShippingZone from './ShippingZone';
import CartFooter from './CartFooter';
import './ModalShop.css';

function ModalShop({ isOpen, onClose, cartItems = [], onUpdateCart, onRemoveItem }) {
    const { t } = useLanguage();
    const [shippingCost, setShippingCost] = useState(0);
    const [hasShippingSelected, setHasShippingSelected] = useState(false);

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

    useEffect(() => {
        if (!isOpen) {
            setShippingCost(0);
            setHasShippingSelected(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
        return total + (price * item.quantity);
    }, 0);

    const totalPrice = (subtotalPrice + shippingCost).toFixed(2);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleViewCart = () => {
        console.log('Ver cesta completa');
        onClose();
    };


    const handleCheckout = async () => {
        if (!hasShippingSelected) {
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3001/api/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems,
                    shippingCost: shippingCost
                })
            });
            
            const data = await response.json();
            
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error al procesar checkout:', error);
        }
    };

    const handleShippingChange = (cost) => {
        setShippingCost(cost);
        setHasShippingSelected(cost > 0);
    };

    return (
        <div className="modal-shop-overlay" onClick={handleBackdropClick}>
            <div className="modal-shop-sidebar">
                <CartHeader 
                    totalItems={totalItems}
                    onClose={onClose}
                    t={t}
                />
                
                <div className="cart-scrollable-content">
                    <CartItemsList 
                        cartItems={cartItems}
                        onUpdateCart={onUpdateCart}
                        onRemoveItem={onRemoveItem}
                        t={t}
                    />

                    {cartItems.length > 0 && (
                        <ShippingZone onShippingChange={handleShippingChange} />
                    )}
                </div>
                
                {cartItems.length > 0 && (
                    <CartFooter 
                        subtotalPrice={subtotalPrice.toFixed(2)}
                        shippingCost={shippingCost}
                        totalPrice={totalPrice}
                        hasShippingSelected={hasShippingSelected}
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