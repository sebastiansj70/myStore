import { CartItem, Cart } from '../entities/Cart';
import CartRepository from '../repositories/CartRepository';

class CartService {
    constructor(private readonly cartRepository: CartRepository) { }

    async addToCart(items: CartItem): Promise<Cart> {
        return this.cartRepository.addToCart(items);
    }
}

export default CartService;
