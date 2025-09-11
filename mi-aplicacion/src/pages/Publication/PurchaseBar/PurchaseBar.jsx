// PurchaseBar.js
import { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
import { useCartModal } from '../../../components/GlobalCartModal/GlobalCartModal';
import './PurchaseBar.css';

function PurchaseBar({ publication, t }) {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { addToCart } = useCart();
    const { openModal } = useCartModal();

    const handleAddToCart = () => {
        addToCart({
            id: publication.id,
            title: publication.title,
            price: publication.price,
            cover: publication.cover
        }, selectedQuantity);
        
        openModal();
    };

    const handleQuantityChange = (e) => {
        setSelectedQuantity(parseInt(e.target.value));
    };

    return (
        <div className="pub-page-purchase-bar">
            <div className="pub-page-price">
                {publication.price}
            </div>

            <div className="pub-page-spacer"></div>

            <div className="pub-page-quantity">
                <select 
                    className="pub-quantity-selector"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <button 
                className="pub-page-cart-btn"
                onClick={handleAddToCart}
            >
                {t('addToCart')}
            </button>
        </div>
    );
}

export default PurchaseBar;