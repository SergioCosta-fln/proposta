const ProposalService = require('../services/ProposalService');

module.exports = {

    allProposal: async (req, res) => {
        
        let json = {error: '', result:[]};

        let proposal = await ProposalService.getAllProposal();

        for(let i in proposal) {
            json.result.push({
                id: proposal[i].id,
                codigo: proposal[i].codigo,
                assunto: proposal[i].assunto,
                data: proposal[i].data,
                dataValidade: proposal[i].dataValidade,
                idClient: proposal[i].idClient
            });
        };

        res.json(json);
    },

    oneProposal: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        let id = req.params.id;
        let proposal = await ProposalService.findProposalById(id);

        if(proposal) {
            json.result = proposal;            
        }

        res.json(json);
    },

    newProposal: async (req, res) => {

        let json = {error:'', result:{}}; 

        const proposal = {
            codigo: req.body.codigo,
            assunto: req.body.assunto,
            data: req.body.data,
            dataValidade: req.body.dataValidade,
            idClient: req.body.idClient
        } 

        if(proposal) {
            let proposalId = await ProposalService.addProposal(proposal);

            json.result = Object.assign(proposal, {id: proposalId});

        } else {
            json.error = "Campos não enviados!";
        }

        res.json(proposal);
    },

    editProposal: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        const proposal = {
            id: req.params.id,
            codigo: req.body.codigo,
            assunto: req.body.assunto,
            data: req.body.data,
            dataValidade: req.body.dataValidade,
            idClient: req.body.idClient
        }

        if(proposal) {
            await ProposalService.updateProposal(proposal);
            json.result = Object.assign(proposal);
        } else {
            json.error = "Campos não enviados!";
        }

        res.json(json);
    },

    deleteProposal: async (req, res) => {

        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item
        let id = req.params.id;

        await ProposalService.deleteProposal(req.params.id);

        res.json(json);
    }    
    
};