import React from "react";
import HeaderChamado from "../HeaderChamado/headerChamado.module.css";
import Abrirchamado from "./abrirChamado.module.css";
//import axios from "axios";

let info: any = {
  titulo: "",
  desc: "",
  status: "Aberto",
  data_inicio: new Date(),
  prazo: new Date(),
};

function handleChange(event: any) {
  let valor = event.target.value;
  let name = event.target.name;
  info[name] = valor;
  console.log(info);
}

function handleSubmit(event: any) {
  //console.log(axios.get("http://localhost:8080/chamados"));
}

export default function AbrirChamado() {
  return (
    <>
      <header>
        <a href="/">
          <img
            src="assets/img/Vector.svg"
            className={HeaderChamado.logogenie}
            alt="Logo - CallGenius"
          />
        </a>
        <div className={HeaderChamado.headerItensRight}>
          <img
            src="assets/img/user.png"
            alt="Usuário"
            className={HeaderChamado.fotouser}
            id="logo-fundo-brando"
          />
          <h2>Olá, user</h2>
          <a href="/entrar">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </header>
      <main>
        <div className="fundo-abrir-chamado">
          <div className={Abrirchamado.flexRow}>
            <i className="fa-solid fa-arrow-left" id="icon-back-page"></i>
            <h1>Novo chamado</h1>
          </div>
          <form action="/abrirChamado" method="post">
            <div className="containerAbrirChamado flex-row">
              <div className="coluna-esquerda">
                <label>
                  <input
                    type="text"
                    placeholder="Título do chamado *"
                    className="input-fundo"
                    required
                    name="titulo"
                  />
                </label>
                <textarea
                  name="comentario"
                  id="input-comentario"
                  cols={30}
                  rows={10}
                  className="input-fundo"
                  placeholder="   Comentário"
                ></textarea>

                <div className="input-equipamento">
                  <input
                    type="text"
                    placeholder="Nome do Equipamento"
                    name="equipamentonome"
                  />
                  <input
                    type="number"
                    placeholder="Número de série"
                    name="numeroserie"
                  />
                  <input
                    type="text"
                    placeholder="Tipo de equipamento"
                    name="equipamentotipo"
                  />
                </div>
              </div>
              <div className="coluna-direita">
                <textarea
                  name="desc"
                  id="input-descricao"
                  cols={100}
                  rows={20}
                  placeholder="Descrição do Chamado"
                  className="input-fundo"
                ></textarea>
                <button type="submit" className={Abrirchamado.buttonInput}>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
