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
    for (let cham in chamados) {
        let chamado = chamados[cham];
        if (chamado.cham_prazo) {
            let prazo = new Date(chamado.cham_prazo);
            let data = new Date();
            if (prazo < data) {
                await Chamado.update({
                    cham_status: "atrasado"
                }, {
                    where: {
                        cham_id: chamado.cham_id
                    }
                });
            };
        };
    };
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
    res.json({ mensagem: "Chamado editado com sucesso." });
});

app.delete("/chamados/:id", async (req, res) => {
    await Chamado.destroy({
        where: {
            cham_id: req.params.id
        }
    });
    res.json({ mensagem: `Chamado de id: ${req.params.id} excluído com sucesso.` });
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
    res.json({ mensagem: "Informações do cliente editadas com sucesso." });
});

app.delete("/clientes/:cpf", async (req, res) => {
    await Cliente.destroy({
        where: {
            cli_cpf: req.params.cpf
        }
    });
    res.json({ mensagem: "Cliente excluído com sucesso." });
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
        sup_set_id: req.body.adm_id
    }, {
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Informações do suporte editadas com sucesso." });
});

app.delete("/suportes/:id", async (req, res) => {
    await Suporte.destroy({
        where: {
            sup_id: req.params.id
        }
    });
    res.json({ mensagem: "Suporte excluído com sucesso." });
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
    res.json({ mensagem: "Informações do administrador editadas com sucesso." });
});


app.get("/respostasChamados", async (req, res) => {
    let respostasChamados = await RespostaChamado.findAll();
    res.json(respostasChamados);
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
        res.json({ resposta, suporte })
    } else {
        let suporte = await Suporte.findOne({ where: { sup_id: resposta.resp_sup_id } });
        res.json({ resposta, suporte });
    };
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
    res.json({ mensagem: "Informações do equipamento editadas com sucesso." });
});

app.delete("/equipamentos/:id", async (req, res) => {
    await Equipamento.destroy({
        where: {
            equ_id: req.params.id
        }
    });
    res.json({ mensagem: "Equipamento excluído com sucesso." });
});

app.get("/gerarRelatorio/:cham_id", async (req, res) => {
    const chamado = await Chamado.findOne({
        where: {
            cham_id: req.params.cham_id
        }
    });

    const resposta = await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.params.cham_id
        }
    });

    const suporte = await Suporte.findOne({
        where: {
            sup_id: resposta.resp_sup_id
        }
    });

    const cliente = await Cliente.findOne({
        where: {
            cli_cpf: chamado.cham_cli_cpf
        }
    });

    const equipamento = await Equipamento.findOne({
        where: {
            equ_cham_id: req.params.cham_id
        }
    });

    res.json({ chamado, equipamento, resposta, suporte, cliente });
});

app.post("/responderChamado/:cham_id", async (req, res) => {
    if (await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.params.cham_id
        }
    })) {
        try {
            RespostaChamado.update({
                resp_soluc_comum: req.body.soluc_comum,
                resp_data: new Date()
            }, {
                where: {
                    resp_cham_id: req.params.cham_id
                }
            });
            res.json({ msg: "Resposta do chamado alterada com sucesso." })
        } catch (error) {
            res.json(error);
        };
    } else {
        try {
            const respostaChamado = await RespostaChamado.create({
                resp_data: new Date(),
                resp_soluc_comum: req.body.soluc_comum,
                resp_sup_id: req.body.sup_id,
                resp_cham_id: req.params.cham_id
            });
            console.log(respostaChamado);
            res.json(respostaChamado);
        } catch (error) {
            res.json(error);
        };
    };

    await Chamado.update({
        cham_status: "Em andamento"
    }, {
        where: {
            cham_id: req.params.cham_id
        }
    });
});

app.get("/verResposta/:cham_id", async (req, res) => {
    const chamado = await Chamado.findOne({
        where: {
            cham_id: req.params.cham_id
        }
    });

    const resposta = await RespostaChamado.findOne({
        where: {
            resp_cham_id: req.params.cham_id
        }
    });

    res.json({ chamado, resposta });
});

let token = {};

app.post("/login", async (req, res) => {
    if (req.body.credencial == "admin" && req.body.senha == "fatec") res.json({ login: true, msg: "Login realizado com sucesso!", token: "admin" });
    if (req.body.credencial.match(/^(\#[0-9]{1,8})$/)) {
        if (await Suporte.findOne({ where: { sup_id: req.body.credencial.replace(/\#/, "") } }) == null) res.json({ login: false, msg: "Suporte não cadastrado!" });
        else {
            let suporte = await Suporte.findOne({ where: { sup_id: req.body.credencial.replace(/\#/, "") } });
            if (req.body.senha == suporte.sup_senha) res.json({ login: true, msg: "Login realizado com sucesso!", token: suporte.sup_id });
            else res.json({ login: false, msg: "Senha incorreta!" });
        };
    } else {
        if (await Cliente.findOne({ where: { cli_cpf: req.body.credencial } }) == null) res.json({ login: false, msg: "Cliente não cadastrado!" });
        else {
            let cliente = await Cliente.findOne({ where: { cli_cpf: req.body.credencial } });
            if (req.body.senha == cliente.cli_senha) res.json({ login: true, msg: "Login realizado com sucesso!", token: cliente.cli_cpf });
            else res.json({ login: false, msg: "Senha incorreta!" });
        };
    };
});

app.post("/cadastrar/cliente", async (req, res) => {
    try {
        await Cliente.create({
            cli_nome: req.body.nome,
            cli_email: req.body.email,
            cli_cep: req.body.cep,
            cli_endereco: req.body.endereco,
            cli_telefone: req.body.telefone,
            cli_cpf: req.body.cpf,
            cli_senha: req.body.senha
        });
        res.json({ cadastro: true });
    } catch (error) {
        let msg = "Cadastro falhou!";
        if (error.errors[0].message == "PRIMARY must be unique") msg = "CPF já cadastrado!"
        res.json({ cadastro: false, msg: msg });
    }
});

app.post("/cadastrar/suporte", async (req, res) => {
    try {
        let suporte = await Suporte.create({
            sup_nome: req.body.nome,
            sup_email: req.body.email,
            sup_telefone: req.body.telefone,
            sup_cpf: req.body.cpf,
            sup_senha: req.body.senha
        });
        res.json({ cadastro: true, id: suporte.sup_id });
    } catch (error) {
        let msg = "Cadastro falhou!";
        res.json({ cadastro: false, msg: msg });
    }
});

app.listen(8080);
