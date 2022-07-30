import express, { Request, Response } from 'express';
import { User } from '../models/user';

const router = express.Router();

router.post('/register', (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User();
  user.name = name;
  user.email = email;
  user.setPassword(password);
});
