import express from "express";
import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from "./db.js";

const clienteRouter = express.Router();

clienteRouter.get("/clientes", async (req, res) => {
    let clientes = await Cliente.findAll();
    res.json(clientes);
});

clienteRouter.post("/clientes", async (req, res) => {
    try {
        let cliente = await Cliente.create({
            cli_nome: req.body.nome,
            cli_cpf: req.body.cpf,
            cli_email: req.body.email,
            cli_telefone: req.body.telefone,
            cli_endereco: req.body.endereco,
            cli_cep: req.body.cep,
            cli_senha: req.body.senha
        });
        res.json(cliente);
    } catch (error) {
        res.json(error);
    };
});

clienteRouter.get("/clientes/:cpf", async (req, res) => {
    let cliente = await Cliente.findOne({
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json(cliente);
});

clienteRouter.put("/clientes/:cpf", async (req, res) => {
    await Cliente.update({
        cli_nome: req.body.nome,
        cli_email: req.body.email,
        cli_telefone: req.body.telefone,
        cli_endereco: req.body.endereco,
        cli_cep: req.body.cep,
        cli_senha: req.body.senha
    }, {
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json({ mensagem: "Informações do cliente editadas com sucesso." });
});

clienteRouter.delete("/clientes/:cpf", async (req, res) => {
    await Cliente.destroy({
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json({ mensagem: "Cliente excluído com sucesso." });
});

export default clienteRouter;