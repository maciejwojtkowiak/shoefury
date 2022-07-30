const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

const app = express();
app.use(bodyParser.json());
app.use('/product', productRoutes);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS, PATCH'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
const PORT = 5000;
const startServer = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://maciejtest:test12345@cluster0.vv1w4.mongodb.net/shop?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
