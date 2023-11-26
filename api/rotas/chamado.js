import express from "express";
import { Chamado, Equipamento } from "../db.js";

const chamadoRouter = express.Router();

chamadoRouter.get("/chamados", async (req, res) => {
    let chamados = await Chamado.findAll();
    res.json(chamados);
});

chamadoRouter.get("/chamados/cpf/:cpf", async (req, res) => {
    let chamados = await Chamado.findAll({ where: { cham_cli_cpf: req.params.cpf } });
    for (let cham in chamados) {
        let chamado = chamados[cham];
        if (chamado.cham_prazo) {
            let prazo = new Date(chamado.cham_prazo);
            let data = new Date();
            if (prazo < data) {
                await Chamado.update({
                    cham_status: "atrasado"
                }, {
                    where: {
                        cham_id: chamado.cham_id
                    }
                });
            };
        };
    };
    res.json(chamados);
});

chamadoRouter.post("/chamados", async (req, res) => {
    let chamado = await Chamado.create({
        cham_titulo: req.body.titulo,
        cham_descricao: req.body.descricao,
        cham_status: req.body.status,
        cham_data_inicio: req.body.data_inicio,
        cham_prazo: req.body.prazo,
        cham_cli_cpf: req.body.cli_cpf,
        cham_urgencia: req.body.urgencia
    });
    let equipamento = await Equipamento.create({
        equ_nome: req.body.equipamento.nome ? req.body.equipamento.nome : "Não informado",
        equ_numserie: req.body.equipamento.numserie ? req.body.equipamento.numserie : "Não informado",
        equ_tipo: req.body.equipamento.tipo ? req.body.equipamento.tipo : "Não informado",
        equ_cham_id: chamado.cham_id
    });
    res.json({ chamado, equipamento });
});

chamadoRouter.get("/chamados/:id", async (req, res) => {
    let chamado = await Chamado.findOne({
        where: {
            cham_id: req.params.id
        }
    });
    let equipamento = await Equipamento.findOne({
        where: {
            equ_cham_id: req.params.id
        }
    });
    res.json({ chamado, equipamento });
});

chamadoRouter.put("/chamados/:id", async (req, res) => {
    await Chamado.update({
        cham_titulo: req.body.titulo,
        cham_descricao: req.body.descricao,
        cham_status: req.body.status,
        cham_data_inicio: req.body.data_inicio,
        cham_prazo: req.body.prazo
    }, {
        where: {
            cham_id: req.params.id
        }
    });
    res.json({ mensagem: "Chamado editado com sucesso." });
});

chamadoRouter.delete("/chamados/:id", async (req, res) => {
    await Chamado.destroy({
        where: {
            cham_id: req.params.id
        }
    });
    res.json({ mensagem: `Chamado de id: ${req.params.id} excluído com sucesso.` });
});

export default chamadoRouter;