import React from "react";
import HeaderChamado from "../HeaderChamado/headerChamado.module.css";
import Abrirchamado from "../abrirChamado/abrirChamado.module.css"
import HomePage from "./FAQ.module.css";
//import axios from "axios";

let chamado: any = {
  titulo: "",
  desc: "",
  status: "Aberto",
  equipamentonome: "",
  numeroserie: "",
  equipamentotipo: ""
};

function handleChange(event: any) {
  let valor = event.target.value;
  let name = event.target.name;
  chamado[name] = valor;
  console.log(chamado);
}

function handleSubmit(event: any) {
  let data = new Date();
  data.setDate(data.getDate() + 1);
  // console.log(axios.post("http://localhost:8080/chamados", {
  //   titulo: chamado.titulo,
  //   descricao: chamado.desc,
  //   status: chamado.status,
  //   data_inicio: new Date(),
  //   prazo: data
  // }));

  window.location.replace("/FAQ");
  event.preventDefault();
};

export default function CadastrarespostaFAQ() {
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
          <h2>Olá, suporte</h2>
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
            <h1>Adicionar respostas ao FAQ</h1>
          </div>
          <form action="/CadastrarFAQ" method="post" onSubmit={handleSubmit}>
            <div className={HomePage.container_colunas}>
              <div className={HomePage.colunaEsquerda}>
                <label>
                  <input
                    type="text"
                    placeholder="Titulo do problema *"
                    className={Abrirchamado.inputFundo}
                    required
                    name="tituloFAQ"
                    onChange={handleChange}
                  />
                </label>
                
                <div>             
                <label>
                  <input
                    type="text"
                    placeholder="Descreva o passo a passo para a resolução do problema *"
                    className={HomePage.inputfundo}
                    required
                    name="respostaFAQ"
                    onChange={handleChange}
                  />
                </label></div>
                   <button type="submit" className={Abrirchamado.buttonInput}> Enviar </button>
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
