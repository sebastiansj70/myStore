import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Product } from '../entities/productInterface';

interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const [showQuantityInput, setShowQuantityInput] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        onAddToCart();
        setShowQuantityInput(true);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="product-card-container">
            <Card title={product.name} className="product-card p-shadow-2">
                <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-details">
                    <span>{product.description}</span>
                    <p className="product-price">{`$ ${product.price}`}</p>
                    <div className='btn-card-container'>
                        {!showQuantityInput && (
                            <Button label="Agregar" icon="pi pi-shopping-cart" className="p-button-raised p-button-rounded" onClick={handleAddToCart} />
                        )}
                        {showQuantityInput && (
                            <div className="quantity-input">
                                <Button icon="pi pi-minus" onClick={handleDecrement} />
                                <span>{quantity}</span>
                                <Button icon="pi pi-plus" onClick={handleIncrement} />
                            </div>
                        )}
                        {/* <Button label="Agregar" icon="pi pi-shopping-cart" className="p-button-raised p-button-rounded" onClick={onAddToCart} /> */}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;
