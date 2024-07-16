import '../styles/globals.css';
import '../styles/homePage.css';
import '../styles/productCard.css';
import '../styles/cartItem.css';
import '../styles/checkout.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Navbar />
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
