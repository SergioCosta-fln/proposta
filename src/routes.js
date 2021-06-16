const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');
const ProposalController = require('./controllers/ProposalController');
const ProposalItemController = require('./controllers/ProposalItemController');

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

// Routes de Proposal
router.get('/proposal', ProposalController.allProposal);                  // GET todos as propostas
router.get('/proposal/:id', ProposalController.oneProposal);              // GET somente uma propostas
router.post('/proposal', ProposalController.newProposal);                 // POST - Adcionando uma propostas
router.put('/proposal/:id', ProposalController.editProposal);             // PUT - alterar uma propostas
router.delete('/proposal/:id', ProposalController.deleteProposal);        // DELETE - deletar uma propostas

// Routes de Proposal Items
router.get('/proposalitem', ProposalItemController.allProposalItem);                  // GET todos as propostas
router.get('/proposalitem/:id', ProposalItemController.oneProposalItem);              // GET somente uma propostas
router.post('/proposalitem', ProposalItemController.newProposalItem);                 // POST - Adcionando uma propostas
router.put('/proposalitem/:id', ProposalItemController.editProposalItem);             // PUT - alterar uma propostas
router.delete('/proposalitem/:id', ProposalItemController.deleteProposalItem);        // DELETE - deletar uma propostas

module.exports = router;