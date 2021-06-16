const ClientService = require('../services/ClientService');

module.exports = {

    allClient: async (req, res) => {
        
        let json = {error: '', result:[]};

        let client = await ClientService.getAllClient();

        for(let i in client) {
            json.result.push({
                id: client[i].id,
                nome: client[i].nome,
                tipoPessoa: client[i].tipoPessoa,
                cpf_cnpj: client[i].cpf_cnpj,
                cep: client[i].cep,
                endereco: client[i].endereco,
                numero: client[i].numero,
                complemento: client[i].complemento,
                bairro: client[i].bairro,
                cidade: client[i].cidade,
                estado: client[i].estado,
                pais: client[i].pais
            });
        };

        res.json(json);
    },

    oneClient: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        let id = req.params.id;
        let client = await ClientService.findClientById(id);

        if(client) {
            json.result = client;            
        }

        res.json(json);
    },


    newClient: async (req, res) => {

        let json = {error:'', result:{}}; 

        const client = {
            nome: req.body.nome,
            tipoPessoa: req.body.tipoPessoa,
            cpf_cnpj: req.body.cpf_cnpj,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais
        } 

        if(client) {
            let clientId = await ClientService.addClient(client);

            json.result = Object.assign(client, {id: clientId});

        } else {
            json.error = "Campos não enviados!";
        }

        res.json(client);
    },

    editClient: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        const client = {
            id: req.params.id,
            nome: req.body.nome,
            tipoPessoa: req.body.tipoPessoa,
            cpf_cnpj: req.body.cpf_cnpj,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais
        }

        if(client) {
            await ClientService.updateClient(client);
            json.result = Object.assign(client);
        } else {
            json.error = "Campos não enviados!";
        }

        res.json(json);
    },

    deleteClient: async (req, res) => {

        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item
        let id = req.params.id;

        await ClientService.deleteClient(req.params.id);

        res.json(json);
    }    
    
};