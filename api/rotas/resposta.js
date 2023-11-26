import express from "express";
import { Chamado, RespostaChamado, Suporte } from "../db.js";

const respostaRouter = express.Router();

respostaRouter.get("/respostasChamados", async (req, res) => {
    let respostasChamados = await RespostaChamado.findAll();
    res.json(respostasChamados);
});


respostaRouter.get("/respostasChamados/:cham_id", async (req, res) => {
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

respostaRouter.post("/responderChamado/:cham_id", async (req, res) => {
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
        cham_status: "andamento"
    }, {
        where: {
            cham_id: req.params.cham_id
        }
    });
});

respostaRouter.get("/verResposta/:cham_id", async (req, res) => {
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

export default respostaRouter;