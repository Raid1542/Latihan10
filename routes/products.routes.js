const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');
const authBearer = require('../middlewares/auth.middleware');

// Endpoint publik
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Endpoint authBearer
router.post('/', authBearer, productController.createProduct);
router.put('/:id', authBearer, productController.updateProduct);
router.delete('/:id', authBearer, productController.deleteProduct);

module.exports = router;