import { Product } from '../../domain/entities/Product';
import ProductService from '../../domain/services/ProductService';
import ProductRepositoryImpl from '../../infrastructure/ProductRepositoryImpl';

class UpdateProduct {
    private productService: ProductService;

    constructor() {
        const productRepository = new ProductRepositoryImpl();
        this.productService = new ProductService(productRepository);
    }

    async execute(product: Product) {
       return await this.productService.updateProduct(product)
    }

}

export default UpdateProduct;
