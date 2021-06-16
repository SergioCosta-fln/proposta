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

    findProductById: (id) => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; } 
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
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
    },

    updateProduct: ({id, descricao, descritivo, valorVenda, tipos, formaComercializacao}) => {
        return new Promise((resolve, reject) => {

            db.query('UPDATE products SET descricao = ?, descritivo = ?, valorVenda = ?, tipos = ?, formaComercializacao = ? WHERE id = ?',
                [descricao, descritivo, valorVenda, tipos, formaComercializacao, id],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results);
                }
            );

        });
    },

    deleteProduct: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('DELETE FROM products WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });

        });
    }
};