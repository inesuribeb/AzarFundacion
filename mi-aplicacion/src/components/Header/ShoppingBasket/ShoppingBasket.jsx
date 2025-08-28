import { useState, useEffect } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from '../../../contexts/CartContext';
import { useCartModal } from '../../GlobalCartModal/GlobalCartModal';
import './ShoppingBasket.css';

function ShoppingBasket({ shouldUseLightColor }) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const { cartItems } = useCart();
    const { openModal } = useCartModal();

    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        if (totalCartItems > 0) {
            setIsVisible(true);
            setShouldAnimate(true);
        } else {
            setIsVisible(false);
            setShouldAnimate(false);
        }
    }, [totalCartItems]);

    useEffect(() => {
        if (totalCartItems > 0 && isVisible) {
            setShouldAnimate(true);
            const timer = setTimeout(() => {
                setShouldAnimate(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [totalCartItems]);

    const handleOpenModal = () => {
        openModal();
    };

    if (!isVisible || totalCartItems === 0) {
        return null;
    }

    return (
        <button
            className={`shopping-basket ${shouldAnimate ? 'animate' : ''} ${shouldUseLightColor ? 'light' : ''}`}
            onClick={handleOpenModal}
            aria-label={`Carrito de compras con ${totalCartItems} artículos`}
        >
            <ShoppingBasketIcon className="shopping-basket-icon" />
            {totalCartItems > 0 && (
                <span className="shopping-basket-badge">
                    {totalCartItems}
                </span>
            )}
        </button>
    );
}

export default ShoppingBasket;