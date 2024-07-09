import { CartItem, Cart } from '../entities/Cart';

interface CartRepository {
 addToCart(items: CartItem): Promise<Cart>;
}

export default CartRepository;
