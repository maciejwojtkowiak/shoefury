import mongoose from 'mongoose';
const { Schema } = mongoose;

const product = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },

  { collection: 'products', timestamps: true }
);

const Product = mongoose.model('Product', product);
export default Product;
