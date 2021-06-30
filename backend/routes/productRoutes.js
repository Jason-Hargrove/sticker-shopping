const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById
} = require('../controller/productControllers');

// Get all the products form the db.
// route get /api/products.
router.get('/', getAllProducts);

// Get all the products form the db.
// route get /api/products/:id.
router.get('/:id', getProductById);

module.exports = router;
