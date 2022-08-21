import mongoose, { Model, ObjectId, Schema } from 'mongoose';
<<<<<<< HEAD
import bcrypt from 'bcrypt';
=======
import crypto from 'crypto';
>>>>>>> 0f3e316aa0f864c989d2bf0018757c30c7daa76a

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
<<<<<<< HEAD
=======
  hash: string;
  salt: string;
>>>>>>> 0f3e316aa0f864c989d2bf0018757c30c7daa76a
}

interface IUserMethods {
  setPassword(password: string): void;
  decryptPasswordSuccess(password: string): void;
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
<<<<<<< HEAD
  password: {
    type: String,
  },
=======
  hash: String,
  salt: String,
>>>>>>> 0f3e316aa0f864c989d2bf0018757c30c7daa76a
});

user.method(
  'setPassword',
  function setPassword(password) {
    this.password = bcrypt.hash(password, 16);
  },
  { collection: 'users' }
);

const User = mongoose.model<IUser, UserModel>('User', user);
export default User;
