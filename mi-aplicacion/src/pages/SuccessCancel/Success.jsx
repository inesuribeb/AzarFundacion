import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './Success.css';

function Success() {
    const { t, getRoute } = useLanguage();
    const [searchParams] = useSearchParams();
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
    const { clearCart } = useCart();


    useEffect(() => {
        const sessionId = searchParams.get('session_id');
        
        if (sessionId && sessionId !== 'mock') {
            clearCart(); // Limpiar carrito al llegar a Success
        }

        if (sessionId) {
            fetchOrderData(sessionId);
        } else {
            setLoading(false);
            setError('No se encontró información del pedido');
        }
    }, [searchParams, clearCart]);

    // const fetchOrderData = async (sessionId) => {
    //     try {
    //         const response = await fetch(`/api/checkout-session/${sessionId}`);
            
    //         if (response.ok) {
    //             const data = await response.json();
    //             setOrderData(data);
    //         } else {
    //             setError('Error al obtener los datos del pedido');
    //         }
    //     } catch (err) {
    //         console.error('Error fetching order data:', err);
    //         setError('Error de conexión');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const fetchOrderData = async (sessionId) => {
        try {
            // Si es mock, usar datos de prueba
            if (sessionId === 'mock') {
                const mockData = {
                    customer_email: "cliente@ejemplo.com",
                    customer_name: "María García",
                    amount_total: 63.00,
                    currency: "eur",
                    payment_status: "paid",
                    shipping: {
                        name: "María García",
                        address: {
                            line1: "Calle Mayor 123",
                            line2: "Piso 2A",
                            city: "Madrid",
                            postal_code: "28001",
                            country: "ES"
                        }
                    }
                };
                setOrderData(mockData);
                return;
            }

            const response = await fetch(`${API_BASE_URL}/api/checkout-session/${sessionId}`);
            
            if (response.ok) {
                const data = await response.json();
                setOrderData(data);
            } else {
                setError('Error al obtener los datos del pedido');
            }
        } catch (err) {
            console.error('Error fetching order data:', err);
            setError('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="success-page">
                <div className="success-container">
                    <div className="loading">
                        <svg className="loading-spinner" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <p>{t('loading')}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="success-page">
                <div className="success-container">
                    <div className="error-message">
                        <p>{t('error')}: {error}</p>
                        <Link to={getRoute('home')} className="success-btn success-btn-primary">
                            {t('successBackHome')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="success-page">
            <div className="success-container">
                <div className="success-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                </div>
                
                <h1 className="success-title">{t('successTitle')}</h1>
                <p className="success-message">{t('successMessage')}</p>
                
                {orderData && (
                    <div className="success-order-details">
                        <h3>{t('successOrderDetails')}</h3>
                        <div className="order-info">
                            {orderData.customer_email && (
                                <div className="order-row">
                                    <span className="order-label">Email:</span>
                                    <span className="order-value">{orderData.customer_email}</span>
                                </div>
                            )}
                            {orderData.customer_name && (
                                <div className="order-row">
                                    <span className="order-label">Nombre:</span>
                                    <span className="order-value">{orderData.customer_name}</span>
                                </div>
                            )}
                            <div className="order-row">
                                <span className="order-label">Total:</span>
                                <span className="order-value">{orderData.amount_total}€</span>
                            </div>
                            {orderData.shipping && (
                                <div className="order-shipping">
                                    <span className="order-label">Dirección de envío:</span>
                                    <div className="shipping-address">
                                        <p>{orderData.shipping.name}</p>
                                        <p>{orderData.shipping.address.line1}</p>
                                        {orderData.shipping.address.line2 && (
                                            <p>{orderData.shipping.address.line2}</p>
                                        )}
                                        <p>{orderData.shipping.address.city}, {orderData.shipping.address.postal_code}</p>
                                        <p>{orderData.shipping.address.country}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                <div className="success-next-steps">
                    <h3>{t('successNextSteps')}</h3>
                    <p>{t('successShippingInfo')}</p>
                </div>
                
                <div className="success-contact">
                    <p>{t('successContactInfo')} <a href={`mailto:${t('email')}`}>{t('email')}</a></p>
                </div>
                
                <div className="success-actions">
                    <Link 
                        to={getRoute('home')} 
                        className="success-btn success-btn-primary"
                    >
                        {t('successBackHome')}
                    </Link>
                    {/* <Link 
                        to={getRoute('archive')} 
                        className="success-btn success-btn-secondary"
                    >
                        {t('successViewCatalog')}
                    </Link> */}
                    <Link 
                        to={`${getRoute('archive')}?tab=publications`}
                        className="success-btn success-btn-secondary"
                    >
                        {t('successViewCatalog')}
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Success;