import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { cart } = useCart();


    const storeNameStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem', 
    };

    return (
        <div>
            <div className="navbar">
                <div style={storeNameStyle}>MyStore</div>
                <Button icon="pi pi-shopping-cart" onClick={() => setVisible(true)} />
            </div>
            <Sidebar visible={visible} position="right" onHide={() => setVisible(false)}>
                <h2>Carrito de Compras</h2>
                {cart && cart.items && cart?.items.length > 0 ? (
                    cart?.items.map(item => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio: ${item.price.total}</p>
                        </div>
                    ))
                ) : (
                    <p>El carrito está vacío</p>
                )}
            </Sidebar>
        </div>
    );
};

export default Navbar;
