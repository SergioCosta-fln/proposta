const ProposalItemService = require('../services/ProposalItemService');

module.exports = {

    allProposalItem: async (req, res) => {
        
        let json = {error: '', result:[]};

        let proposalItem = await ProposalItemService.getAllProposalItem();

        for(let i in proposalItem) {
            json.result.push({
                id: proposalItem[i].id,
                idProposta: proposalItem[i].idProposta,
                idProduto: proposalItem[i].idProduto,
                quantidade: proposalItem[i].quantidade,
                valorUnitario: proposalItem[i].valorUnitario,
                desconto: proposalItem[i].desconto,
                valorTotal: proposalItem[i].valorTotal
            });
        };

        res.json(json);
    },

    oneProposalItem: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        let id = req.params.id;
        let proposalItem = await ProposalItemService.findProposalItemById(id);

        if(proposalItem) {
            json.result = proposalItem;            
        }

        res.json(json);
    },

    newProposalItem: async (req, res) => {

        let json = {error:'', result:{}}; 

        const proposalItem = {
            idProposta: req.body.idProposta,
            idProduto: req.body.idProduto,
            quantidade: req.body.quantidade,
            valorUnitario: req.body.valorUnitario,
            desconto: req.body.desconto,
            valorTotal: req.body.valorTotal
        } 

        if(proposalItem) {
            let proposalItemId = await ProposalItemService.addProposalItem(proposalItem);

            json.result = Object.assign(proposalItem, {id: proposalItemId});

        } else {
            json.error = "Campos não enviados!";
        }

        res.json(proposalItem);
    },

    editProposalItem: async (req, res) => {
        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item

        const proposalItem = {
            id: req.params.id,
            idProposta: req.body.idProposta,
            idProduto: req.body.idProduto,
            quantidade: req.body.quantidade,
            valorUnitario: req.body.valorUnitario,
            desconto: req.body.desconto,
            valorTotal: req.body.valorTotal
        }

        if(proposalItem) {
            await ProposalItemService.updateProposalItem(proposalItem);
            json.result = Object.assign(proposalItem);
        } else {
            json.error = "Campos não enviados!";
        }

        res.json(json);
    },

    deleteProposalItem: async (req, res) => {

        let json = {error:'', result:{}};   // Aqui ser´aum objeto, pq será somente um item
        let id = req.params.id;

        await ProposalItemService.deleteProposalItem(req.params.id);

        res.json(json);
    }    
    
};