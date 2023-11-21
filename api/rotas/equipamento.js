import express from 'express';

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from '../db.js';

const equipamentoRouter = express.Router();

equipamentoRouter.get("/equipamentos", async (req, res) => {
    let equipamentos = await Equipamento.findAll();
    res.json(equipamentos);
});

equipamentoRouter.post("/equipamentos", async (req, res) => {
    try {
        let equipamento = await Equipamento.create({
            equ_numserie: req.body.numserie,
            equ_descricao: req.body.descricao,
            equ_cham_id: req.body.cham_id,
            equ_sup_id: req.body.sup_id
        });
        res.json(equipamento);
    } catch (error) {
        res.json(error);
    };
});

equipamentoRouter.get("/equipamentos/:id", async (req, res) => {
    let equipamento = await Equipamento.findOne({
        where: {
            equ_id: req.params.id
        }
    });
    res.json(equipamento);
});

equipamentoRouter.put("/equipamentos/:id", async (req, res) => {
    await Equipamento.update({
        equ_numserie: req.body.numserie,
        equ_descricao: req.body.descricao,
        equ_cham_id: req.body.cham_id,
        equ_sup_id: req.body.sup_id
    }, {
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Informações do equipamento editadas com sucesso." });
});

equipamentoRouter.delete("/equipamentos/:id", async (req, res) => {
    await Equipamento.destroy({
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Equipamento excluído com sucesso." });
});

export default equipamentoRouter;