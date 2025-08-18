import { useState, useEffect } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ModalShop from '../../../pages/Publication/components/ModalShop';
import './ShoppingBasket.css';

function ShoppingBasket({ cartItems = [], onUpdateCart, shouldUseLightColor }) {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // Calcular total de items en el carrito
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // console.log('🎯 ShoppingBasket render:', { 
    //     cartItems, 
    //     totalCartItems, 
    //     isVisible 
    // });
    // Mostrar/ocultar el componente basado en si hay items
    useEffect(() => {
        if (totalCartItems > 0 && !isVisible) {
            setIsVisible(true);
            setShouldAnimate(true);
        } else if (totalCartItems === 0 && isVisible) {
            setIsVisible(false);
            setShouldAnimate(false);
        }
    }, [totalCartItems, isVisible]);

    // Animación cuando se añade un item
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

    // Si no hay items, no renderizar nada
    if (!isVisible || totalCartItems === 0) {
        return null;
    }

    // Para el modal, necesitamos un producto "resumen" o el último añadido
    // Por ahora, tomaremos el primer producto del carrito
    const firstProduct = cartItems[0];

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

            {showModal && firstProduct && (
                <ModalShop
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    product={{
                        id: firstProduct.id,
                        title: firstProduct.title || 'Producto',
                        price: firstProduct.price || '€0.00',
                        cover: firstProduct.cover || '',
                        quantity: firstProduct.quantity
                    }}
                    cartItems={cartItems}
                    onUpdateCart={onUpdateCart}
                />
            )}
        </>
    );
}

export default ShoppingBasket;