import mongoose, { Model, ObjectId, Schema } from 'mongoose';
import crypto from 'crypto';

interface Item {
  product: ObjectId;
  quantity: number;
}

interface cart {
  items: Item[];
}

interface IUser {
  name: string;
  email: string;
  password: string;
  cart: cart;
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
  cart: {
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
      },
    ],
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

const User = mongoose.model<IUser, UserModel>('User', user);
export default User;
