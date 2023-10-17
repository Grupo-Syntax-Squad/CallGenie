import React from "react";
import Alterardados from "./alterarDados.module.css";

export default function AlterarDados() {
  return (
    <>
      <header>
        <img src="assets/img/CallGenielogosvg.svg" alt="Logo" id="logo-index" />
      </header>
      <div className="fundoCadastro">
        <div className={Alterardados.cadastroContainer}>
          <main>
            <h1>Alterar Dados de Cadastro</h1>
            <form action="">
              <label>
                <input
                  type="text"
                  id="input-novo-email"
                  placeholder="Novo E-mail"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="input-novo-telefone"
                  placeholder="Novo telefone"
                />
              </label>
              <label>
                <input type="text" id="input-novo-cep" placeholder="Novo CEP" />
              </label>
              <label>
                <input
                  type="text"
                  id="input-senha-atual"
                  placeholder="Senha Atual"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="input-nova-senha"
                  placeholder="Nova Senha"
                />
              </label>
              <input type="button" value="Entrar" className="button-input" />
            </form>
          </main>
        </div>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
