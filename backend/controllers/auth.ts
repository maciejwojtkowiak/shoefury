import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { CustomError } from '../types/Error';
import bcrypt from 'bcrypt';

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
      const error = new Error('validation failed') as CustomError;
      error.status = 422;
      throw error;
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User();
    user.name = name;
    user.email = email;
    user.cart = {
      items: [],
    };
    user.password = password;
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

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log('CORRECT 1');
  try {
    const userWithGivenEmail = await User.findOne({ email: email });
    console.log('USER', userWithGivenEmail);
    if (userWithGivenEmail) {
      const isPasswordCorrect = password === userWithGivenEmail.password;
      if (isPasswordCorrect) {
        console.log('CORRECT');
        const token = jwt.sign(
          { userId: userWithGivenEmail._id },
          `${process.env.SECRET_KEY}`,
          {
            algorithm: 'HS256',
            expiresIn: '1h',
          }
        );
        res.status(200).json({ message: 'LOGGED IN SUCCESSFULLY', token: token });
      }
      if (!isPasswordCorrect) {
        const error = new Error('Wrong password') as CustomError;
        error.status = 401;
        throw error;
      }
    }
  } catch (error) {
    next(error);
  }
};

export const isAuth = async (req: Request, res: Response) => {
  const token = req.get('Authorization')?.split(' ')[1];
  console.log('TOKEN', token);
  if (token) {
    try {
      const decodedToken = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (decodedToken) res.status(200).json({ isAuth: true });
    } catch (e) {
      res.status(401).json({ isAuth: false });
    }
  } else res.status(401).json({ isAuth: false });
};
