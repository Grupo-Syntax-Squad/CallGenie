import React, { useEffect, useState } from "react";
import ChamadosPageCSS from "./ChamadosPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'
import axios from "axios";

function handleSubmit(event) {
  let id = event.target.name;
  axios.delete(`http://localhost:8080/chamados/${id}`);
  window.location.replace("/chamados");
  event.preventDefault();
};

function chamadoPage(e) {
  console.log(e.target.id);
  localStorage.setItem("cham_id", e.target.id);
  window.location.replace("/chamadoAberto");
};

function Table({ chamadoPage }) {
  const [chamados, setChamados] = useState([])

  let cpf = localStorage.getItem("login");
  useEffect(() => {
    if (cpf.length == 1) {
      axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
    } else {
      axios.get(`http://localhost:8080/chamados/cpf/${cpf}`).then(response => setChamados(response.data));
    };
  });
  let listaChamados = chamados.map(chamado =>
    <tr>
      <td id={chamado.cham_id} onClick={chamadoPage}>{chamado.cham_titulo}</td>
      <td>{chamado.cham_id}</td>
      <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
      <td>{chamado.cham_status}</td>
      {cpf.length == 1 ? <></> : <td><form method="post" name={chamado.cham_id} onSubmit={handleSubmit}><button type="submit">Deletar</button></form></td>}
    </tr>
  );

  return (
    <table>
      <thead>
        <tr className={StyleTableCSS.ptable}>
          <th><p>Título</p></th>
          <th><p>ID </p></th>
          <th><p>Data de criação</p> </th>
          <th><p>Status </p></th>
        </tr>
      </thead>
      <tbody>{listaChamados}</tbody>
    </table>
  );
};

export default function Chamados() {
  let cpf = localStorage.getItem("login");
  if (cpf == "") {
    return (
      <h1>Faça <a href="/entrar">Login</a> para acessar a página de chamados</h1>
    );
  } else {

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
              <img
                src="assets/img/iconeuser2.png"
                alt="Usuário"
              />
              <h2>Olá, {cpf.length == 1 ? "Suporte" : "User"}</h2>
              <a href="/entrar">
                <img
                  src="assets/img/iconexit.png"
                  alt="Sair"
                />
              </a>
            </div>
          </header>
          <div className={ChamadosPageCSS.ajuda}>
            <a href="/Chamados">Preciso de ajuda</a>
          </div>

          <main className={ChamadosPageCSS.fundoChamado}>
            <div className={HeaderChamado.fundo}>
              <div className={ChamadosPageCSS.titulo}>
                <h2>Meus Chamados</h2>
              </div>
              <div className={ChamadosPageCSS.filtrosContainer}>
                <div className={ChamadosPageCSS.filtros}>
                  <p>Meus Chamados  <i className="fa-solid fa-arrow-down"></i></p>
                </div>
                {/* <div className={ChamadosPageCSS.filtrarMenu}>
                    <i className="fa-solid fa-x"></i>
                    <li>Em aberto</li>
                    <li>Em andamento</li>
                    <li>Concluído</li>
                    <li>Com equipamento Cadastrado</li>
                    <li>Meus chamados</li>
                    <li>Ordem Alfabética</li>
                  </div> */}
                <div className={ChamadosPageCSS.filtros}>
                  <p>Buscar por título <i className="fa-solid fa-magnifying-glass"></i></p>
                </div>
              </div>
              <div className={StyleTableCSS.mainTable}>
                <section className={StyleTableCSS.tableBody}>
                  <Table chamadoPage={chamadoPage} />
                </section>
                {/* <!-- A tag <dialog> abaixo só aparece se se estiver aberta (<dialog open>) */}
                {/* Ele será ativado quando o usuário clicar no ícone da lixeira--> */}
                <dialog>
                  <p>
                    VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
                    CONFIRMAR?
                  </p>
                  <button className={ChamadosPageCSS.sim}>SIM</button>
                  <button className={ChamadosPageCSS.nao}>NÃO</button>
                </dialog>
              </div>
              {cpf.length == 1 ? <></> : <a href="/abrirChamado" className={ChamadosPageCSS.buttonInput}>
                Abrir novo chamado
              </a>}
            </div>
          </main>
        </div>
        <footer>
          Copyright © 2023 Syntax Squad | Todos os direitos reservados
        </footer>
      </body>
    );
  }
};
