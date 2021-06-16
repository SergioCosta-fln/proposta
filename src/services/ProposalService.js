const db= require('../db');

module.exports = {

    getAllProposal: () => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM proposals', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    findProposalById: (id) => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM proposals WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; } 
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
             });

        });

    },

    addProposal: ({codigo, assunto, data, dataValidade, idClient}) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO proposals (codigo, assunto, data, dataValidade, idClient) VALUES (?, ?, ?, ?, ?)',
                [codigo, assunto, data, dataValidade, idClient],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results.insertId);
                }
            );

        });
    },

    updateProposal: ({id, codigo, assunto, data, dataValidade, idClient}) => {
        return new Promise((resolve, reject) => {

            db.query('UPDATE proposals SET codigo = ?, assunto = ?, data = ?, dataValidade = ?, idClient = ? WHERE id = ?',
                [codigo, assunto, data, dataValidade, idClient, id],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results);
                }
            );

        });
    },

    deleteProposal: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('DELETE FROM proposals WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });

        });
    }
};