const mongoose = require('mongoose');
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

exports.Product = mongoose.model('Product', product);
