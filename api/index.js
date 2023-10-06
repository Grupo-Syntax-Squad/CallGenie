import express from "express";
import bodyParser from "body-parser";
import { Chamado, Cliente } from "./db.js";

const app = express();
app.use(bodyParser.json());

app.get("/chamados", async (req, res) => {
    let chamados = await Chamado.findAll();
    res.json(chamados);
});

app.post("/chamados", async (req, res) => {
    let chamado = await Chamado.create({
        cham_titulo: req.body.titulo,
        cham_descricao: req.body.descricao,
        cham_status: req.body.status,
        cham_data_inicio: req.body.data_inicio,
        cham_prazo: req.body.prazo
    });
    res.json(chamado);
});

app.get("/chamados/:id", async (req, res) => {
    let chamado = await Chamado.findOne({
        where: {
            cham_id: req.params.id
        }
    });
    res.json(chamado);
});

app.put("/chamados/:id", async (req, res) => {
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
    res.json({ mensagem: "Chamado alterado" });
});

app.delete("/chamados/:id", async (req, res) => {
    await Chamado.destroy({
        where: {
            cham_id: req.params.id
        }
    })
    res.status(200).json({ mensagem: "Chamado deletado" })
});

app.get("/clientes", async (req, res) => {
    let clientes = await Cliente.findAll();
    res.json(clientes);
});

app.post("/clientes", async (req, res) => {
    try {
        let cliente = await Cliente.create({
            cli_nome: req.body.nome,
            cli_cpf: req.body.cpf,
            cli_email: req.body.email,
            cli_telefone: req.body.telefone,
            cli_endereço: req.body.endereço,
            cli_senha: req.body.senha
        });
        res.json(cliente);
    } catch (error) {
        res.json(error["original"]["sqlMessage"]);
    };
});

app.get("/clientes/:cpf", async (req, res) => {
    let cliente = await Cliente.findOne({
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json(cliente);
});

app.put("/clientes/:cpf", async (req, res) => {
    await Cliente.update({
        cli_nome: req.body.nome,
        cli_email: req.body.email,
        cli_telefone: req.body.telefone,
        cli_endereco: req.body.endereco,
        cli_senha: req.body.senha
    }, {
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json({ mensagem: "Cliente alterado" });
});

app.delete("/clientes/:cpf", async (req, res) => {
    await Cliente.destroy({
        where: {
            cli_cpf: req.params.cpf
        }
    })
    res.status(200).json({ mensagem: "Cliente deletado" })
});

app.listen(80);
