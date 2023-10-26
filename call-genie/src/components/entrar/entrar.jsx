import React from "react";
import EntrarPage from "./Entrar.module.css";
import axios from "axios";

let infos = {};

function handleChange(event) {
  infos[event.target.name] = event.target.value;
};

function handleSubmit(event) {
  if (infos.cpf.match(/^(\#[0-9]{1,8})$/)) {
    axios.get(`http://localhost:8080/suportes/${infos.cpf.replace(/\#/, "")}`).then(response => {
      if (response.data == null) window.alert("Usuário não encontrado!");
      else {
        if (infos.senha == response.data.sup_senha) {
          localStorage.setItem("login", infos.cpf.replace(/\#/, ""))
          window.location.replace("/chamadosSuporte");
          console.log(localStorage.getItem("login"));
        } else {
          window.alert("Senha incorreta!");
        };
      }
    });
  } else {
    axios.get(`http://localhost:8080/clientes/${infos.cpf}`).then(response => {
      if (response.data == null) window.alert("Usuário não encontrado!");
      else {
        if (infos.senha == response.data.cli_senha) {
          localStorage.setItem("login", infos.cpf)
          window.location.replace("/chamados");
          console.log(localStorage.getItem("login"));
        } else {
          window.alert("Senha incorreta!");
        };
      }
    });
  };
};

export default function Entrar() {
  localStorage.setItem("login", "");
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
            placeholder="CPF ou #ID"
            id={EntrarPage.inputNome}
            name="cpf"
            onChange={handleChange}
          />
          <input type="password" placeholder="Senha" name="senha" onChange={handleChange} />
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
