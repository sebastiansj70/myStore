import { useEffect, useState } from 'react';
import { getAllProdcuts } from '../services/productService';
import { Product } from '@/entities/productInterface';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/entities/cartInterface';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { cart } = useCart();

    useEffect(() => {
        getProducts();
    }, [cart]);

    const getProducts = async () => {
        try {
            const products = await getAllProdcuts();
            const productsWithQuantities = getProductsWithQuantities(products, cart);
            setProducts(productsWithQuantities);
        } catch (err) {
            console.log('====Error fetching products:================================');
            console.log(err);
            console.log('====================================');
        }
    };

    const getProductsWithQuantities = (products: Product[], cart: CartItem | undefined): Product[] => {
        if (!cart) return products;
        return products.map(product => {
            const cartItem = cart.items.find(item => item.id === product.id);
            return {
                ...product,
                quantity: cartItem ? cartItem.quantity : 0
            };
        });
    };

    return products;
};