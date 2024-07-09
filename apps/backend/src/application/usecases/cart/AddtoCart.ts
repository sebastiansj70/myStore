import { CartItem } from '../../../domain/entities/Cart';
import CartService from '../../../domain/services/CartService';
import CartRepositoryImpl from '../../../infrastructure/CartRepositoryImpl';

class AddtoCart {
    private cartService: CartService;

    constructor() {
        const cartRepository = new CartRepositoryImpl();
        this.cartService = new CartService(cartRepository);
    }

    async execute(item: CartItem) {
        return await this.cartService.addToCart(item)
    }

}

export default AddtoCart;
