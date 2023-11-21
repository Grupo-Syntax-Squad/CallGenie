import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from "./db.js";

import clienteRouter from "./cliente.js";
import chamadoRouter from "./chamado.js";
import suporteRouter from "./suporte.js";
import admRouter from "./adm.js";
import respostaRouter from "./resposta.js";
import equipamentoRouter from "./equipamento.js";
import logincadastroRouter from "./logincadastro.js";
import relatorioRouter from "./relatorio.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(clienteRouter);
app.use(chamadoRouter);
app.use(suporteRouter);
app.use(admRouter);
app.use(respostaRouter);
app.use(equipamentoRouter);
app.use(logincadastroRouter);
app.use(relatorioRouter);

app.get("/faq", async (req, res) => {
    let faq = await Faq.findAll();
    res.json(faq);
});

app.listen(8080);
