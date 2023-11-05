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

app.get("/chamados/cpf/:cpf", async (req, res) => {
    let chamados = await Chamado.findAll({ where: { cham_cli_cpf: req.params.cpf } });
    res.json(chamados);
});

app.post("/chamados", async (req, res) => {
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

app.get("/chamados/:id", async (req, res) => {
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
            cli_endereco: req.body.endereco,
            cli_cep: req.body.cep,
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
        cli_cep: req.body.cep,
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
            sup_cpf: req.body.cpf,
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
        sup_cpf: req.body.cpf,
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

app.get("/respostasChamados", async (req, res) => {
    let respostasChamados = await RespostaChamado.findAll();
    res.json(respostasChamados);
});

app.post("/respostasChamados", async (req, res) => {
    if (await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.body.cham_id
        }
    })) {
        try {
            RespostaChamado.update({
                resp_soluc_comum: req.body.soluc_comum,
                resp_data: req.body.data
            }, {
                where: {
                    resp_cham_id: req.body.cham_id
                }
            });
            res.json({ msg: "Resposta do chamado alterada com sucesso!" })
        } catch (error) {
            res.json(error);
        };
    } else {
        try {
            let respostaChamado = await RespostaChamado.create({
                resp_data: req.body.data,
                resp_soluc_comum: req.body.soluc_comum,
                resp_sup_id: req.body.sup_id,
                resp_cham_id: req.body.cham_id
            });
            console.log(respostaChamado);
            res.json(respostaChamado);
        } catch (error) {
            res.json(error);
        };
    };
});

app.get("/respostasChamados/:cham_id", async (req, res) => {
    let resposta = await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.params.cham_id
        }
    });
    if (resposta == null) {
        resposta = null;
        let suporte = null;
        res.json({resposta, suporte})
    } else {
        let suporte = await Suporte.findOne({ where: { sup_id: resposta.resp_sup_id } });
        res.json({ resposta, suporte });
    };
});

app.put("/respostasChamados/:id", async (req, res) => {
    await RespostaChamado.update({
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

app.delete("/respostasChamados/:id", async (req, res) => {
    await RespostaChamado.destroy({
        where: {
            resp_id: req.params.id
        }
    });
    res.json({ mensagem: "Resposta de chamado deletada" });
});

app.get("/equipamentos", async (req, res) => {
    let equipamentos = await Equipamento.findAll();
    res.json(equipamentos);
});

app.post("/equipamentos", async (req, res) => {
    try {
        let equipamento = await Equipamento.create({
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

app.get("/equipamentos/:id", async (req, res) => {
    let equipamento = await Equipamento.findOne({
        where: {
            equ_id: req.params.id
        }
    });
    res.json(equipamento);
});

app.put("/equipamentos/:id", async (req, res) => {
    await Equipamento.update({
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

app.delete("/equipamentos/:id", async (req, res) => {
    await Equipamento.destroy({
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Equipamento deletado" });
});

app.listen(8080);
