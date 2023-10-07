import React from "react";
import Principal from "/headerprincipal.module.css";
import Index from "./index.module.css";
import Main from "./main.module.css";

export default function Entrar() {
  return (
    <>
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
          <a href="/entrar">Entrar</a>
          <a href="/">Sobre</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
          <main>
            <h1>Bem-vindo(a)!</h1>
            <form action="">
              <label>
                <img
                  src="assets/img/user.png"
                  alt="imagem"
                  className={Index.logoindex}
                />
                <input type="text" placeholder="Nome de usuário" />
              </label>
              <label>
                <img
                  src="assets/img/user.png"
                  alt="imagem"
                  className={Index.logoindex}
                />
                <input type="text" placeholder="Senha" />
              </label>
              <a href="#">Esqueci a minha senha</a>
              <input type="button" value="Entrar" className={Main.buttoninput} />
            </form>
          </main>
        <p>
          Novo no callgenie? <a href="/cadastrar">Cadastre-se</a>
        </p>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
