import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User();
  user.name = name;
  user.email = email;
  user.setPassword(password);
  await user.save();
  const token = jwt.sign({ userId: user._id }, 'SUPER', { algorithm: 'RS256' });
  res.status(201).json({ message: 'User created!' });
};

export const login = (req: Request, res: Response) => {};
