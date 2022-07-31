import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const register = async (req: Request, res: Response) => {
  const body = req.body as RegisterData;
  const name = body.name;
  const email = body.email;
  const password = body.password;
  const user = new User();

  user.name = name;
  user.email = email;
  user.setPassword(password);
  await user.save();
  const token = jwt.sign({ userId: user._id }, `${process.env.SECRET_KEY}`, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  res
    .cookie('token', token, {
      expires: new Date(new Date().getTime() + 900000),
    })
    .status(200)
    .json({ message: 'LOGGED IN SUCCESSFULLY' });
};

export const login = (req: Request, res: Response) => {};
