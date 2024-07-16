import React from 'react';
import { Button } from 'primereact/button';
import { Product } from '@/entities/productInterface';

interface CartItemProps {
    item: Product;
    onAdd: () => void;
    onRemove: () => void;
    onDelete: ({ }) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onAdd, onRemove, onDelete }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${item.price.subtotal} × {item.quantity}</div>
            </div>
            <div className="cart-item-actions">
                <Button icon="pi pi-minus" onClick={() => { }} className="p-button-rounded p-button-text" />
                <span>{item.quantity}</span>
                <Button icon="pi pi-plus" onClick={() => { }} className="p-button-rounded p-button-text" />
                <Button icon="pi pi-trash" onClick={() => { }} className="p-button-rounded p-button-danger p-button-text" />
            </div>
        </div>
    );
};

export default CartItem;
