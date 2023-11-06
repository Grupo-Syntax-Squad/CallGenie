import React from "react";
import CadastroCSS from "./cadastro.module.css";
import axios from "axios";

let infos = {};

function handleChange(event) {
  infos[event.target.name] = event.target.value;
};

function handleSubmit(event) {
  axios.get(`http://localhost:8080/clientes/${infos.cpf}`).then(response => {
    if (response.data == null) {
      if (infos.cpf.match(/^([0-9]{11})$/) && infos.tel.match(/^([0-9]{11})$/)) {
        axios.post("http://localhost:8080/cadastrar/cliente", {
          nome: infos.nome,
          cpf: infos.cpf,
          email: infos.email,
          telefone: infos.tel,
          endereco: infos.endereco,
          cep: infos.cep,
          senha: infos.senha
        }).then(response => {
          console.log(response);
        });
        window.location.replace("/entrar");
      } else alert("CPF ou Telefone inválido!");
    } else {
      alert("CPF já foi cadastrado!")
    };
  });
  event.preventDefault();
};

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
        <div>
          <div className={CadastroCSS.container_marginAuto}>
            <div className={CadastroCSS.imagem_titulo_container}>
              <h2>Registro de Cliente</h2>
              <img src="assets/img/usercliente2.png" alt="CLIENTE" className={CadastroCSS.imagemuser} />
            </div>
          </div>
          <form className={CadastroCSS.cadastro_container} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="nome" required onChange={handleChange} />
            <input type="password" placeholder="Senha" name="senha" required onChange={handleChange} />
            <input type="email" placeholder="E-mail" name="email" onChange={handleChange} />
            <input type="tel" placeholder="Telefone" name="tel" required onChange={handleChange} />
            <input type="number" placeholder="CEP" name="cep" required onChange={handleChange} />
            <input type="text" placeholder="CPF" name="cpf" required onChange={handleChange} />
            <input type="text" placeholder="Endereço" name="endereco" required onChange={handleChange} />
            <button type="submit" value="Cadastrar-se" className={CadastroCSS.button_input}>Cadastrar-se</button>
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
