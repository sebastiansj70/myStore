import { CartItem, newItem } from '@/entities/cartInterface';
import axios from 'axios';

const API_URL = 'http://localhost:3004/cart';

export const addProductToCart = async (item: newItem): Promise<CartItem> => {
    try {
        const response = await axios.post(API_URL, item)
        return response.data
    } catch (error) {
        throw new Error('Error adding prodcuts to cart')
    }
};