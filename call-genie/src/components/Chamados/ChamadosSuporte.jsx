import React, { useEffect, useState } from "react";
import ChamadosPageCSS from "./ChamadosPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'
//import axios from "axios";

function handleSubmit(event) {
  let id = event.target.name;
  //axios.delete(`http://localhost:8080/chamados/${id}`);
  window.location.replace("/chamados");
  event.preventDefault();
};

function Table() {

  const [chamados, setChamados] = useState([])

  useEffect(() => {
  //  axios.get("http://localhost:8080/chamados").then(response => setChamados(response.data));
  });

  let listaChamados = chamados.map(chamado =>
    <tr>
      <td>{chamado.cham_titulo}</td>
      <td>{chamado.cham_id}</td>
      <td>{chamado.cham_atividade}</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr className={StyleTableCSS.ptable}>
          <th><p>Título</p></th>
          <th><p>Ordem </p></th>
          <th><p>Atividade</p> </th>
          <th><p>Status </p></th>
        </tr>
      </thead>
      <tbody>{listaChamados}</tbody>
    </table>
  );
};



export default function Chamados() {
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
            <h2>Olá, Suporte</h2>
            <a href="/entrar">
              <img
                src="assets/img/iconexit.png"
                alt="Sair"
              />
            </a>
          </div>
        </header>
        <div className={ChamadosPageCSS.notificacao}>
        <img
                src="assets/img/IconNotificacao.svg"
                alt="Icone de notificação"
              />
          <a href="#">barra de notificação</a>
        </div>

        <main className={ChamadosPageCSS.fundoChamado}>
          <div className={HeaderChamado.fundo}>
            <div className={ChamadosPageCSS.titulo}>
              <h2>Meus Chamados</h2>
            </div>
            <div className={ChamadosPageCSS.filtrosContainer}>
                
          <div>
              <select name={"Filtar Chamados"} className={ChamadosPageCSS.filtrosLista} >
                <optgroup label={"Filtrar Chamados em geral"} >
                  <option value={"Filtro01"}>Ordem Alfabética</option>
                  <option value={"Filtro02"}>ID de pedido</option>
                  <option value={"Filtro03"}>Status do pedido</option>


                </optgroup>
              </select>
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
                  <p>Buscar Chamado  <i className="fa-solid fa-magnifying-glass"></i></p>
                </div>
                <div>
                  <select name={"Filtrar status"} className={ChamadosPageCSS.filtrosListaB}>
                    <optgroup label={"Meus atendimentos"}>
                      <option value={"Filtro01"}>Atendimentos em andamento</option>
                      <option value={"Filtro02"}>Atendimentos concluidos</option>
                      <option value={"Filtro03"}>Atendimentos em aberto</option>
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
                <Table />
              </section>
            </div>
            <div className={ChamadosPageCSS.buttoncontainer}>
            <a href="/Relatorios">
              <button className={ChamadosPageCSS.cadastrobutton}>Relatórios</button>
            </a>
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
