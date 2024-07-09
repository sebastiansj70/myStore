import ProductService from '../../domain/services/ProductService';
import ProductRepositoryImpl from '../../infrastructure/ProductRepositoryImpl';

class GetAllProducts {
    private productService: ProductService;

    constructor() {
        const productRepository = new ProductRepositoryImpl();
        this.productService = new ProductService(productRepository);
    }

    async execute(): Promise<void> {
        await this.productService.getAllProducts()
    }

}

export default GetAllProducts;
