import { CartItem, Cart } from '../entities/Cart';
import CartRepository from '../repositories/CartRepository';

class CartService {
    constructor(private readonly cartRepository: CartRepository) { }

    async addToCart(items: CartItem): Promise<Cart> {
        return await this.cartRepository.addToCart(items);
    };

    async getCart(): Promise<Cart> {
        return await this.cartRepository.getCart();
    }

    async deleteCart(): Promise<Cart> {
        return await this.cartRepository.deleteCart();
    }
}

export default CartService;
