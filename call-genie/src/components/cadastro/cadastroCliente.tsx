import React from "react";
import CadastroCSS from "./cadastro.module.css";
import { any } from "prop-types";

function CadastrarCliente() {
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
      <div >
        <div className={CadastroCSS.container_marginAuto}>
          <div className={CadastroCSS.imagem_titulo_container}>
            <h2>Registro de Cliente</h2>
            <img src="assets/img/usercliente2.png" alt="CLIENTE" className={CadastroCSS.imagemuser}/>
          </div>
        </div>
        <form action="" className={CadastroCSS.cadastro_container}>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Nome de Usuário" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Telefone" />
          <input type="number" placeholder="CEP" />
          <input type="number" placeholder="CPF" />
          <input type="text" placeholder="Endereço" />
          <input type="button" value="Cadastrar-se" className={CadastroCSS.button_input} />
        </form>
      </div>
    </main>
    <footer>
      Copyright © 2023 Syntax Squad | Todos os direitos reservados
    </footer>
    </>
  );
}

export default CadastrarCliente;
