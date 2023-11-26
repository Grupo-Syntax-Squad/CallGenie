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
      if (response.data.token.tipo == "Admin") {
        localStorage.setItem("admin", true);
        localStorage.setItem("login", response.data.token.id);
        window.location.replace("/admin");
      } else if (response.data.token.tipo == "Cliente") {
        localStorage.setItem("cliente", true);
        localStorage.setItem("login", response.data.token.id);
        window.location.replace("/chamados");
      } else if (response.data.token.tipo == "Suporte") {
        localStorage.setItem("suporte", true);
        localStorage.setItem("login", response.data.token.id);
        window.location.replace("/chamadosSuporte");
      };
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
          <input
            type="button"
            value="Entrar"
            className={EntrarPage.button_inputEntrar}
            onClick={handleSubmit}
          />
        </form>
      </main>
      <p className={EntrarPage.entrar}>Novo no Callgenie? <a href="/cadastroCliente">Cadastre-se</a></p>
      <footer className={EntrarPage.entrar}>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
