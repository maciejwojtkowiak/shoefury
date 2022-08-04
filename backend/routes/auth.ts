import express, { Request, Response } from 'express';
import { isAuth, login, register } from '../controllers/auth';

const router = express.Router();

router.get('/register', (req: Request, res: Response) => {
  res.status(200).json({ message: 'User created!' });
});

router.post('/register', register);

router.post('/login', login);

router.patch('/is-auth', isAuth);

export default router;
