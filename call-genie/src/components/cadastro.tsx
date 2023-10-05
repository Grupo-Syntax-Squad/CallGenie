import React from "react";
import "./style/header-principal.css";
import "./style/main.css";
import { any } from "prop-types";

function Cadastro() {
  return (
    <React.Fragment>
      <Head />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

function Head() {
  return (
    <head>
      <title>Opções de cadastro</title>
    </head>
  );
}

function Header() {
  return (
    <header>
      <a href="/">
        <img
          src="assets/img/CallGenielogosvg.svg"
          className="logonome"
          alt="Logo - CallGenius"
        />
      </a>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Em qual das opções você se encaixa?</h2>
      <div className="cadastro-opcoes">
        <a href="/cadastroopcao">
          <div className="cadastro-opcao">
            <img src="assets/img/user.png" alt="SUPORTE" />
            <p>SOU SUPORTE</p>
          </div>
        </a>
        <a href="/cadastroopcao">
          <div className="cadastro-opcao">
            <img src="assets/img/user.png" alt="CLIENTE" />
            <p>SOU CLIENTE</p>
          </div>
        </a>
      </div>
      <p>
        <a href="#">Clique Aqui se precisar de ajuda</a>
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      Copyright © 2023 Syntax Squad | Todos os direitos reservados
    </footer>
  );
}

export default Cadastro;
