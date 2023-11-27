import React, {useEffect, useState} from "react";
import HeaderChamado from "../HeaderChamado/headerChamado.module.css";
import Abrirchamado from "./abrirChamado.module.css";
import axios from "axios";
import { ipAPI } from "../../constants/routes";

let chamado = {};
let equipamento = {
  nome: "",
  numserie: "",
  tipo: ""
};

function handleChange(event) {
  let valor = event.target.value;
  let name = event.target.name;
  switch (name) {
    case "equipamentonome":
      equipamento["nome"] = valor;
      break;
    case "numeroserie":
      equipamento["numserie"] = valor;
      break;
    case "equipamentotipo":
      equipamento["tipo"] = valor;
      break;
    default:
      chamado[name] = valor;
  };
  console.log(chamado, equipamento);
};

export default function AbrirChamado() {
  const [urgencia, setUrgencia] = useState("media")
  const [userName, setUserName] = useState("");

  const userCpf = localStorage.getItem("login");

  useEffect(() => {

    const isSupport = userCpf.length === 1;
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
            `${ipAPI}${isSupport ? "suportes" : "clientes"}/${userCpf}`
        );
        const name = isSupport ? response.data.sup_nome : response.data.cli_nome;
        setUserName(name);
      } catch (error) {
        console.error("Erro ao obter o nome do usuário:", error);
      }
    };

    fetchUsername();
  }, [userCpf]);
  function handleSubmit(event) {
    let data = new Date();
    data.setDate(data.getDate() + 1);
    console.log(axios.post(`${ipAPI}chamados`, {
      titulo: chamado.titulo,
      descricao: chamado.desc,
      status: chamado.status,
      data_inicio: new Date(),
      prazo: data,
      cli_cpf: localStorage.getItem("login"),
      urgencia: urgencia,
      equipamento: equipamento
    }));
  
    window.location.replace("/chamados");
    event.preventDefault();
  };

  return (
    <>
      <header>
        <a href="/">
          <img
            src="assets/img/Vector.svg"
            className={HeaderChamado.logogenie}
            alt="Logo - CallGenius"
          />
        </a>
        <div className={HeaderChamado.headerItensRight}>
          <a href="/alterarDados">
              <img
                src="assets/img/iconeuser2.png"
                alt="Usuário"
              />
          </a>
          <h2>Olá, {userName}</h2>
          <a href="/entrar">
            <img
              src="assets/img/iconexit.png"
              alt="Sair"
            />
          </a>
        </div>
      </header>
      <main>
        <div className={Abrirchamado.fundoAbrirChamado}>
          <div className={Abrirchamado.flexRow}>
            <img
              src="assets/img/iconback.png"
              alt="Voltar"
              id={Abrirchamado.iconback}
              style={{cursor: "pointer"}}
              onClick={() => {window.location.replace("/chamados")}}
            />
            <h1>Novo chamado</h1>
          </div>
          <form action="/abrirChamado" method="post" onSubmit={handleSubmit} className={Abrirchamado.containerAbrirChamado}>
            <div className={Abrirchamado.container_colunas}>
              <div className={Abrirchamado.colunaEsquerda}>
                <label>
                  <input
                    type="text"
                    placeholder="Título do chamado *"
                    className={Abrirchamado.inputFundo}
                    required
                    name="titulo"
                    onChange={handleChange}
                  />
                </label>

                <select name={"filtro prioridade"} className={Abrirchamado.filtrosLista} onChange={(event) => {setUrgencia(event.target.value)}}>
                  <option value="" disabled selected>Selecione a prioridade do chamado</option>
                    <option value="urgente">Urgente</option>
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                </select>


                <div className={Abrirchamado.inputEquipamento}>
                  <input
                    type="text"
                    placeholder="Nome do Equipamento"
                    name="equipamentonome"
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    placeholder="Número de série"
                    name="numeroserie"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Tipo de equipamento"
                    name="equipamentotipo"
                    onChange={handleChange}
                  />
                </div>
                <div>
          </div>
              </div>
              <div className={Abrirchamado.colunaDireita}>
                <textarea
                  name="desc"
                  id={Abrirchamado.inputDescricao}
                  cols={100}
                  rows={20}
                  placeholder="Descrição do Chamado"
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className={Abrirchamado.buttonInput}> Enviar </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
};
