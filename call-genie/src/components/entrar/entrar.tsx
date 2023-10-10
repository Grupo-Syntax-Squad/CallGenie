import React from "react";
import EntrarPage from "./Entrar.module.css";
import axios from "axios";

export default function Entrar() {
  return (
    <>
      <nav></nav>
      <main>
        <form action="" className={EntrarPage.cadastro_container} >
          <a href="/">
            <img
              src="assets/img/CallGenielogosvg.svg"
              alt="Logo"
              id={EntrarPage.logoindex}
            />
          </a>
          <h2 className={EntrarPage.h2Entrar}>Bem-vindo(a)!</h2>
          <input
            type="text"
            placeholder="Nome de usuário"
            id={EntrarPage.inputNome}
          />
          <input type="password" placeholder="Senha" />
          <a href="#">Esqueci a minha senha</a>
          <input
            type="button"
            value="Entrar"
            className={EntrarPage.button_inputEntrar}
            // onClick={handleSubmit}
          />
        </form>
      </main>
      <p>Novo no Callgenie? <a href="/cadastro">Cadastre-se</a></p>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
