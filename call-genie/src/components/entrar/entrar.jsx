import React from "react";
import EntrarPage from "./Entrar.module.css";
import axios from "axios";

let infos = {};

function handleChange(event) {
  infos[event.target.name] = event.target.value;
};

function handleSubmit(event) {
  console.log(infos);
  axios.post("http://localhost:8080/login", {
    credencial: infos.cpf,
    senha: infos.senha
  }).then(response => {
    if (response.data.login == false) alert(response.data.msg);
    else {
      if (response.data.token == "admin") {
        localStorage.setItem("admin", true);
        localStorage.setItem("login", response.data.token);
        window.location.replace("/admin");
      };
      localStorage.setItem("login", response.data.token);
      window.location.replace("/chamados")
    };
  });
};

export default function Entrar() {
  localStorage.setItem("login", "");
  return (
    <>
      <nav></nav>
      <main className={EntrarPage.entrar} >
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
            placeholder="CPF ou #ID"
            className={EntrarPage.input}
            name="cpf"
            onChange={handleChange}
          />
          <input className={EntrarPage.input} type="password" placeholder="Senha" name="senha" onChange={handleChange} />
          {/* <a href="#">Esqueci a minha senha</a> */}
          <input
            type="button"
            value="Entrar"
            className={EntrarPage.button_inputEntrar}
            onClick={handleSubmit}
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
