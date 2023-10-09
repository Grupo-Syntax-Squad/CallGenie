import React from "react";
import Index from "./index.module.css";


export default function Entrar() {
  return (
    <body>
      <nav>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            alt="Logo"
            id={Index.logoindex}
          />
        </a>
        <div className={Index.navbuttons}>
          <a href="/cadastro">Cadastrar</a>
          <a href="/">Sobre</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
      <h1>Bem-vindo(a)!</h1>
          <main>
            <form action="">
            <img
                  src="assets/img/user.png"
                  alt="imagem"
                  className={Index.logoindex}
                />
              <label>
                <input type="text" placeholder="Nome de usuário" />
              </label>
              <label>

                <input type="text" placeholder="Senha" />
              </label>
              
              <a href="#">Esqueci a minha senha</a>
              <input type="button" value="Entrar" className={Index.button_cadastrobutton} />
            </form>
          </main>
        <p>
          Novo no callgenie? <a href="/cadastrar">Cadastre-se</a>
        </p>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </body>
  );
}
