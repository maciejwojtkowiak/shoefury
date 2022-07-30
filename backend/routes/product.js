const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.status(200).json({ message: 'HALO' });
});

router.post('/add-product', (req, res) => {
  res.status(200).json({ message: 'HALO' });
});

module.exports = router;
