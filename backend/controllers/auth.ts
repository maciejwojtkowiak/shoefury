import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { CustomError } from '../types/Error';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const register = async (
  req: Request<{}, {}, RegisterData>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      console.log(result.array());
      const error = new Error('validation failed') as CustomError;
      error.status = 422;
      throw error;
    }
    console.log('AFTER IF');
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User();
    user.name = name;
    user.email = email;
    user.cart = {
      items: [],
    };
    user.setPassword(password);
    await user.save();
    const token = jwt.sign({ userId: user._id }, `${process.env.SECRET_KEY}`, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });
    res.status(200).json({ message: 'LOGGED IN SUCCESSFULLY', token: token });
  } catch (err) {
    next(err);
  }
};

export const login = (req: Request, res: Response) => {};

export const isAuth = async (req: Request, res: Response) => {
  const token = req.get('Authorization')?.split(' ')[1];
  if (token) {
    try {
      const decodedToken = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (decodedToken) res.status(200).json({ isAuth: true });
    } catch (e) {
      res.status(401).json({ isAuth: false });
    }
  } else res.status(401).json({ isAuth: false });
};
