import { Product } from '../../domain/entities/Product';
import ProductService from '../../domain/services/ProductService';
import ProductRepositoryImpl from '../../infrastructure/ProductRepositoryImpl';

class AddProduct {
    private productService: ProductService;

    constructor() {
        const productRepository = new ProductRepositoryImpl();
        this.productService = new ProductService(productRepository);
    }

    async execute(product: Product): Promise<void> {
        await this.productService.addProduct(product)
    }

}

export default AddProduct;
