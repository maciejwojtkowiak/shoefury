import mongoose from 'mongoose';
const { Schema } = mongoose;

const product = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', product);
export default Product;
