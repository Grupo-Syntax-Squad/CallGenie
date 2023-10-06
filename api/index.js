import express from "express";
import bodyParser from "body-parser";
import { Chamado } from "./db.js";

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

app.listen(80);
