import React from "react";
import ChamadosPageCSS from "./AdminPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'
import AdminPage from "./AdminPage.module.css"

import axios from "axios";
import { useEffect, useState } from "react";

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

function Table({ selectedChamados, handleCheckboxChange, chamadoPage, chamados }) {

  let table = chamados.map((chamado) => (
    <tr>
      <td id={chamado.cham_id} onClick={chamadoPage} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>{chamado.cham_titulo}</td>
      <td>{chamado.cham_id}</td>
      <td>{chamado.cham_urgencia}</td>
      <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
      <td>{chamado.cham_status}</td>
      <td><input type="checkbox" onChange={() => handleCheckboxChange(chamado.cham_id)} checked={selectedChamados.includes(chamado.cham_id)} /></td>
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
      <tbody>{table}</tbody>
    </table>
  );
};

// function Table({ selectedChamados, handleCheckboxChange, chamadoPage }) {
//   const [chamados, setChamados] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
//     console.log(chamados);
//   });

//   let cham = [];

//   cham.sort((a, b) => new Date(b.cham_data_inicio) - new Date(a.cham_data_inicio));

//   const listaChamados = cham.map((chamado) => (

//     <tr key={chamado.cham_id}>
//       <td
//         id={chamado.cham_id}
//         onClick={chamadoPage}
//         style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
//       >
//         {chamado.cham_titulo}
//       </td>
//       <td>{chamado.cham_id}</td>
//       <td>{chamado.cham_urgencia}</td>
//       <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
//       <td>{chamado.cham_status}</td>
//       <td>
//         <input
//           type="checkbox"
//           onChange={() => handleCheckboxChange(chamado.cham_id)}
//           checked={selectedChamados.includes(chamado.cham_id)}
//         />
//       </td>
//     </tr>
//   ));

//   return (
//     <table>
//       <thead>
//         <tr className={StyleTableCSS.ptable}>
//           <th><p>Título</p></th>
//           <th><p>ID</p></th>
//           <th><p>Prioridade</p></th>
//           <th><p>Data de criação</p></th>
//           <th><p>Status</p></th>
//         </tr>
//       </thead>
//       <tbody>{listaChamados}</tbody>
//     </table>
//   );
// };

export default function Admin() {
  const [selectedChamados, setSelectedChamados] = useState([]);
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
    console.log(chamados);
  });

  const handleCheckboxChange = (chamadoId) => {
    if (selectedChamados.includes(chamadoId)) {
      setSelectedChamados(selectedChamados.filter((id) => id !== chamadoId));
    } else {
      setSelectedChamados([...selectedChamados, chamadoId]);
    }
  };

  function chamadoPage(e) {
    console.log(e.target.id);
    localStorage.setItem("cham_id", e.target.id);
    window.location.replace("/chamadoAberto");
  };

  return (
    <>
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
            <img
              src="assets/img/logo_fundobranco.png"
              alt="Admin"
            />
            <h2>Olá, Administrador</h2>
            <a href="/entrar">
              <img
                src="assets/img/iconexit.png"
                alt="Sair"
              />
            </a>
          </div>
        </header>


        <main className={ChamadosPageCSS.fundoChamado}>
          <div className={HeaderChamado.fundo}>
            <div className={ChamadosPageCSS.titulo}>
              <h2>Painel de Controle</h2>
            </div>
            <div className={ChamadosPageCSS.filtrosContainer}>

              <div>
                <select name={"Filtar Chamados"} className={ChamadosPageCSS.filtrosLista}>
                  <optgroup label={"Filtrar Chamados"}>
                    <option value={"Filtro01"}>Em Aberto</option>
                    <option value={"Filtro02"}>Em Andamento</option>
                    <option value={"Filtro03"}>Concluído</option>
                    <option value={"Filtro04"}>Equipamento Cadastrado</option>
                    <option value={"Filtro05"}>ID do Chamado</option>
                    <option value={"Filtro06"}>Ordem Alfabética</option>
                  </optgroup>
                </select>
              </div>
              <div className={ChamadosPageCSS.filtros}>
                <p>Buscar Chamado  <i className="fa-solid fa-magnifying-glass"></i></p>
              </div>
              <div>
                <select name={"Filtrar Suporte"} className={ChamadosPageCSS.filtrosListaB}>
                  <optgroup label={"Filtrar Suporte"}>
                    <option value={"Filtro01"}>ID</option>
                    <option value={"Filtro02"}>Nome</option>
                    <option value={"Filtro03"}>CPF</option>
                    <option value={"Filtro04"}>Telefone</option>
                    <option value={"Filtro05"}>Email</option>
                    <option value={"Filtro06"}>Ordem Alfabética</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <a href="/CadastrarFAQ" className={ChamadosPageCSS.postButtonsC}>
                  Respostas Frequentes </a>
              </div>
            </div>
            <div className={StyleTableCSS.mainTable}>
              <section className={StyleTableCSS.tableBody}>
                <Table selectedChamados={selectedChamados} handleCheckboxChange={handleCheckboxChange} chamadoPage={chamadoPage} chamados={chamados} />
              </section>
              <dialog>
                <p>
                  VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
                  CONFIRMAR?
                </p>
                <button className={ChamadosPageCSS.sim}>SIM</button>
                <button className={ChamadosPageCSS.nao}>NÃO</button>
              </dialog>
            </div>
            <div className={ChamadosPageCSS.postButtons}>
              <div className={ChamadosPageCSS.postButtonsA}>
                <a href="/cadastroSuporte" className={ChamadosPageCSS.buttonInput}>
                  Cadastrar suporte
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}