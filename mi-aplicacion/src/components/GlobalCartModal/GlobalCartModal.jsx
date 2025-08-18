import { useState } from 'react';
import ModalShop from '../../pages/Publication/components/ModalShop';
import { useCart } from '../../contexts/CartContext';
import { createContext, useContext } from 'react';

const CartModalContext = createContext();

export const useCartModal = () => {
    const context = useContext(CartModalContext);
    if (!context) {
        throw new Error('useCartModal must be used within a CartModalProvider');
    }
    return context;
};

export const CartModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cartItems, updateCartItem, removeFromCart } = useCart();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <CartModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isModalOpen && (
                <ModalShop
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    cartItems={cartItems}
                    onUpdateCart={updateCartItem}
                    onRemoveItem={removeFromCart}
                />
            )}
        </CartModalContext.Provider>
    );
};