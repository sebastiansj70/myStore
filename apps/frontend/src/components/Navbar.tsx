import React, { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useCart } from '../context/CartContext';
import { Badge } from 'primereact/badge';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { addProductToCart, deleteCart, getCart } from '@/services/cartService';
import { Product } from '@/entities/productInterface';


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { cart, setCart } = useCart();
    const [countCart, setCountCart] = useState(0)



    const storeNameStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
    };
    useEffect(() => {
        getAllCarts()
    }, [])

    const getAllCarts = async () => {
        const carts = await getCart();
        setCart(carts)
    }


    useEffect(() => {
        setCountCart(cart?.items.length || 0)
    }, [cart])

    const handleAddToCart = async (newQuantity: number, product: Product) => {
        const cart = await addProductToCart({ id: product.id, quantity: newQuantity });
        setCart(cart)
    };

    const handleIncrement = async (product: Product) => {
        await handleAddToCart(1, product)
    };

    const handleDecrement = async (product: Product) => {
        if (product.quantity > 1) {
            await handleAddToCart(-1, product)
        } else if (product.quantity === 1) {
            await handleAddToCart(0, product)
        }
    };

    const handleRemoveItemCart = async (product: Product) => {
        await handleAddToCart(0, product)
    };

    const handleResetCart = async () => {
        const data = await deleteCart()
        setCart(data)
    }
    return (
        <div>
            <div className="navbar">
                <div style={storeNameStyle}>MyStore</div>
                <Button icon="pi pi-shopping-cart" onClick={() => setVisible(true)} >
                    {countCart > 0 &&
                        <Badge value={countCart} severity="danger"></Badge>
                    }
                </Button>
            </div>
            <Sidebar visible={visible} position="right" onHide={() => setVisible(false)} style={{ width: '30rem' }}>
                <h2>Carrito de Compras</h2>
                {cart && cart.items && cart?.items.length > 0 ? (
                    <>
                        {cart?.items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onAdd={() => handleIncrement(item)}
                                onRemove={() => handleDecrement(item)}
                                onDelete={() => handleRemoveItemCart(item)}
                            />
                        ))}
                        <Checkout total={cart.price.total} onCheckout={() => handleResetCart()} />
                    </>


                ) : (
                    <p>El carrito está vacío</p>
                )}
            </Sidebar>
        </div>
    );
};

export default Navbar;
