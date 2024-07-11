import { Product } from '@/entities/productInterface';
import axios from 'axios';

const API_URL = 'http://localhost:3004/products';

export const getAllProdcuts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw new Error('Error in obtaining products')
    }
};

export const getProdcut = async (id: string): Promise<Product> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data
    } catch (error) {
        throw new Error('Error in obtaining a product')
    }
};

export const updateProdcut = async (item: Product): Promise<void> => {
    try {
        await axios.put(API_URL, item)
    } catch (error) {
        throw new Error('Error when updating a product')
    }
};