import { NextFunction, Request, Response } from 'express';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productRoutes from './routes/product';
import authRoutes from './routes/auth';
import dotenv from 'dotenv';

const app = express();
app.use(bodyParser.json());
dotenv.config({ path: './secret.env' });

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS, PATCH'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/product', productRoutes);
app.use('/auth', authRoutes);
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
