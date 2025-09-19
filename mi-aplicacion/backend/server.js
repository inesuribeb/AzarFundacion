require('dotenv').config();

const BASE_URL = process.env.BASE_URL
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/producto', (req, res) => {
    try {
        const producto = JSON.parse(fs.readFileSync('./publication.json', 'utf8'));
        res.json(producto);
    } catch (error) {
        console.error('Error leyendo producto:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Endpoint para crear checkout session de Stripe
app.post('/api/create-checkout', async (req, res) => {
    try {
        const { items, shippingCost } = req.body;

        // Debug: mostrar lo que recibimos
        console.log('Items recibidos:', items);
        console.log('Shipping cost:', shippingCost);

        // Leer producto del JSON para verificar availability y precio
        const producto = JSON.parse(fs.readFileSync('./publication.json', 'utf8'));

        if (!producto.availability) {
            return res.status(400).json({ error: 'Producto no disponible' });
        }

        // Calcular precio del producto y cantidad total
        const productPrice = parseFloat(producto.price.replace('€', '').replace(',', '.'));
        const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

        console.log('Precio por unidad:', productPrice);
        console.log('Cantidad total:', totalQuantity);

        // Crear sesión de checkout
        const session = await stripe.checkout.sessions.create({
            // payment_method_types: ['card'],
            payment_method_types: [
                'card',           // Universal - funciona en todo el mundo
                'sepa_debit',     // Domiciliación bancaria Europa - muy popular
                'sofort'          // Transferencia bancaria instantánea Alemania/Austria
            ],
            shipping_address_collection: {
                allowed_countries: [
                    // España
                    'ES',
                    // Europa
                    'FR', 'DE', 'IT', 'PT', 'BE', 'NL', 'AT', 'GB', 'CH', 'NO', 'SE', 'DK', 'FI', 'IE', 'LU', 'GR', 'CZ', 'PL', 'HU', 'SK', 'SI', 'HR', 'BG', 'RO', 'EE', 'LV', 'LT', 'CY', 'MT',
                    // Sudamérica completa
                    'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE',
                    // Otros internacionales principales
                    'US', 'CA', 'AU', 'JP', 'MX'
                ],
            },
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: producto.title,
                            description: producto.description,
                            images: producto.image ? [producto.image] : [],
                        },
                        unit_amount: productPrice * 100,
                    },
                    quantity: totalQuantity,
                },
                // Añadir envío como línea separada si es mayor a 0
                ...(shippingCost > 0 ? [{
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Envío',
                            description: 'Gastos de envío',
                        },
                        unit_amount: shippingCost * 100,
                    },
                    quantity: 1,
                }] : []),
            ],
            mode: 'payment',
            success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${BASE_URL}/cancel`,
            automatic_tax: {
                enabled: false,
            },
            metadata: {
                productId: producto.id,
                shippingCost: shippingCost.toString(),
                totalQuantity: totalQuantity.toString(),
            },
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creando checkout:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Endpoint para obtener detalles de la sesión (para página de éxito)
app.get('/api/checkout-session/:sessionId', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
        res.json({
            customer_email: session.customer_details?.email,
            customer_name: session.customer_details?.name,
            amount_total: session.amount_total / 100,
            currency: session.currency,
            payment_status: session.payment_status,
            shipping: session.shipping,
        });
    } catch (error) {
        console.error('Error obteniendo sesión:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Webhook de Stripe para confirmar pagos
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        // Aquí irá tu webhook secret cuando lo configures en producción
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || 'whsec_TU_WEBHOOK_SECRET');
    } catch (err) {
        console.log(`Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Manejar el evento
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('¡Pago completado!');
            console.log('ID de sesión:', session.id);
            console.log('Email del cliente:', session.customer_details?.email);
            console.log('Nombre del cliente:', session.customer_details?.name);
            console.log('Total pagado:', session.amount_total / 100, session.currency.toUpperCase());
            console.log('Dirección de envío:', session.shipping);

            // Aquí podrías:
            // - Enviar email de confirmación al cliente
            // - Actualizar availability si se agota stock
            // - Guardar información del pedido en base de datos
            // - Integrar con sistema de envíos

            break;
        case 'payment_intent.succeeded':
            console.log('Pago procesado correctamente');
            break;
        case 'payment_intent.payment_failed':
            console.log('Pago fallido');
            break;
        default:
            console.log(`Evento no manejado: ${event.type}`);
    }

    res.json({ received: true });
});

// Endpoint de health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend funcionando en puerto ${PORT}`);
    console.log(`Health check disponible en http://localhost:${PORT}/health`);
});