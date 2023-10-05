import React from "react";
import "./style/header-principal.css";
import "./style/main.css";

export default function Entrar() {
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
      <div className="fundo-cadastro">
        <div className="cadastro-container">
          <main>
            <h1>Bem-vindo(a)!</h1>
            <form action="">
              <label>
                <img
                  src="assets/img/user.png"
                  alt="imagem"
                  className="logo-index"
                />
                <input type="text" placeholder="Nome de usuário" />
              </label>
              <label>
                <img
                  src="assets/img/user.png"
                  alt="imagem"
                  className="logo-index"
                />
                <input type="text" placeholder="Senha" />
              </label>
              <a href="#">Esqueci a minha senha</a>
              <input type="button" value="Entrar" className="button-input" />
            </form>
          </main>
        </div>
        <p>
          Novo no callgenie? <a href="/cadastrar">Cadastre-se</a>
        </p>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
