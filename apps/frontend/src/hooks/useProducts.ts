import { useEffect, useState } from 'react';
import { getAllProdcuts } from '../services/productService';
import { Product } from '@/entities/productInterface';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const products = await getAllProdcuts();
            setProducts(products);
        } catch (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        }
    };


    return products;
};