import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser';
import productRoutes from './adapters/routes/ProductRoutes'
import CartRoutes from './adapters/routes/CartRoutes'
import cors from 'cors';


const app = express()
const port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/products', productRoutes);
app.use('/cart', CartRoutes);


// Middleware para manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
 console.error(err.stack);
 res.status(500).send('Error en el servidor');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))