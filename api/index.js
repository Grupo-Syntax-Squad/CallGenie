import express from "express";
import bodyParser from "body-parser";
import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte } from "./db.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

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
    });
    res.json({ mensagem: `Chamado de id ${req.params.id} deletado` });
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
        res.json(error);
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
    });
    res.json({ mensagem: "Cliente deletado" });
});

app.get("/suportes", async (req, res) => {
    let suportes = await Suporte.findAll();
    res.json(suportes);
});

app.post("/suportes", async (req, res) => {
    try {
        let suporte = await Suporte.create({
            sup_nome: req.body.nome,
            sup_email: req.body.email,
            sup_telefone: req.body.telefone,
            sup_senha: req.body.senha,
            sup_adm_id: req.body.adm_id
        });
        res.json(suporte);
    } catch (error) {
        res.json(error);
    };
});

app.get("/suportes/:id", async (req, res) => {
    let suporte = await Suporte.findOne({
        where: {
            sup_id: req.params.id
        }
    });
    res.json(suporte);
});

app.put("/suportes/:id", async (req, res) => {
    await Suporte.update({
        sup_nome: req.body.nome,
        sup_email: req.body.email,
        sup_telefone: req.body.telefone,
        sup_senha: req.body.senha,
        sup_adm_id: req.body.adm_id
    }, {
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Suporte alterado" });
});

app.delete("/suportes/:id", async (req, res) => {
    await Suporte.destroy({
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Suporte deletado" });
});

app.get("/adms", async (req, res) => {
    let administradores = await Adm.findAll();
    res.json(administradores);
});

app.post("/adms", async (req, res) => {
    try {
        let administrador = await Adm.create({
            adm_nome: req.body.nome,
            adm_email: req.body.email,
            adm_telefone: req.body.telefone,
            adm_senha: req.body.senha
        });
        res.json(administrador);
    } catch (error) {
        res.json(error);
    };
});

app.get("/adms/:id", async (req, res) => {
    let administrador = await Adm.findOne({
        where: {
            adm_id: req.params.id
        }
    });
    res.json(administrador);
});

app.put("/adms/:id", async (req, res) => {
    await Adm.update({
        adm_nome: req.body.nome,
        adm_email: req.body.email,
        adm_telefone: req.body.telefone,
        adm_senha: req.body.senha
    }, {
        where: {
            adm_id: req.params.id
        }
    });
    res.json({ mensagem: "Administrador alterado" });
});

app.delete("/adms/:id", async (req, res) => {
    await Adm.destroy({
        where: {
            adm_id: req.params.id
        }
    });
    res.json({ mensagem: "Administrador deletado" });
});

app.get("/respostasChamados", (req, res) => {
    let respostasChamados = RespostaChamado.findAll();
    res.json(respostasChamados);
});

app.post("/respostasChamados", (req, res) => {
    try {
        let respostaChamado = RespostaChamado.create({
            resp_data: req.body.data,
            resp_soluc_comum: req.body.soluc_comum,
            resp_sup_id: req.body.sup_id
        });
        res.json(respostaChamado);
    } catch (error) {
        res.json(error);
    };
});

app.get("/respostasChamados/:id", (req, res) => {
    let respostaChamado = RespostaChamado.findOne({
        where: {
            resp_id: req.params.id
        }
    });
    res.json(respostaChamado);
});

app.put("/respostasChamados/:id", (req, res) => {
    RespostaChamado.update({
        resp_data: req.body.data,
        resp_soluc_comum: req.body.soluc_comum,
        resp_sup_id: req.body.sup_id 
    }, {
        where: {
            resp_id: req.params.id
        }
    });
    res.json({ mensagem: "Resposta de chamado alterada" });
});

app.delete("/respostasChamados/:id", (req, res) => {
    RespostaChamado.destroy({
        where: {
            resp_id: req.params.id
        }
    });
    res.json({ mensagem: "Resposta de chamado deletada" });
});

app.get("/equipamentos", (req, res) => {
    let equipamentos = Equipamento.findAll();
    res.json(equipamentos);
});

app.post("/equipamentos", (req, res) => {
    try {
        let equipamento = Equipamento.create({
            equ_numserie: req.body.numserie,
            equ_descricao: req.body.descricao,
            equ_cham_id: req.body.cham_id,
            equ_sup_id: req.body.sup_id
        });
        res.json(equipamento);
    } catch (error) {
        res.json(error);
    };
});

app.get("/equipamentos/:id", (req, res) => {
    let equipamento = Equipamento.findOne({
        where: {
            equ_id: req.params.id
        }
    });
    res.json(equipamento);
});

app.put("/equipamentos/:id", (req, res) => {
    Equipamento.update({
        equ_numserie: req.body.numserie,
        equ_descricao: req.body.descricao,
        equ_cham_id: req.body.cham_id,
        equ_sup_id: req.body.sup_id
    }, {
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Equipamento alterado" });
});

app.delete("/equipamentos/:id", (req, res) => {
    Equipamento.destroy({
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Equipamento deletado" });
});

app.listen(8080);
