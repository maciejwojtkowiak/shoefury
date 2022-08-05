import { NextFunction, Request, Response } from 'express';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productRoutes from './routes/product';
import authRoutes from './routes/auth';
import cartRoutes from './routes/cart';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { CustomError } from './types/Error';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
const app = express();
app.use(bodyParser.json());
dotenv.config({ path: './secret.env' });

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});
const storage = multer.diskStorage({
  destination: (req: Request, res: Express.Multer.File, cb: DestinationCallback) => {
    cb(null, 'images');
  },
  filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback): void => {
    cb(null, file.originalname);
  },
});

app.use(multer({ storage: storage }).single('image'));
app.use('/images', express.static(path.join(path.join(__dirname, 'images'))));
app.use('/product', productRoutes);
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err.status) {
    if (err.status === 403) res.json({ message: 'Please log in!' });
  }
  if (!err.status) {
    err.status = 500;
    res.json({ message: 'Something went wrong, try again later' });
  }
});
const PORT = 5000;
const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    await mongoose.connect(`${process.env.MONGO_KEY}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
