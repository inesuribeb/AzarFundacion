import { useState, useEffect } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from '../../../contexts/CartContext';
import { useCartModal } from '../../GlobalCartModal/GlobalCartModal';
import './ShoppingBasket.css';

// function ShoppingBasket({ shouldUseLightColor }) {
//     const [isVisible, setIsVisible] = useState(false);
//     const [shouldAnimate, setShouldAnimate] = useState(false);
//     const { cartItems } = useCart();
//     const { openModal } = useCartModal();

//     const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//     useEffect(() => {
//         if (totalCartItems > 0 && !isVisible) {
//             setIsVisible(true);
//             setShouldAnimate(true);
//         } else if (totalCartItems === 0 && isVisible) {
//             setIsVisible(false);
//             setShouldAnimate(false);
//         }
//     }, [totalCartItems, isVisible]);

//     useEffect(() => {
//         if (totalCartItems > 0 && isVisible) {
//             setShouldAnimate(true);
//             const timer = setTimeout(() => {
//                 setShouldAnimate(false);
//             }, 600);
//             return () => clearTimeout(timer);
//         }
//     }, [totalCartItems]);

//     const handleOpenModal = () => {
//         openModal();
//     };

//     if (!isVisible || totalCartItems === 0) {
//         return null;
//     }

//     return (
//         <button
//             className={`shopping-basket ${shouldAnimate ? 'animate' : ''} ${shouldUseLightColor ? 'light' : ''}`}
//             onClick={handleOpenModal}
//             aria-label={`Carrito de compras con ${totalCartItems} artículos`}
//         >
//             <ShoppingBasketIcon className="shopping-basket-icon" />
//             {totalCartItems > 0 && (
//                 <span className="shopping-basket-badge">
//                     {totalCartItems}
//                 </span>
//             )}
//         </button>
//     );
// }

// export default ShoppingBasket;

function ShoppingBasket({ shouldUseLightColor }) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const { cartItems } = useCart();
    const { openModal } = useCartModal();

    // Calcular total de items en el carrito
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);



    // Mostrar/ocultar el componente basado en si hay items
    useEffect(() => {
        if (totalCartItems > 0) {
            setIsVisible(true);
            setShouldAnimate(true);
        } else {
            setIsVisible(false);
            setShouldAnimate(false);
        }
    }, [totalCartItems]);

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
        openModal();
    };

    // Si no hay items, no renderizar nada
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