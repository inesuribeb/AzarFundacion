import { useEffect, useState } from 'react';
import './ModalShop.css';

function ModalShop({ isOpen, onClose, product, cartItems = [], onUpdateCart }) {
    const [currentQuantity, setCurrentQuantity] = useState(product.quantity || 1);
    
    // Cerrar modal con Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevenir scroll en el body
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Resetear cantidad cuando cambia el producto
    useEffect(() => {
        setCurrentQuantity(product.quantity || 1);
    }, [product.quantity]);

    if (!isOpen) return null;

    // Encontrar la cantidad del producto actual en el carrito
    const currentProductInCart = cartItems.find(item => item.id === product.id);
    const totalCurrentProduct = currentProductInCart ? currentProductInCart.quantity : 0;
    
    // Calcular precio unitario (removiendo el símbolo € y convirtiendo a número)
    const priceNumber = parseFloat(product.price.replace('€', '').replace(',', '.'));
    const totalPrice = (priceNumber * currentQuantity).toFixed(2);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 5) { // Máximo 5 unidades
            setCurrentQuantity(newQuantity);
            
            // Actualizar el carrito inmediatamente
            if (onUpdateCart) {
                onUpdateCart(product.id, newQuantity);
            }
        }
    };

    const incrementQuantity = () => {
        handleQuantityChange(currentQuantity + 1);
    };

    const decrementQuantity = () => {
        handleQuantityChange(currentQuantity - 1);
    };

    const handleViewCart = () => {
        // Aquí puedes agregar la lógica para ir al carrito
        console.log('Ver cesta');
        onClose();
    };

    const handleFinalizePurchase = () => {
        // Aquí puedes agregar la lógica para finalizar compra
        console.log('Finalizar pedido');
        onClose();
    };

    return (
        <div className="modal-shop-overlay" onClick={handleBackdropClick}>
            <div className="modal-shop-container">
                <button className="modal-shop-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-shop-content">
                    <div className="modal-shop-left">
                        <img 
                            src={product.cover} 
                            alt={product.title}
                            className="modal-shop-image"
                        />
                    </div>

                    <div className="modal-shop-right">
                        <div className="modal-shop-header">
                            <h2 className="modal-shop-title">
                                TU CESTA ({totalCurrentProduct})
                            </h2>
                        </div>

                        <div className="modal-shop-product">
                            <h3 className="modal-shop-product-title">
                                {product.title}
                            </h3>
                            <div className="modal-shop-quantity-container">
                                <button 
                                    className="modal-shop-quantity-btn"
                                    onClick={decrementQuantity}
                                    disabled={currentQuantity <= 1}
                                >
                                    -
                                </button>
                                <div className="modal-shop-quantity">
                                    {currentQuantity}
                                </div>
                                <button 
                                    className="modal-shop-quantity-btn"
                                    onClick={incrementQuantity}
                                    disabled={currentQuantity >= 5}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="modal-shop-price">
                            €{totalPrice}
                        </div>

                        <div className="modal-shop-actions">
                            <button 
                                className="modal-shop-btn modal-shop-btn-view"
                                onClick={handleViewCart}
                            >
                                VER CESTA
                            </button>
                            <button 
                                className="modal-shop-btn modal-shop-btn-checkout"
                                onClick={handleFinalizePurchase}
                            >
                                FINALIZAR PEDIDO
                            </button>
                        </div>

                        <button 
                            className="modal-shop-delete"
                            onClick={onClose}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalShop;