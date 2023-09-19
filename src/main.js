const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const Chamado = require("./models/chamado");

let chamados = [];

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/entrar", (req, res) => {
    res.render("entrar");
});

app.get("/cadastrar", (req, res) => {
    res.render("cadastrar");
});

app.get("/opcaoCadastro", (req, res) => {
    res.render("opcaoCadastro");
});

app.get("/abrirChamado", (req, res) => {
    res.render("abrirChamado");
});

app.post("/abrirChamado", (req, res) => {
    let title = req.body.titulo;
    let desc = req.body.desc;
    let comentario = req.body.comentario;
    let nomeEquipamento = "";
    let numeroSerie = "";
    let tipoEquipamento = "";
    try {
        nomeEquipamento = req.body.equipamentonome;
    } catch (error) {};
    try {
        numeroSerie = req.body.numeroserie;
    } catch (error) {};
    try {
        tipoEquipamento = req.body.equipamentotipo;
    } catch (error) {};
    let novoChamado = new Chamado(title, desc, comentario, nomeEquipamento, numeroSerie, tipoEquipamento);
    chamados.push(novoChamado);
    res.send("Chamado aberto com sucesso!<br><a href='/chamados'>Ver Chamados</a>");
});

app.get("/chamados", (req, res) => {
    res.render("chamados", {chamados: chamados});
});

app.get("/chamadoAberto", (req, res) => {
    res.render("chamadoAberto");
});

app.get("/alterarDados", (req, res) => {
    res.render("alterarDados");
});

app.get("/FAQ", (req, res) => {
    res.render("FAQ");
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(80);