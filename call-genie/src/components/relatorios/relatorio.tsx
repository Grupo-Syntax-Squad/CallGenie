import React from "react";
import RelatorioPag from "./relatorioPag.module.css";

export default function Relatorio() {
  return (
    <div>
      <div className={RelatorioPag.flex}>
        <img
          src="assets/img/CallGenie_Black.png"
          alt="Logo"
          id={RelatorioPag.logoindex}
        />
        <p>Id do Chamado: </p>
      </div>
      <p>Chamado respondido por: nome do suporte</p>
      <div className={RelatorioPag.center}>
        <div className={RelatorioPag.flex}>
          <p>Nome do cliente</p>
          <p>CPF do cliente</p>
          <p>(xx)-xxxxx-xxxx</p>
        </div>
      </div>
      <div className={RelatorioPag.divisor}></div>
      <div className={RelatorioPag.flex}>
          <h2>TÍtulo do chamado</h2>
          <h3>prioridade do chamado</h3>
          <p>criado em: xx/xx/xxxx</p>
      </div>
      <p className={RelatorioPag.flex}>
        <span>Descrição:</span>Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Reprehenderit consequatur nulla rem placeat incidunt
        labore accusamus, eum, dicta expedita nihil iusto explicabo architecto,
        enim recusandae aperiam! Provident corrupti minima ullam.
      </p>
      <p className={RelatorioPag.flex}>
        <span>Equipamento:</span>Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Iste sed nesciunt totam cum odit vero, perspiciatis
        accusantium dolores nulla quam quia fugiat excepturi deleniti magni
        doloremque laborum officia, debitis ut!
      </p>
      <p className={RelatorioPag.flex}>
        <span>Resposta:</span>Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Expedita id, officia ut possimus adipisci rem repellat
        animi quo, laudantium sunt consequuntur? Tenetur animi temporibus
        aliquid doloremque veniam minus voluptatum quae.
      </p>
      <p className={RelatorioPag.flex}>
        <span>Comentário:</span>Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Cumque commodi nulla dolore! Ut quae veritatis
        perspiciatis quo labore assumenda nostrum vel blanditiis earum laborum!
        Perspiciatis beatae dolorum quibusdam eveniet suscipit!
      </p>
      <p className={RelatorioPag.flex}>Encerrado em: xx/xx/xxxx</p>
      <footer>
        <p>Copyright © 2023 Syntax Squad | Todos os direitos reservados</p>
        <p>Relatório gerado em: xx/xx/xxxx</p>
      </footer>
    </div>
  );
}
