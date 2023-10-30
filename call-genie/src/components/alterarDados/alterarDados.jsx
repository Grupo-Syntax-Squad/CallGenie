import React, { useEffect, useState } from "react";
import Alterardados from "./alterarDados.module.css";
import axios from "axios";

function AlterarDados() {
  const [showModifyDataDialog, setShowModifyDataDialog] = useState(false);
  const [inf, setInf] = useState({});

  const [infos, setInfos] = useState({
    inputNovoEmail: "",
    inputNovoTelefone: "",
    inputNovoCep: "",
    inputNovaSenha: "",
    inputSenhaAtual: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/clientes/${localStorage.getItem('login')}`)
      .then(response => {
        setInf(response.data);
      });
  }, []);

  function handleChange(event) {
    setInfos({ ...infos, [event.target.name]: event.target.value });
  }

  function handleModifyData() {
    axios.put(`http://localhost:8080/clientes/${localStorage.getItem("login")}`, {
       nome: inf.cli_nome,
       email: infos.inputNovoEmail || inf.cli_email,
       telefone: infos.inputNovoTelefone || inf.cli_telefone,
       endereco: infos.inputNovoCep || inf.cli_endereco,
       senha: infos.inputNovaSenha || inf.cli_senha,
    });
    window.location.replace("/chamados");
    setShowModifyDataDialog(false);
  }

  function handleSubmit(event) {
    axios.get(`http://localhost:8080/clientes/${localStorage.getItem("login")}`).then(response => {
      if (infos.inputSenhaAtual !== response.data.cli_senha) {
        alert("Senha atual incorreta!");
      } else {
        setShowModifyDataDialog(true);
      }
    });
    event.preventDefault();
  }

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
          <a href="/chamados">
            <img
              src="assets/img/iconback.png"
              alt="Voltar"
              id={Alterardados.iconback}
            />
          </a>
          <h2 id={Alterardados.h2_AlterarDados}>Alterar Dados de Cadastro</h2>
        </div>
        <div className={Alterardados.fundoCadastro}>
          <main>
            <form action="" className={Alterardados.alterarDados_container} onSubmit={handleSubmit}>
              <label>E-mail
                <input
                  type="text"
                  name="inputNovoEmail"
                  placeholder={inf.cli_email}
                  onChange={handleChange}
                />
              </label>
              <label>Telefone
                <input
                  type="text"
                  name="inputNovoTelefone"
                  placeholder={inf.cli_telefone}
                  onChange={handleChange}
                />
              </label>
              <label>CEP
                <input
                  type="text"
                  name="inputNovoCep"
                  placeholder={inf.cli_cep}
                  onChange={handleChange}
                />
              </label>
              <label>Endereço
                <input
                  type="text"
                  name="inputNovoEndereco"
                  placeholder={inf.cli_endereco}
                  onChange={handleChange}
                />
              </label>
              <label>Senha
                <input
                  type="text"
                  name="inputNovaSenha"
                  placeholder="Nova senha (deixe este campo em branco caso não queira alterá-lo)"
                  onChange={handleChange}
                />
              </label>
              <label>Senha Atual
                <input
                  type="text"
                  name="inputSenhaAtual"
                  placeholder="Senha atual*"
                  required
                  onChange={handleChange}
                />
              </label>
              {showModifyDataDialog && (
                <dialog open>
                  <p>VOCÊ ESTÁ PRESTES A ALTERAR SEUS DADOS, DESEJA CONFIRMAR?</p>
                  <button onClick={handleModifyData} className={Alterardados.sim}>SIM</button>
                  <button onClick={() => setShowModifyDataDialog(false)} className={Alterardados.nao}>NÃO</button>
                </dialog>
              )}
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

export default AlterarDados;

