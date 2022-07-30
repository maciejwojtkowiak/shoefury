const express = require('express');
const { addProduct, getProducts } = require('../controllers/product');

const router = express.Router();

router.get('/get-products', getProducts );

router.post('/add-product', addProduct);

module.exports = router;
