import React from "react";
import RelatorioPag from "./relatorioPag.module.css";

export default function Relatorio() {
  return (
    <div className={RelatorioPag.text_black}>
      <div className={RelatorioPag.flexCabecalho}>
        <img
          src="assets/img/CallGenie_Black.png"
          alt="Logo"
          id={RelatorioPag.logoindex}
        />
        <h2 className={RelatorioPag.marginBottom}><strong>Id do Chamado: xxxxx</strong></h2>
      </div>
      <p className={RelatorioPag.text_left}>Chamado respondido por: nome do suporte</p>
      <div className={RelatorioPag.center}>
        <div className={RelatorioPag.flex}>
          <p>Nome do cliente</p>
          <p>CPF do cliente</p>
          <p>(xx)-xxxxx-xxxx</p>
        </div>
      </div>
      <div className={RelatorioPag.divisor}></div>
      <div className={RelatorioPag.flex}>
          <h3>TÍtulo do chamado</h3>
          <h3>prioridade do chamado</h3>
          <h3>criado em: xx/xx/xxxx</h3>
      </div>
      <p className={RelatorioPag.text_justify}>
        <div className={RelatorioPag.marginBottom}>
          <strong>Descrição:</strong>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit consequatur nulla rem placeat incidunt
          labore accusamus, eum, dicta expedita nihil iusto explicabo architecto,
          enim recusandae aperiam! Provident corrupti minima ullam.
        </div>
      </p>
      <p className={RelatorioPag.text_justify}>
        <div className={RelatorioPag.marginBottom}>
          <strong>Equipamento:</strong>Nome  ||  Número de Série  ||  Tipo de Equipamento
        </div>

      </p>
      <p className={RelatorioPag.text_justify}>
        <strong>Resposta:</strong>Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Expedita id, officia ut possimus adipisci rem repellat
        animi quo, laudantium sunt consequuntur? Tenetur animi temporibus
        aliquid doloremque veniam minus voluptatum quae.
      </p>
      <p className={RelatorioPag.text_right}><strong className={RelatorioPag.small_text}>Respondido em: xx/xx/xxxx</strong></p>
      <p className={RelatorioPag.text_justify}>
        <strong>Comentário:</strong>Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Cumque commodi nulla dolore! Ut quae veritatis
        perspiciatis quo labore assumenda nostrum vel blanditiis earum laborum!
        Perspiciatis beatae dolorum quibusdam eveniet suscipit!
      </p>
      <p className={RelatorioPag.text_right}><div className={RelatorioPag.marginBottom}><strong className={RelatorioPag.small_text}>Comentário adicionado em: xx/xx/xxxx</strong></div></p>
      <p className={RelatorioPag.flex}><strong>Encerrado em: xx/xx/xxxx</strong></p>
      <div className={RelatorioPag.footerRelatorio}>
        <footer className={RelatorioPag.flex}>
          <p className={RelatorioPag.small_text}>Copyright © 2023 Syntax Squad | Todos os direitos reservados</p>
          <p className={RelatorioPag.marginLeft}><strong>Relatório gerado em: xx/xx/xxxx</strong></p>
        </footer>
      </div>
    </div>
  );
}
