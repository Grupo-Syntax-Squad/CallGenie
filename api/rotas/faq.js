import express from "express";
import { Faq, database } from "../db.js";

const faqRouter = express.Router();

faqRouter.get("/faq", async (req, res) => {
    let faq = await Faq.findAll();
    res.json(faq);
});

(async () => {
    await database.sync();
    let faq = await Faq.findOne({
        where: {
            faq_pergunta: "Como funciona o prazo de resposta?"
        }
    });
    if (faq == null) {
        await Faq.create({
            faq_pergunta: "Como funciona o prazo de resposta?",
            faq_resposta: "O prazo de resposta é o o tempo limite que os nossos suportes terão para responder o chamado. O prazo varia conforme a prioridade do chamado. É possível verificar o prazo de resposta após abrir um chamado.",
        });
        await Faq.create({
            faq_pergunta: "Como imprimir um relatório de chamado?",
            faq_resposta: "Na página Meus chamados, selecione o chamado que você deseja imprimir um relatório, é possível selecionar mais de um. Após selecionado(s) clique no botão Relatório e em seguida, Imprimir. Lembrando que o relatório só pode ser gerado caso o chamado já tenha sido concluído.",
        });
        await Faq.create({
            faq_pergunta: "É possível abrir um chamado sem possuir conta no Callgenie?",
            faq_resposta: "É preciso que o cliente se cadastre ou faça Login para ter acesso às funcionalidades do sistema.",
        });
        await Faq.create({
            faq_pergunta: "Como saber se o suporte respondeu o meu chamado?",
            faq_resposta: "Na página Meus chamados, selecione o chamado que você deseja verificar se há uma resposta. Se houver resposta, clique no botão Ver reposta do chamado. O botão só aparecerá se houver respostas.",
        });
        await Faq.create({
            faq_pergunta: "Esqueci minha senha, como faço para recuperá-la?",
            faq_resposta: "Na manual do usuário, há um e-mail de contato, envie uma mensagem para este e-mail, no título do e-mail escreva: 'Esqueci minha senha' . No assunto do e-mail coloque o seu CPF, adicionalmente você também pode enviar seu nome, telefone e outras infomações que julgue serem importantes para identifica-lo. Sua senha será enviada via e-mail.",
        });
        await Faq.create({
            faq_pergunta: "Como faço para saber o número de série do meu equipamento?",
            faq_resposta: "No ato da compra de quaisquer equipamentos em nossa loja, sempre emitimos um comprovante de compra contendo todas as informações técnicas do produto. Caso você não possua este documento ou seu equipamento não tenha sido comprado conosco, você pode abrir um chamado requisitando ajuda para ientificar o número de série.",
        });
        await Faq.create({
            faq_pergunta: "Qual deve ser a prioridade de meu chamado?",
            faq_resposta: "Recomendamos que para obter informações sobre equipamentos e produtos, a prioridade seja baixa. Para problemas técnicos, a prioridade deve ser média. Para problemas técnicos urgentes, a prioridade deve ser alta. Para problemas técnicos urgentes que estejam afetando o funcionamento de sua empresa, a prioridade deve ser urgente.",
        });
    } else {
        console.log("Faq já criado");
    };
})();

export default faqRouter;