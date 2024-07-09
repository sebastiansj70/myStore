import ProductService from '../../../domain/services/ProductService';
import ProductRepositoryImpl from '../../../infrastructure/ProductRepositoryImpl';

class GetProduct {
    private productService: ProductService;

    constructor() {
        const productRepository = new ProductRepositoryImpl();
        this.productService = new ProductService(productRepository);
    }

    async execute(id: string) {
        return await this.productService.getProductById(id)
    }

}

export default GetProduct;
