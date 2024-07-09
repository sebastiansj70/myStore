import { Product } from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
    constructor(private readonly productRepository: ProductRepository) { }

    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.getAllProducts();
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.productRepository.getProductById(id);
    }

    async addProduct(product: Product): Promise<void> {
        await this.productRepository.addProduct(product);
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productRepository.deleteProduct(id);
    }

    async updateProduct(product: Product): Promise<void> {
        await this.productRepository.updateProduct(product);
    }
}

export default ProductService;
