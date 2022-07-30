const express = require('express');
const mongoose = require('mongoose');

const app = express();
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
