// import { useState } from 'react';
// import ImageCarousel from '../../../../components/ImageCarousel/ImageCarousel';
// import ModalShop from '../../components/ModalShop';
// import './CoverPublication.css';

// function CoverPublication({ publication }) {
//     const [showModal, setShowModal] = useState(false);
//     const [selectedQuantity, setSelectedQuantity] = useState(1);
    
//     const [cartItems, setCartItems] = useState([
//     ]);

//     if (!publication) return null;

//     const handleAddToCart = () => {
//         const newItem = {
//             id: publication.id,
//             quantity: selectedQuantity
//         };
        
//         const existingItemIndex = cartItems.findIndex(item => item.id === publication.id);
        
//         if (existingItemIndex >= 0) {
//             const updatedItems = [...cartItems];
//             updatedItems[existingItemIndex].quantity += selectedQuantity;
//             setCartItems(updatedItems);
//         } else {
//             setCartItems([...cartItems, newItem]);
//         }
        
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleUpdateCart = (productId, newQuantity) => {
//         const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        
//         if (existingItemIndex >= 0) {
//             const updatedItems = [...cartItems];
//             updatedItems[existingItemIndex].quantity = newQuantity;
//             setCartItems(updatedItems);
//         }
//     };

//     const handleQuantityChange = (e) => {
//         setSelectedQuantity(parseInt(e.target.value));
//     };

//     return (
//         <section className='cover-pub-page'>
//             <div className="pub-page-header">
//                 <h1
//                     className="pub-page-title"
//                     dangerouslySetInnerHTML={{ __html: publication.title }}
//                 />
//             </div>

//             <div className="pub-page-viewer-container">
//                 <ImageCarousel
//                     images={publication.images}
//                     title={publication.title}
//                     showCounter={true}    
//                     showDots={false}       
//                     showArrows={false}     
//                     clickNavigation={true}  
//                     className="publication-viewer-carousel"
//                 />
//             </div>

//             <div className="pub-page-purchase-bar">
//                 <div className="pub-page-price">
//                     {publication.price}
//                 </div>

//                 <div className="pub-page-spacer"></div>

//                 <div className="pub-page-quantity">
//                     <select 
//                         className="pub-quantity-selector"
//                         value={selectedQuantity}
//                         onChange={handleQuantityChange}
//                     >
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                     </select>
//                 </div>

//                 <button 
//                     className="pub-page-cart-btn"
//                     onClick={handleAddToCart}
//                 >
//                     Añadir a la cesta
//                 </button>
//             </div>

//             {showModal && (
//                 <ModalShop
//                     isOpen={showModal}
//                     onClose={handleCloseModal}
//                     product={{
//                         id: publication.id,
//                         title: publication.title,
//                         price: publication.price,
//                         cover: publication.cover,
//                         quantity: selectedQuantity
//                     }}
//                     cartItems={cartItems}
//                     onUpdateCart={handleUpdateCart}
//                 />
//             )}
//         </section>
//     );
// }

// export default CoverPublication;

import { useState } from 'react';
import { useCart } from '../../../../contexts/CartContext';
import ImageCarousel from '../../../../components/ImageCarousel/ImageCarousel';
import ModalShop from '../../components/ModalShop';
import './CoverPublication.css';

function CoverPublication({ publication }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { cartItems, addToCart, updateCartItem } = useCart();

    if (!publication) return null;

    // const handleAddToCart = () => {
    //     addToCart({
    //         id: publication.id,
    //         title: publication.title,
    //         price: publication.price,
    //         cover: publication.cover
    //     }, selectedQuantity);
        
    //     setShowModal(true);
    // };
    const handleAddToCart = () => {
        console.log('🛒 Añadiendo al carrito:', {
            id: publication.id,
            title: publication.title,
            price: publication.price,
            quantity: selectedQuantity
        });
        
        addToCart({
            id: publication.id,
            title: publication.title,
            price: publication.price,
            cover: publication.cover
        }, selectedQuantity);
        
        // console.log('🛒 CartItems después de añadir:', cartItems);
        
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleQuantityChange = (e) => {
        setSelectedQuantity(parseInt(e.target.value));
    };

    return (
        <section className='cover-pub-page'>
            <div className="pub-page-header">
                <h1
                    className="pub-page-title"
                    dangerouslySetInnerHTML={{ __html: publication.title }}
                />
            </div>

            <div className="pub-page-viewer-container">
                <ImageCarousel
                    images={publication.images}
                    title={publication.title}
                    showCounter={true}    
                    showDots={false}       
                    showArrows={false}     
                    clickNavigation={true}  
                    className="publication-viewer-carousel"
                />
            </div>

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
                    Añadir a la cesta
                </button>
            </div>

            {showModal && (
                <ModalShop
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    product={{
                        id: publication.id,
                        title: publication.title,
                        price: publication.price,
                        cover: publication.cover,
                        quantity: selectedQuantity
                    }}
                    cartItems={cartItems}
                    onUpdateCart={updateCartItem}
                />
            )}
        </section>
    );
}

export default CoverPublication;