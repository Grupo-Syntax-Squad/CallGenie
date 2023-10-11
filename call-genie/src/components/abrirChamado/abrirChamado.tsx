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
            src="assets/img/iconeuser2.png"
            alt="Usuário"
          />
          <h2>Olá, user</h2>
          <a href="/entrar">
          <img
            src="assets/img/iconexit.png"
            alt="Sair"
          />
          </a>
        </div>
      </header>
      <main>
        <div className={Abrirchamado.fundoAbrirChamado}>
          <div className={Abrirchamado.flexRow}>
          <img
            src="assets/img/iconback.png"
            alt="Voltar"
            id={Abrirchamado.iconback}
          />
            <h1>Novo chamado</h1>
          </div>
          <form action="/abrirChamado" method="post">
              <div className={Abrirchamado.container_colunas}>
                <div className={Abrirchamado.colunaEsquerda}>
                  <label>
                    <input
                      type="text"
                      placeholder="Título do chamado *"
                      className={Abrirchamado.inputFundo}
                      required
                      name="titulo"
                    />
                  </label>
                  <textarea
                    name="comentario"
                    id={Abrirchamado.inputComentario}
                    cols={30}
                    rows={10}
                    className={Abrirchamado.inputFundo}
                    placeholder="   Comentário"
                  ></textarea>
                  <div className={Abrirchamado.inputEquipamento}>
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
                <div className={Abrirchamado.colunaDireita}>
                  <textarea
                    name="desc"
                    id={Abrirchamado.inputDescricao}
                    cols={100}
                    rows={20}
                    placeholder="Descrição do Chamado"
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
