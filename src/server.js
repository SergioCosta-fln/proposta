require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Criar o servidor
const server = express();
server.use(cors());
server.use( express.urlencoded({extended: true}));
server.use(express.json());
server.use('',routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});