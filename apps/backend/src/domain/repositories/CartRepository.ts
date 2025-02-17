import { CartItem, Cart } from '../entities/Cart';

interface CartRepository {
    addToCart(items: CartItem): Promise<Cart>;
    getCart(): Promise<Cart>;
    deleteCart(): Promise<Cart>;
}

export default CartRepository;
