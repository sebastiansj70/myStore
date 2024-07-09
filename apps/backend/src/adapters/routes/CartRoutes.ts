import { Router } from 'express';
import { addtoCart } from '../controllers/CartController';

const router = Router();

router.post('/', addtoCart);


export default router;