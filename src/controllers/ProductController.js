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

    newProduct: async (req, res) => {

        let json = {error:'', result:{}}; 

        const product = {
            descricao: req.body.descricao,
            descritivo: req.body.descritivo,
            valorVenda: req.body.valorVenda,
            tipos: req.body.tipos,
            formaComercializacao: req.body.formaComercializacao
        } 
        

        console.log(product)
        if(product) {
            let productId = await ProductService.addProduct(product);

            json.result = Object.assign(product, {id: productId});

        } else {
            json.error = "Campos não enviados!";
        }

        res.json(product);
    }
    
};