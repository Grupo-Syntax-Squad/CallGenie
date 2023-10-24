import React, {useEffect, useState} from "react";
import Alterardados from "./alterarDados.module.css";
import axios from "axios"

export default function AlterarDados() {
  const [inf, setInf] = useState({})
  useEffect (() => {axios.get(`http://localhost:8080/clientes/${localStorage.getItem('login')}`).then(response => {setInf(response.data)})})
  return (
    <>
      <header className={Alterardados.header}>
      <a href="/">
      <img
        src="assets/img/CallGenielogosvg.svg"
        alt="Logo"
        id={Alterardados.logoIndexAlterarDados}
      />
    </a>
      </header>
          <div className={Alterardados.main_div}>
          <div className={Alterardados.flexRowAlterarDados}>
            <img
                  src="assets/img/iconback.png"
                  alt="Voltar"
                  id={Alterardados.iconback}
                />
              <h2 id={Alterardados.h2_AlterarDados}>Alterar Dados de Cadastro</h2>
          </div>
            <div className={Alterardados.fundoCadastro}>
      <main>
              <form action="" className={Alterardados.alterarDados_container} >
                <label>
                  <input
                    type="text"
                    id="input-novo-email"
                    placeholder={inf.cli_email}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="input-novo-telefone"
                    placeholder={inf.cli_telefone}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="input-novo-cep"
                    placeholder={inf.cli_endereco}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="input-nova-senha"
                    placeholder="Nova senha (deixe este campo em branco caso não queira alterá-lo)"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="input-senha-atual"
                    placeholder="Senha atual (deixe este campo em branco caso não queira alterá-lo)"
                  />
                </label>
                <input
                  type="button"
                  value="Salvar Alterações"
                  className={Alterardados.buttonInput}
                />
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
