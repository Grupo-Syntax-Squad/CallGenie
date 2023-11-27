import express from 'express';
import { Adm } from '../db.js';

const admRouter = express.Router();


admRouter.get("/adms/:id", async (req, res) => {
    let administrador = await Adm.findOne({
        where: {
            adm_id: req.params.id
        }
    });
    res.json(administrador);
});

admRouter.put("/adms/:id", async (req, res) => {
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

(async () => {
    await Adm.sync();
    let adm = await Adm.findOne({
        where: {
            adm_nome: "admin"
        }
    });
    if (adm == null) {
        await Adm.create({
            adm_nome: "admin",
            adm_telefone: 12997881456,
            adm_email: "emaildoadm@callgenie.com",
            adm_senha: "fatec",
            adm_id: 12345
        });
    } else {
        console.log("Adm já criado");
    };

})();

export default admRouter;