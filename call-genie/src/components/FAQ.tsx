import React from "react";
import "./style/main.css";

export default function FAQ() {
  return (
    <>
      <nav>
        <a href="/" className="logo">
          <img
            src="assets/img/CallGenielogosvg.svg"
            className="logonome"
            id="logo-index"
            alt="Logo"
          />
        </a>
        <div className="nav-buttons">
          <a href="/cadastrar">Cadastrar</a>
          <a href="/entrar">Entrar</a>
          <a href="/sobre">Sobre</a>
        </div>
      </nav>
      <main>
        <div>
          <h1>FAQ </h1>
          <h2>
            Bem-vindo(a) ao FAQ! Essa página é totalmente dedicada a tirar
            dúvidas e ajudar o usuário a ter uma melhor experiência em nosso
            sistema! Acesse o vídeo tutorial para saber como utilizar o sistema
            da CallGenius clicando no link abaixo: https;//youtube.com/EXEMPLO
          </h2>
          <div className="button-container">
            <h2>Não encontrou uma resposta? Confira o manual de usuário!</h2>
          </div>
        </div>
        <div>
          <img
            src="assets/img/imagem-homepage.svg"
            alt="imagem-homepage"
            className="fundo"
          />
        </div>
      </main>
      <footer>
        <a>Copyright © 2023 Syntax Squad | Todos os direitos reservados</a>
      </footer>
    </>
  );
}
