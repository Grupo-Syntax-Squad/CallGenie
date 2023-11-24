import express from "express";

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from "../db.js";

const relatorioRouter = express.Router();

relatorioRouter.get("/gerarRelatorio/:cham_id", async (req, res) => {
    const chamado = await Chamado.findOne({
        where: {
            cham_id: req.params.cham_id
        }
    });

    const resposta = await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.params.cham_id
        }
    });

    const suporte = await Suporte.findOne({
        where: {
            sup_id: req.params.sup_id
        }
    });

    const cliente = await Cliente.findOne({
        where: {
            cli_cpf: chamado.cham_cli_cpf
        }
    });

    const equipamento = await Equipamento.findOne({
        where: {
            equ_cham_id: req.params.cham_id
        }
    });

    res.json({ chamado, equipamento, resposta, suporte, cliente });
});

export default relatorioRouter;