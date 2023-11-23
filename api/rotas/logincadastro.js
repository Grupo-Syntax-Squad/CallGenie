import express from "express";

import { Adm, Chamado, Cliente, Equipamento, RespostaChamado, Suporte, Faq } from "../db.js";
import clienteRouter from "./cliente.js";
import suporteRouter from "./suporte.js";

const logincadastroRouter = express.Router();
logincadastroRouter.use(clienteRouter);
logincadastroRouter.use(suporteRouter);

logincadastroRouter.post("/login", async (req, res) => {
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

logincadastroRouter.post("/cadastrar/cliente", async (req, res) => {
    let suporteJaCadastrado
        let clienteJaCadastrado = await Cliente.findOne({
            where: {
                cli_cpf: req.body.cpf
            }
        });
        logincadastroRouter.get("/suporte", async (req, res) => {
            suporteJaCadastrado = await Suporte.findOne({
                where: {
                    sup_cpf: req.body.cpf
                }
            })
        });
        
        console.log(clienteJaCadastrado, suporteJaCadastrado)
        if (clienteJaCadastrado == "cli_cpf must be unique" || suporteJaCadastrado != null) res.json({ cadastro: false, msg: "CPF ja cadastrado!" });
        else {
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
        }
});

logincadastroRouter.post("/cadastrar/suporte", async (req, res) => {
    let clienteJaCadastrado = await Cliente.findOne({
        where: {
            cli_cpf: req.body.cpf
        }
    })
    let suporteJaCadastrado = await Suporte.findOne({
        where: {
            sup_cpf: req.body.cpf
        }
    })
    console.log(clienteJaCadastrado, suporteJaCadastrado)
    if (clienteJaCadastrado == "cli_cpf must be unique" || suporteJaCadastrado == "sup_cpf must be unique") res.json({ cadastro: false, msg: "CPF ja cadastrado!" });
    else {
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
            if (error.errors[0].message == "PRIMARY must be unique") msg = "CPF já cadastrado!"
            res.json({ cadastro: false, msg: msg });
        }
    }
});

export default logincadastroRouter;