const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
// const ClientController = require('./controllers/ClientController');

// Routes de Products
// GET todos os produtos
router.get('/product', ProductController.allProduct);

// POST - Adcionando um produto
router.post('/product', ProductController.newProduct);

module.exports = router;