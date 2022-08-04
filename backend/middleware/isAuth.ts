import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface Error {
  status?: number;
}

interface IUserIdRequest extends Request {
  userId: string;
}

interface IUserPayload {
  userId: string;
}

export const isAuth = (
  req: IUserIdRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.get('Authorization')!.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY) as IUserPayload;
  } catch (err) {
    const error = err as Error;
    error.status = 500;
  }

  if (!decodedToken) {
    const error = new Error('Not authenticated') as Error;
    error.status = 401;
    throw error;
  }

  req.userId = decodedToken.userId as string;
  next();
};
