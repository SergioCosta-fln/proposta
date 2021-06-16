const db= require('../db');

module.exports = {

    getAllProposalItem: () => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM proposalitems', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    findProposalItemById: (id) => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM proposalitems WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; } 
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
             });

        });

    },

    addProposalItem: ({idProposta, idProduto, quantidade, valorUnitario, desconto, valorTotal}) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO proposalitems (idProposta, idProduto, quantidade, valorUnitario, desconto, valorTotal) VALUES (?, ?, ?, ?, ?, ?)',
                [idProposta, idProduto, quantidade, valorUnitario, desconto, valorTotal],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results.insertId);
                }
            );

        });
    },

    updateProposalItem: ({id, idProposta, idProduto, quantidade, valorUnitario, desconto, valorTotal}) => {
        return new Promise((resolve, reject) => {

            db.query('UPDATE proposalitems SET idProposta = ?, idProduto = ?, quantidade = ?, valorUnitario = ?, desconto = ?, valorTotal = ? WHERE id = ?',
                [idProposta, idProduto, quantidade, valorUnitario, desconto, valorTotal, id],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results);
                }
            );

        });
    },

    deleteProposalItem: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('DELETE FROM proposalitems WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });

        });
    }
};