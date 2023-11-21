import express from 'express';

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from '../db.js';

const admRouter = express.Router();

admRouter.get("/adms/:id", async (req, res) => {
    let administrador = await Adm.findOne({
        where: {
            adm_id: req.params.id
        }
    });
    res.json(administrador);
});

admRouter.put("/adms/:id", async (req, res) => {
    await Adm.update({
        adm_nome: req.body.nome,
        adm_email: req.body.email,
        adm_telefone: req.body.telefone,
        adm_senha: req.body.senha
    }, {
        where: {
            adm_id: req.params.id
        }
    });
    res.json({ mensagem: "Informações do administrador editadas com sucesso." });
});

export default admRouter;