const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController') 
console.log("productController:", productController);

router
    .route('/products')
    .get(productController.getProducts)
    .post(productController.addProduct);

module.exports = router;