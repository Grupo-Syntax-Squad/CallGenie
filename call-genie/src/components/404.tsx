import React from "react";
import Erro404 from "./404.module.css";
import { any } from "prop-types";


export default function NotFoundPage() {
  return (
    <>
      <header>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            className={Erro404.logonome}
            alt="Logo - CallGenius"
          />
        </a>
      </header>
      <body>
        <div id={Erro404.clouds}>
          <div className={Erro404.cloud_x1}></div>
          <div className={Erro404.cloud_x1_5}></div>
          <div className={Erro404.cloud_x2}></div>
          <div className={Erro404.cloud_x3}></div>
          <div className={Erro404.cloud_x4}></div>
          <div className={Erro404.cloud_x5}></div>
        </div>
        <div className={Erro404.c}>
          <div className={Erro404._404}>404</div>
          <hr />
          <div className={Erro404._1}>A PÁGINA</div>
          <div className={Erro404._2}>NÃO FOI ENCONTRADA</div>
          <a className={Erro404.btn} href="/">
            VOLTAR PARA O INÍCIO
          </a>
        </div>
      </body>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
