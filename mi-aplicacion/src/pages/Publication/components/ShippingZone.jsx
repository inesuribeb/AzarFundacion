import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './ShippingZone.css';

function ShippingZone({ onShippingChange }) {
    const { t } = useLanguage();
    const [selectedZone, setSelectedZone] = useState('');

    const shippingZones = [
        { id: 'spain', label: t('spain') || 'España', price: 8 },
        { id: 'europe', label: t('europe') || 'Europa', price: 15 },
        { id: 'international', label: t('international') || 'Internacional', price: 25 }
    ];

    const handleZoneChange = (zoneId) => {
        setSelectedZone(zoneId);
        const selectedZoneData = shippingZones.find(zone => zone.id === zoneId);
        onShippingChange(selectedZoneData ? selectedZoneData.price : 0);
    };

    return (
        <div className="shipping-zone">
            <h3 className="shipping-zone-title">
                {t('shippingZone') || 'Zona de envío'}:
            </h3>
            
            <div className="shipping-zone-options">
                {shippingZones.map((zone) => (
                    <div 
                        key={zone.id} 
                        className={`shipping-zone-option ${selectedZone === zone.id ? 'selected' : ''}`}
                        onClick={() => handleZoneChange(zone.id)}
                    >
                        <div className="shipping-zone-info">
                            <span className="shipping-zone-label">{zone.label}</span>
                            <span className="shipping-zone-separator">|</span>
                            <span className="shipping-zone-price">€{zone.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* {selectedZone && (
                <div className="shipping-zone-selected">
                    <p className="shipping-zone-note">
                        {t('shippingNote') || 'Los gastos de envío se añadirán al total'}
                    </p>
                </div>
            )} */}
        </div>
    );
}

export default ShippingZone;