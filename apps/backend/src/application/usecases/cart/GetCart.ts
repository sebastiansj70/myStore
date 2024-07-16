import CartService from '../../../domain/services/CartService';
import CartRepositoryImpl from '../../../infrastructure/CartRepositoryImpl';

class GetCart {
    private cartService: CartService;

    constructor() {
        const cartRepository = new CartRepositoryImpl();
        this.cartService = new CartService(cartRepository);
    }

    async execute() {
        return await this.cartService.getCart()
    }
}

export default GetCart;
