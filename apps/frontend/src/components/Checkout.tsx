import React from 'react';
import { Button } from 'primereact/button';

interface CheckoutProps {
    total: number;
    onCheckout: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ total, onCheckout }) => {
    return (
        <div className="checkout-container">
            <div className="checkout-total">
                <span>Total: ${total.toFixed(2)}</span>
            </div>
            <div className="checkout-button">
                <Button label="Checkout" className="p-button-raised p-button-secondary" onClick={onCheckout} />
            </div>
        </div>
    );
};

export default Checkout;
