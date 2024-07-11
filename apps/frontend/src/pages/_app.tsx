import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Navbar from '@/components/Navbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Navbar />
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
