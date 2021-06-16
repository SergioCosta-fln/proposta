const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
// const ClientController = require('./controllers/ClientController');

// Routes de Products

router.get('/product', ProductController.allProduct);               // GET todos os produtos
router.get('/product/:id', ProductController.oneProduct);           // GET somente um produto
router.post('/product', ProductController.newProduct);              // POST - Adcionando um produto
router.put('/product/:id', ProductController.editProduct);          // PUT - alterar uma produto
router.delete('/product/:id', ProductController.deleteProduct);    // DELETE - deletar uma produto

module.exports = router;