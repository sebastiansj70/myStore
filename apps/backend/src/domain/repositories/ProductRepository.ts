import { Product } from '../entities/Product';

interface ProductRepository {
 addProduct(product: Product): Promise<void>;
 getAllProducts(): Promise<Product[]>;
 getProductById(id: string): Promise<Product | null>;
 addProduct(product: Product): Promise<void>;
 deleteProduct(id: string): Promise<void>;
 updateProduct(product: Product): Promise<void>;
}

export default ProductRepository;
