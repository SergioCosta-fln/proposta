const db= require('../db');

module.exports = {

    getAllClient: () => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM clients', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    findClientById: (id) => {
        return new Promise( (resolve, reject) => {

            db.query('SELECT * FROM clients WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; } 
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
             });

        });

    },

    addClient: ({nome, tipoPessoa, cpf_cnpj, cep, endereco, numero, complemento, bairro, cidade, estado, pais}) => {
        return new Promise((resolve, reject) => {

            db.query('INSERT INTO clients (nome, tipoPessoa, cpf_cnpj, cep, endereco, numero, complemento, bairro, cidade, estado, pais) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [nome, tipoPessoa, cpf_cnpj, cep, endereco, numero, complemento, bairro, cidade, estado, pais],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results.insertId);
                }
            );

        });
    },

    updateClient: ({id, nome, tipoPessoa, cpf_cnpj, cep, endereco, numero, complemento, bairro, cidade, estado, pais}) => {
        return new Promise((resolve, reject) => {

            db.query('UPDATE clients SET nome = ?, tipoPessoa = ?, cpf_cnpj = ?, cep = ?, endereco = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, pais = ? WHERE id = ?',
                [nome, tipoPessoa, cpf_cnpj, cep, endereco, numero, complemento, bairro, cidade, estado, pais, id],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results);
                }
            );

        });
    },

    deleteClient: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('DELETE FROM clients WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });

        });
    }
};