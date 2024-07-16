import { Router } from 'express';
import { addtoCart, deleteCart, getCart } from '../controllers/CartController';

const router = Router();

router.post('/', addtoCart);
router.get('/', getCart);
router.delete('/', deleteCart);


export default router;