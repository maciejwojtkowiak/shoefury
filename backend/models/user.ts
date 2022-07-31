import mongoose, { Model, Schema } from 'mongoose';
import crypto from 'crypto';

interface IUser {
  name: string;
  email: string;
  password: string;
  hash: string;
  salt: string;
}

interface IUserMethods {
  setPassword(password: string): void;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const user = new Schema<IUser, UserModel, IUserMethods>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

user.method(
  'setPassword',
  function setPassword(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
  },
  { collection: 'users' }
);

export const User = mongoose.model<IUser, UserModel>('User', user);
