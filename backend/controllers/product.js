const { Product } = require('../models/product');

exports.addProduct = (req, res) => {
  const title = req.body.title;
  console.log(title);
  const product = new Product({
    title: title,
  });
  product.save();
  res.status(201).json({ message: 'added successfully' });
};
