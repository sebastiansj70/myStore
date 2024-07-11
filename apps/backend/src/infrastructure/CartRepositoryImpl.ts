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

            if (!product) {
                throw new Error('Producto no encontrado');
            }

            this.updateCartItems(cart, product, item.quantity);

            const updatedCart = await this.calculate(cart);
            await fs.writeFile(cartFilePath, JSON.stringify(updatedCart, null, 2));

            return updatedCart
        } catch (error) {
            throw new Error('Error al agregar el producto al carro');
        }
    }



    private updateCartItems(cart: Cart, product: Product, quantity: number) {
        const { total = 0 } = cart.price;
        const itemTotalPrice = product.price * quantity;
        const totalPrice = total + itemTotalPrice;

        if (quantity === 0) {
            // Eliminar el producto del carrito si la cantidad es cero
            cart.items = cart.items.filter(cartItem => cartItem.id !== product.id);
        } else {
            const existingItemIndex = cart.items.findIndex(cartItem => cartItem.id === product.id);

            if (existingItemIndex !== -1) {
                // Actualizar la cantidad y el precio total del ítem existente
                cart.items[existingItemIndex].quantity += quantity;
                if (cart.items[existingItemIndex].quantity > 0) {
                    cart.items[existingItemIndex].price = {
                        subtotal: product.price,
                        total: product.price * cart.items[existingItemIndex].quantity
                    };
                } else {
                    //si la cantidad es menos que 1, significa que elimino el prodcuto del carrito
                    cart.items = cart.items.filter(cartItem => cartItem.id !== product.id);
                }
            } else {
                // Añadir un nuevo ítem al carrito
                cart.items.push({
                    ...product,
                    ...{ id: product.id },
                    quantity,
                    price: {
                        subtotal: product.price,
                        total: itemTotalPrice
                    }
                });
            }
        }

        // Actualizar el precio total del carrito
        cart.price.total = totalPrice;
    }


    async calculate(cart: Cart): Promise<Cart> {
        try {
            const productsData = await fs.readFile(productsFilePath, 'utf8');
            const products: Product[] = JSON.parse(productsData);

            cart.items.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    item.price = {
                        subtotal: product.price,
                        total: product.price * item.quantity
                    };
                }
            });

            cart.price.total = cart.items.reduce((acc, item) => {
                const itemTotal = item.price ? item.price.total : 0;
                return acc + itemTotal;
            }, 0);

            await fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2));
            return cart;
        } catch (error) {
            throw new Error('Error al calcular los precios del carrito');
        }
    }
}

export default CartRepositoryImpl;
