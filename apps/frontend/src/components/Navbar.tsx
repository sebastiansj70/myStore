import React, { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useCart } from '../context/CartContext';
import { Badge } from 'primereact/badge';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { cart } = useCart();
    const [countCart, setCountCart] = useState(0)


    const storeNameStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
    };

    useEffect(() => {
        setCountCart(cart?.items.length || 0)
    }, [cart])

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
                                onAdd={() => { }}
                                onRemove={() => { }}
                                onDelete={() => { }}
                            />
                        ))}
                        <Checkout total={cart.price.total} onCheckout={() => { }} />
                    </>


                ) : (
                    <p>El carrito está vacío</p>
                )}
            </Sidebar>
        </div>
    );
};

export default Navbar;
