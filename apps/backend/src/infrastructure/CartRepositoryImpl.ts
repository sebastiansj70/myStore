import fs from 'fs-extra';
import path from 'path';
import { CartItem, Cart } from '../domain/entities/Cart';
import { Product } from '../domain/entities/Product';
import CartRepository from '../domain/repositories/CartRepository';

const cartFilePath = path.join(__dirname, '../../data/cart.json');
const productsFilePath = path.join(__dirname, '../../data/products.json');

class CartRepositoryImpl implements CartRepository {

    async addToCart(item: CartItem): Promise<Cart> {
        try {
            const cartData = await fs.readFile(cartFilePath, 'utf8');
            const cart: Cart = JSON.parse(cartData);

            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);

            const product = products.find(p => p.id === item.id);
            const { total = 0 } = cart.price

            if (!product) {
                throw new Error('Producto no encontrado');
            }

            const totalPrice = total + (product.price * item.quantity);
            cart.price.total = totalPrice

            const existingItemIndex = cart.items.findIndex((cartItem) => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                cart.items[existingItemIndex].quantity += item.quantity;
            } else {
                cart.items.push(item);
            }

            await fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2));
            return cart
        } catch (error) {
            throw new Error('Error al agregar el producto al carro');
        }
    }
}

export default CartRepositoryImpl;
