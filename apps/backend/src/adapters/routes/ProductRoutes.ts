import { Router } from 'express';
import { deleteProduct, getAllProdcuts, getProduct, addProduct, updateProduct } from '../controllers/ProductController';

const router = Router();

router.get('/products', getAllProdcuts);
router.get('/products/:productId', getProduct);
router.post('/products', addProduct);
router.put('/products', updateProduct);
router.delete('/products/:productId', deleteProduct);


export default router;