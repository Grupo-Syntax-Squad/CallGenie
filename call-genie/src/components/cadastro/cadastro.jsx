import React from "react";
import CadastroCSS from "./cadastro.module.css";

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
    <nav>
      <a href="/">
        <img
          src="assets/img/CallGenielogosvg.svg"
          alt="Logo"
          id={CadastroCSS.logoindex}
        />
      </a>
      <div className={CadastroCSS.navbuttons}>
        <a href="/entrar">Entrar</a>
        <a href="/">Sobre</a>
        <a href="/FAQ">FAQ</a>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <div className={CadastroCSS.center}>
      <main className={CadastroCSS.main_div}>
        <h2>Em qual das opções você se encaixa?</h2>
        <div className={CadastroCSS.main_div_user}>
          <a href="/cadastroSuporte" className={CadastroCSS.opcaousuario}>
            <div className={CadastroCSS.cadastro_opcao}>
              <img src="assets/img/userTecnico.png" alt="SUPORTE" />
              <h3>SOU SUPORTE</h3>
            </div>
          </a>
          <a href="/cadastroCliente" className={CadastroCSS.opcaousuario}>
            <div className={CadastroCSS.cadastro_opcao}>
              <img src="assets/img/user_cliente.png" alt="CLIENTE" />
              <h3>SOU CLIENTE</h3>
            </div>
          </a>

        </div>
        <p>
          Precisa de ajuda? <a href="/cadastrar">clique aqui</a>
        </p>
      </main>
    </div>
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
