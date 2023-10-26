import React, { useState } from "react";
import CadastroCSS from "./cadastro.module.css";
import axios from "axios";

function CadastrarSuporte() {
  let infos = {};
  
  function handleChange(event) {
    infos[event.target.name] = event.target.value;
  };

  function handleSubmit(event) {

    axios.post("http://localhost:8080/suportes", {
      nome: infos.nome,
      email: infos.email,
      telefone: infos.tel,
      senha: infos.senha,
      adm_id: infos.idsupervisor
    }).then(response => {
      if (response.data.sup_id == undefined) {
        alert("Erro ao cadastrar suporte tente novamente!")
      } else {
        alert(`Cadastro realizado com sucesso, ID de acesso: ${response.data.sup_id}`)
      };
    });
    // window.location.replace("/entrar");
  };
  
  return (
    <>
      <nav>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            alt="Logo"
            id={CadastroCSS.logoindex}
          />
        </a>
        <div className={CadastroCSS.navbuttons}>
          <a href="/entrar">Entrar</a>
          <a href="/">Sobre</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
      <main>
        <div>
          <div className={CadastroCSS.container_marginAuto}>
            <div className={CadastroCSS.imagem_titulo_container}>
              <h2>Registro de Suporte</h2>
              <img src="assets/img/userTecnico.png" alt="CLIENTE" className={CadastroCSS.imagemuser} />
            </div>
          </div>
          <form action="" className={CadastroCSS.cadastro_suporte_container}>
            <input type="text" placeholder="Nome" name="nome" onChange={handleChange} />
            <input type="password" placeholder="Senha" name="senha" onChange={handleChange} />
            <input type="email" placeholder="E-mail" name="email" onChange={handleChange} />
            <input type="tel" placeholder="Telefone" name="tel" onChange={handleChange} />
            <input type="button" value="Cadastrar-se" className={CadastroCSS.button_input} onClick={handleSubmit} />
          </form>
        </div>
        <div>
          <img src="assets/img/user_adm.png" id={CadastroCSS.useradm} />
          <div className={CadastroCSS.idsupervisor_container}>
            <input type="number" placeholder="Insira aqui o Id so Supervisor" name="idsupervisor" id="idsupervisor" onChange={handleChange} />
          </div>
        </div>
      </main>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}

export default CadastrarSuporte;
