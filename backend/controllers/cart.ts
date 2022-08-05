import { NextFunction, Request, Response } from 'express';
import { IAuthUserRequest } from '../types/User';

export const addToCart = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.userId);
};
