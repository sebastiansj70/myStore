import CartService from '../../../domain/services/CartService';
import CartRepositoryImpl from '../../../infrastructure/CartRepositoryImpl';

class DeleteCart {
    private cartService: CartService;

    constructor() {
        const cartRepository = new CartRepositoryImpl();
        this.cartService = new CartService(cartRepository);
    }

    async execute() {
        return await this.cartService.deleteCart()
    }
}

export default DeleteCart;
