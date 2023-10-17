import React from "react";
//import "./style/main.css";

export default function opcaoCadastro() {
  return (
    <>
      <header>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            className="logonome"
            alt="Logo - CallGenius"
          />
        </a>
      </header>
      <main>
        <h2>Em qual das opções você se encaixa?</h2>
        <div className="cadastro-opcoes">
          <a href="/cadastrar">
            <div className="cadastro-opcao">
              <img src="assets/img/user.png" alt="SUPORTE" />
              <p>SOU SUPORTE</p>
            </div>
          </a>
          <a href="/cadastrar">
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
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
