const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const path = require("path");

const app = express();

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

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

app.get("/abrirChamado", (req, res) => {
    res.render("abrirChamado");
});

app.get("/chamados", (req, res) => {
    res.render("chamados");
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

app.listen(80);