import React, { useEffect, useState } from "react";
import ChamadosPageCSS from "./ChamadosPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'
import axios from "axios";
import { version } from "react-dom";

function handleDeleteChamados(selectedChamados) {
  if (selectedChamados.length === 0) {
    alert('Nenhum chamado selecionado!');
    return;
  }

  selectedChamados.forEach((chamadoId) => {
    axios.delete(`http://localhost:8080/chamados/${chamadoId}`);
  });
  window.location.replace("/chamados");
};

function chamadoPage(e) {
  console.log(e.target.id);
  localStorage.setItem("cham_id", e.target.id);
  window.location.replace("/chamadoAberto");
};

function Table({ selectedChamados, handleCheckboxChange, chamadoPage, filtro }) {
  const [chamados, setChamados] = useState([]);
  let cpf = localStorage.getItem("login");

  useEffect(() => {
    if (cpf.length === 1) {
      axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
    } else {
      axios.get(`http://localhost:8080/chamados/cpf/${cpf}`).then(response => setChamados(response.data));
    };
  });

  let cham = [];

  if (filtro === "") {
    cham = chamados;
  } else {
    chamados.forEach(chamado => {
      if (chamado.cham_id == filtro || chamado.cham_titulo == filtro) {
        cham.push(chamado);
      }
    });
  }

  cham.sort((a, b) => new Date(b.cham_data_inicio) - new Date(a.cham_data_inicio));

  const listaChamados = cham.map((chamado) => (
    
    <tr key={chamado.cham_id}>
      <td
        id={chamado.cham_id}
        onClick={chamadoPage}
        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
      >
        {chamado.cham_titulo}
      </td>
      <td>{chamado.cham_id}</td>
      <td>{chamado.cham_urgencia}</td>
      <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
      <td>{chamado.cham_status}</td>
      <td>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(chamado.cham_id)}
          checked={selectedChamados.includes(chamado.cham_id)}
        />
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr className={StyleTableCSS.ptable}>
          <th><p>Título</p></th>
          <th><p>ID</p></th>
          <th><p>Prioridade</p></th>
          <th><p>Data de criação</p></th>
          <th><p>Status</p></th>
        </tr>
      </thead>
      <tbody>{listaChamados}</tbody>
    </table>
  );
};

export default function Chamados() {
  let cpf = localStorage.getItem("login");
  const [selectedChamados, setSelectedChamados] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userName, setUserName] = useState("");

  const userCpf = localStorage.getItem("login");

  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    if (cpf.length === 1) {
      axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
    } else {
      axios.get(`http://localhost:8080/chamados/cpf/${cpf}`).then(response => setChamados(response.data));
    };
  });

  useEffect(() => {

    const isSupport = userCpf.length === 1;
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/${isSupport ? "suportes" : "clientes"}/${userCpf}`
        );
        const name = isSupport ? response.data.sup_nome : response.data.cli_nome;
        setUserName(name);
      } catch (error) {
        console.error("Erro ao obter o nome do usuário:", error);
      }
    };

    fetchUsername();
  }, [userCpf]);

  const handleCheckboxChange = (chamadoId) => {
    if (selectedChamados.includes(chamadoId)) {
      setSelectedChamados(selectedChamados.filter((id) => id !== chamadoId));
    } else {
      setSelectedChamados([...selectedChamados, chamadoId]);
    }
  };

  const [searchValue, setSearchValue] = useState("");



  return (
    <body className={ChamadosPageCSS.Body}>
      <div className={ChamadosPageCSS.bodyChamados}>
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
        <div className={ChamadosPageCSS.ajuda}>
          <a href="/FAQ">Preciso de ajuda?</a>
        </div>

        <main className={ChamadosPageCSS.fundoChamado}>
          <div className={HeaderChamado.fundo}>
            <div className={ChamadosPageCSS.titulo}>
              <h2>Meus Chamados</h2>
            </div>
            <div className={ChamadosPageCSS.filtrosContainer}>
              <div className={ChamadosPageCSS.filtros}>
                <button>Meus Chamados  <i className="fa-solid fa-arrow-down"></i></button>
              </div>
              <div className={ChamadosPageCSS.filtro}>
                <input
                  type="string"
                  placeholder="escreva o ID que você quer procurar aqui."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            <div className={StyleTableCSS.mainTable}>
              <section className={StyleTableCSS.tableBody}>
                <Table selectedChamados={selectedChamados} handleCheckboxChange={handleCheckboxChange} chamadoPage={chamadoPage} filtro={searchValue} />
              </section>
              {showDeleteDialog && (
                <dialog open>
                  <p>VOCÊ ESTÁ PRESTES A DELETAR UM OU MAIS CHAMADOS, DESEJA CONFIRMAR?</p>
                  <button onClick={() => handleDeleteChamados(selectedChamados)} className={ChamadosPageCSS.sim}>SIM</button>
                  <button onClick={() => setShowDeleteDialog(false)} className={ChamadosPageCSS.nao}>NÃO</button>
                </dialog>
              )}
            </div>
            <div className={ChamadosPageCSS.buttoncontainer}>
              {cpf.length == 1 ? <></> : <a href="/abrirChamado">
                <button className={ChamadosPageCSS.cadastrobutton}>Abrir Chamado</button>
              </a>}
              <a href="/relatorio">
                <button className={ChamadosPageCSS.cadastrobutton}>Relatório</button>
              </a>
              <button onClick={() => setShowDeleteDialog(true)} className={ChamadosPageCSS.cadastrobutton}>Deletar Chamado</button>
            </div>
          </div>
        </main>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </body>
  );
};