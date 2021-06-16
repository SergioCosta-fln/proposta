const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');

// Routes de Products
router.get('/product', ProductController.allProduct);               // GET todos os produtos
router.get('/product/:id', ProductController.oneProduct);           // GET somente um produto
router.post('/product', ProductController.newProduct);              // POST - Adcionando um produto
router.put('/product/:id', ProductController.editProduct);          // PUT - alterar um produto
router.delete('/product/:id', ProductController.deleteProduct);     // DELETE - deletar um produto

// Routes de Clients
router.get('/client', ClientController.allClient);                  // GET todos os clientes
router.get('/client/:id', ClientController.oneClient);              // GET somente um cliente
router.post('/client', ClientController.newClient);                 // POST - Adcionando um cliente
router.put('/client/:id', ClientController.editClient);             // PUT - alterar um cliente
router.delete('/client/:id', ClientController.deleteClient);        // DELETE - deletar um cliente

module.exports = router;