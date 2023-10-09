import React from "react";
import ChamadosPage from "./Chamados.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTable from './StyleTable.module.css'

export default function Chamados() {
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
          <img
            src="assets/img/user.png"
            alt="Usuário"
            className={HeaderChamado.fotouser}
            id="logo-fundo-brando"
          />
          <h2>Olá, user</h2>
          <a href="/entrar">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </header>
      <div className={HeaderChamado.ajuda}>
        <a href="/Chamados">Preciso de ajuda</a>
      </div>
      <main>
        <div className={HeaderChamado.fundo}>
          <div id={ChamadosPage.meusChamadosTitle}>
            <h2>Meus Chamados</h2>
          </div>
          <div className={ChamadosPage.filtrarEBuscar}>
            <div className={ChamadosPage.filtrarChamadosContainer}>
              <div className={ChamadosPage.filtrar}>
                <p>Filtrar por</p>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <div className={ChamadosPage.filtrarMenu}>
                <i className="fa-solid fa-x"></i>
                <li>Em aberto</li>
                <li>Em andamento</li>
                <li>Concluído</li>
                <li>Com equipamento Cadastrado</li>
                <li>Meus chamados</li>
                <li>Ordem Alfabética</li>
              </div>
            </div>
            <div className={ChamadosPage.buscarPorTitulo}>
              <p>Buscar por título</p>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className={StyleTable.mainTable}>
            <section className={StyleTable.tableBody}>
              <table>
                <thead>
                  <tr>
                    <th>Título </th>
                    <th>Ordem </th>
                    <th>Data de criação </th>
                    <th>Status </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* <% chamados.forEach(chamado => { %>
                                    <tr>
                                        <td><a href="/chamado-<%= chamado.dataValues.cham_id %>"><%= chamado.dataValues.cham_titulo %></a></td>
                                        <td><%= chamado.dataValues.cham_id %></td>
                                        <td><%= chamado.dataValues.cham_data_inicio.split(/-/)[2] %>/<%= chamado.dataValues.cham_data_inicio.split(/-/)[1] %>/<%= chamado.dataValues.cham_data_inicio.split(/-/)[0] %></td>
                                        <td><p className="status <%= chamado.dataValues.cham_status %>"><%= chamado.dataValues.cham_status %></p></td>
                                        <!-- <td><button className="deletar-chamado"><i className="fa-solid fa-trash"></i></button></td> -->
                                    </tr>
                            <% }); %> */}
                </tbody>
              </table>
            </section>
            {/* <!-- A tag <dialog> abaixo só aparece se se estiver aberta (<dialog open>) */}
            {/* Ele será ativado quando o usuário clicar no ícone da lixeira--> */}
            <dialog>
              <p>
                VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
                CONFIRMAR?
              </p>
              <button className="sim">SIM</button>
              <button className="nao">NÃO</button>
            </dialog>
            <a href="/abrirChamado" className={ChamadosPage.buttonInput}>
              Abrir novo chamado
            </a>
            <a href="FAQ">
              <button className={ChamadosPage.buttonInput}>Perguntas Frequentes</button>
            </a>
          </div>
        </div>
      </main>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
