import { useState, useEffect } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ModalShop from '../../../pages/Publication/components/ModalShop';
import { useCart } from '../../../contexts/CartContext';
import './ShoppingBasket.css';

function ShoppingBasket({ shouldUseLightColor }) {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const { cartItems, updateCartItem, removeFromCart } = useCart();

    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // console.log('🎯 ShoppingBasket render:', { 
    //     cartItems, 
    //     totalCartItems, 
    //     isVisible 
    // });

    useEffect(() => {
        if (totalCartItems > 0 && !isVisible) {
            setIsVisible(true);
            setShouldAnimate(true);
        } else if (totalCartItems === 0 && isVisible) {
            setIsVisible(false);
            setShouldAnimate(false);
        }
    }, [totalCartItems, isVisible]);

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
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (!isVisible || totalCartItems === 0) {
        return null;
    }

    return (
        <>
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

            {showModal && (
                <ModalShop
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    cartItems={cartItems}
                    onUpdateCart={updateCartItem}
                    onRemoveItem={removeFromCart}
                />
            )}
        </>
    );
}

export default ShoppingBasket;