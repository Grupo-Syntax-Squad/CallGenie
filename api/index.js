import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from "./db.js";

import clienteRouter from "./rotas/cliente.js";
import chamadoRouter from "./rotas/chamado.js";
import suporteRouter from "./rotas/suporte.js";
import admRouter from "./rotas/adm.js";
import respostaRouter from "./rotas/resposta.js";
import equipamentoRouter from "./rotas/equipamento.js";
import logincadastroRouter from "./rotas/logincadastro.js";
import relatorioRouter from "./rotas/relatorio.js";

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
