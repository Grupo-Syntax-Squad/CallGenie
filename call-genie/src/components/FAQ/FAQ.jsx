import React from "react";
import HomePage from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div className={HomePage.homefundo}>
      <nav>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            alt="Logo"
            id={HomePage.logoindex}
          />
        </a>
        <div className={HomePage.navbuttons}>
          <a href="/cadastro">Cadastrar</a>
          <a href="/entrar">Entrar</a>
          <a href="/">Sobre</a>

        </div>
      </nav>

      <main className={HomePage.main_texto}>
        <div>
          <h1>FAQ </h1>
          <h2>
            Bem-vindo(a) ao FAQ! Essa página é totalmente dedicada a tirar
            dúvidas e ajudar o usuário a ter uma melhor experiência em nosso
            sistema! Acesse o vídeo tutorial para saber como utilizar o sistema
            da CallGenius clicando no link abaixo: https;//youtube.com/EXEMPLO
          </h2>

          <div className={HomePage.buttoncontainer}>
            <a href="/#">
              <button className={HomePage.cadastrobutton}>Não encontrou uma resposta? Confira o manual de usuário!</button>
            </a>
          </div>
        </div>
        <div>
          <h2> adicionar o formulario de perguntas frequentes aqui</h2>
        </div>
      </main>
      <footer>
        <a>Copyright © 2023 Syntax Squad | Todos os direitos reservados</a>
      </footer>

    </div>

  );
}
