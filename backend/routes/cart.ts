import express from 'express';
import { isAuth } from '../middleware/isAuth';
import { addToCart } from '../controllers/cart';
const router = express.Router();

router.post('/add', isAuth, addToCart);

export default router;
