const ProductService = require('../services/ProductService');

module.exports = {

    allProduct: async (req, res) => {
        
        let json = {error: '', result:[]};

        let product = await ProductService.getAllProduct();

        for(let i in product) {
            json.result.push({
                id: product[i].id,
                descricao: product[i].descricao,
                descritivo: product[i].descritivo,
                valorVenda: product[i].valorVenda,
                tipos: product[i].tipos,
                formaComercializacao: product[i].formaComercializacao
            });
        };

        res.json(json);
    },

    oneProduct: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        let id = req.params.id;
        let product = await ProductService.findProductById(id);

        if(product) {
            json.result = product;            
        }

        res.json(json);
    },


    newProduct: async (req, res) => {

        let json = {error:'', result:{}}; 

        const product = {
            descricao: req.body.descricao,
            descritivo: req.body.descritivo,
            valorVenda: req.body.valorVenda,
            tipos: req.body.tipos,
            formaComercializacao: req.body.formaComercializacao
        } 

        if(product) {
            let productId = await ProductService.addProduct(product);

            json.result = Object.assign(product, {id: productId});

        } else {
            json.error = "Campos não enviados!";
        }

        res.json(product);
    },

    editProduct: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        const product = {
            id: req.params.id,
            descricao: req.body.descricao,
            descritivo: req.body.descritivo,
            valorVenda: req.body.valorVenda,
            tipos: req.body.tipos,
            formaComercializacao: req.body.formaComercializacao
        }

        if(product) {
            await ProductService.updateProduct(product);
            json.result = Object.assign(product);
        } else {
            json.error = "Campos não enviados!";
        }

        res.json(json);
    },

    deleteProduct: async (req, res) => {

        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item
        let id = req.params.id;

        await ProductService.deleteProduct(req.params.id);

        res.json(json);
    }    
    
};