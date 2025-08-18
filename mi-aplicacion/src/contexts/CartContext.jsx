// src/contexts/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        
        if (existingItemIndex >= 0) {
            // Si el producto ya existe, actualizar la cantidad
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedItems);
        } else {
            // Si no existe, agregarlo como nuevo item
            const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                cover: product.cover,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        }
    };

    const updateCartItem = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        
        if (existingItemIndex >= 0) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity = newQuantity;
            setCartItems(updatedItems);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const value = {
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};