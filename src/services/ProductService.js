const db= require('../db');

module.exports = {

    getAllProduct: () => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM products', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    addProduct: ({descricao, descritivo, valorVenda, tipos, formaComercializacao}) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO products (descricao, descritivo, valorVenda, tipos, formaComercializacao) VALUES (?, ?, ?, ?, ?)',
                [descricao, descritivo, valorVenda, tipos, formaComercializacao],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results.insertId);
                }
            );

        });
    }

};