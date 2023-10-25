import React, {useEffect, useState} from "react";
import Alterardados from "./alterarDados.module.css";
import axios from "axios"

let infos = {};

function handleChange(event) {
  infos[event.target.name] = event.target.value;
};

function handleSubmit(event) {
    axios.get(`http://localhost:8080/clientes/${localStorage.getItem("login")}`).then(response => {
      console.log(response);
      console.log(localStorage.getItem('login'))
      axios.put(`http://localhost:8080/clientes/${localStorage.getItem("login")}`, {
        nome: response.data.cli_nome,
        email: infos.inputNovoEmail,
        telefone: infos.inputNovoTelefone,
        endereco: infos.inputNovoCep,
        senha: infos.inputNovaSenha
      });
    })
  event.preventDefault();
};

export default function AlterarDados() {

  const [inf, setInf] = useState({})
  useEffect (() => {axios.get(`http://localhost:8080/clientes/${localStorage.getItem('login')}`).then(response => {setInf(response.data)})});

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
              <form action="" className={Alterardados.alterarDados_container} onSubmit={handleSubmit} >
                <label>
                  <input
                    type="text"
                    id="inputNovoEmail"
                    placeholder={inf.cli_email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="inputNovoTelefone"
                    placeholder={inf.cli_telefone}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="inputNovoCep"
                    placeholder={inf.cli_endereco}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="inputNovaSenha"
                    placeholder="Nova senha (deixe este campo em branco caso não queira alterá-lo)"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="inputSenhaAtual"
                    placeholder="Senha atual*"
                    // required
                    // onChange={handleChange}
                  />
                </label>
                <input
                  type="submit"
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
