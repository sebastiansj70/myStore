import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Product } from '../entities/productInterface';
import { CartItem } from '@/entities/cartInterface';
import { useCart } from '../context/CartContext';
import { addProductToCart } from "@/services/cartService";


interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const { setCart } = useCart();

    const handleAddToCart = async (newQuantity: number) => {
        const cart = await addProductToCart({ id: product.id, quantity: newQuantity });
        setCart(cart)
    };

    const handleIncrement = async () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        await handleAddToCart(1)
    };

    const handleDecrement = async () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            await handleAddToCart(-1)
        } else if (quantity === 1) {
            setQuantity(0);
            await handleAddToCart(0)
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
                        {
                            product.quantity > 0 ?
                                <div className="quantity-input">
                                    <Button icon="pi pi-minus" onClick={handleDecrement} />
                                    <span>{product.quantity}</span>
                                    <Button icon="pi pi-plus" onClick={handleIncrement} />
                                </div>
                                :
                                <Button label="Agregar" icon="pi pi-shopping-cart" className="p-button-raised p-button-rounded" onClick={handleIncrement} />

                        }
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;
