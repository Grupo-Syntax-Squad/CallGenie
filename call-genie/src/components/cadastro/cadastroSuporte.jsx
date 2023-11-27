import CadastroCSS from "./cadastro.module.css";
import axios from "axios";
import { ipAPI } from "../../constants/routes";

function CadastrarSuporte() {
  let infos = {};
  
  function handleChange(event) {
    infos[event.target.name] = event.target.value;
  };

  function handleSubmit(event) {

    axios.post(`${ipAPI}suportes`, {
      nome: infos.nome,
      email: infos.email,
      cpf: infos.cpf,
      telefone: infos.tel,
      senha: infos.senha,
      adm_id: infos.idsupervisor
    }).then(response => {
      if (response.data.sup_id === undefined) {
        console.log(response.data.errors[0].message);
        if (response.data.errors[0].message === "sup_cpf must be unique") alert("CPF já cadastrado!");
        else alert("Erro ao cadastrar suporte tente novamente!");
      } else {
        alert(`Cadastro realizado com sucesso, ID de acesso: ${response.data.sup_id}`)
      };
    });
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
            <input className={CadastroCSS.input} type="text" placeholder="Nome" name="nome" onChange={handleChange} />
            <input className={CadastroCSS.input} type="number" placeholder="CPF" name="cpf" onChange={handleChange} />
            <input className={CadastroCSS.input} type="password" placeholder="Senha" name="senha" onChange={handleChange} />
            <input className={CadastroCSS.input} type="email" placeholder="E-mail" name="email" onChange={handleChange} />
            <input className={CadastroCSS.input} type="tel" placeholder="Telefone" name="tel" onChange={handleChange} />
            <input className={CadastroCSS.input} type="number" placeholder="Insira aqui o Id so Supervisor" name="idsupervisor" id="idsupervisor" onChange={handleChange} />
            <input className={CadastroCSS.button_input} type="button" value="Cadastrar-se"  onClick={handleSubmit} />
          </form>
        </div>
      </main>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}

export default CadastrarSuporte;
