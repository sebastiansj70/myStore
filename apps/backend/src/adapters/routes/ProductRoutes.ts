import { Router } from 'express';
import { deleteProduct, getAllProdcuts, getProduct, addProduct, updateProduct } from '../controllers/ProductController';

const router = Router();

router.get('/', getAllProdcuts);
router.get('/:productId', getProduct);
router.post('/', addProduct);
router.put('/', updateProduct);
router.delete('/:productId', deleteProduct);


export default router;