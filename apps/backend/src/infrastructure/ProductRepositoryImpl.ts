// src/infrastructure/repositories/ProductRepositoryImpl.ts
import fs from 'fs-extra';
import path from 'path';
import { Product } from '../domain/entities/Product';
import ProductRepository from '../domain/repositories/ProductRepository';

const productsFilePath = path.join(__dirname, '../../data/products.json');

class ProductRepositoryImpl implements ProductRepository {

    async addProduct(product: Product): Promise<void> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);
            products.push(product);
            await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
        } catch (error) {
            throw new Error('Error al agregar el producto');
        }
    }
    async getAllProducts(): Promise<Product[]> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);

            return products;
        } catch (error) {
            throw new Error('Error al obtener los productos');
        }
    }

    async getProductById(id: string): Promise<Product | null> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);
            const product = products.find(p => p.id === id);
            return product || null;
        } catch (error) {
            throw new Error('Error al obtener el producto por ID');
        }
    }

    async saveProduct(product: Product): Promise<void> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);
            products.push(product);
            await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
        } catch (error) {
            throw new Error('Error al guardar el producto');
        }
    }

    async deleteProduct(id: string): Promise<void> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            let products: Product[] = JSON.parse(productsData);
            products = products.filter(p => p.id !== id);
            await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
        } catch (error) {
            throw new Error('Error al eliminar el producto');
        }
    }

    async updateProduct(updateProduct: Product): Promise<void> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            let products: Product[] = JSON.parse(productsData);
            const index = products.findIndex((product: Product) => product.id === updateProduct.id);
            if (index !== -1) {
                products[index] = { ...updateProduct };
            }
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        } catch (error) {
            throw new Error('Error al actualizar el producto');
        }
    }
}

export default ProductRepositoryImpl;
