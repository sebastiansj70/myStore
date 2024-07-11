import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, newItem } from '@/entities/cartInterface';
import { addProductToCart } from '@/services/cartService';

interface CartContextType {
    cart: CartItem | undefined;
    addToCart: (item: newItem) => void;
    loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem>();
    const [loading, setLoading] = useState<boolean>(false);

    const addToCart = async (item: newItem) => {
        setLoading(true)
        try {
            const newCart = await addProductToCart(item)
            setCart(newCart)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, loading }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};