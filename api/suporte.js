import express from 'express';

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from './db.js';

const suporteRouter = express.Router();

suporteRouter.get("/suportes", async (req, res) => {
    let suportes = await Suporte.findAll();
    res.json(suportes);
});

suporteRouter.post("/suportes", async (req, res) => {
    try {
        let suporte = await Suporte.create({
            sup_nome: req.body.nome,
            sup_email: req.body.email,
            sup_cpf: req.body.cpf,
            sup_telefone: req.body.telefone,
            sup_senha: req.body.senha,
            sup_adm_id: req.body.adm_id
        });
        res.json(suporte);
    } catch (error) {
        res.json(error);
    };
});

suporteRouter.get("/suportes/:id", async (req, res) => {
    let suporte = await Suporte.findOne({
        where: {
            sup_id: req.params.id
        }
    });
    res.json(suporte);
});

suporteRouter.put("/suportes/:id", async (req, res) => {
    await Suporte.update({
        sup_nome: req.body.nome,
        sup_cpf: req.body.cpf,
        sup_email: req.body.email,
        sup_telefone: req.body.telefone,
        sup_senha: req.body.senha,
        sup_adm_id: req.body.adm_id
    }, {
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Informações do suporte editadas com sucesso." });
});

suporteRouter.delete("/suportes/:id", async (req, res) => {
    await Suporte.destroy({
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Suporte excluído com sucesso." });
});

export default suporteRouter;