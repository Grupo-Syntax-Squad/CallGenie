const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const database = require('./db/bd');
const modelo = require('./db/modelos');

// (async () => {
//     await database.sync();
//     modelo.Cliente.create({
//         cli_nome: "clienteTeste",
//         cli_cpf: 11020304050,
//         cli_email: "cliente@teste.com",
//         cli_telefone: 12999999999,
//         cli_endereco: "Rua dos Astronautas",
//         cli_senha: "clienteT"
//     });
// })();

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

app.post("/abrirChamado", async (req, res) => {
    // Coletando infos
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

    let novoChamado = await modelo.Chamado.create({
        cham_cli_cpf: 11020304050,
        cham_titulo: title,
        cham_descricao: desc,
        cham_status: "Aberto"
    });
    res.send("Chamado aberto com sucesso!<br><a href='/chamados'>Ver Chamados</a>");
});

app.get("/chamados", async (req, res) => {
    let chamados = await modelo.Chamado.findAll();
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

app.get("/teste", (req, res) => {
    res.render("teste");
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(80);
