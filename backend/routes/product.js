const express = require('express');
const { addProduct } = require('../controllers/product');

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.status(200).json({ message: 'HALO' });
});

router.post('/add-product', addProduct);

module.exports = router;
