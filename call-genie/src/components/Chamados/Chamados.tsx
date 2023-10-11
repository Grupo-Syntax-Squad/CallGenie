import React from "react";
import ChamadosPageCSS from "./ChamadosPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'

export default function Chamados() {
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
            src="assets/img/iconeuser2.png"
            alt="Usuário"
          />
          <h2>Olá, user</h2>
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
                <table>
                  <thead>
                    <tr className={StyleTableCSS.ptable}>
                      <th><p>Título </p></th>
                      <th><p>Ordem </p></th>
                      <th><p>Data de criação</p> </th>
                      <th><p>Status </p></th>
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
                <button className={ChamadosPageCSS.sim}>SIM</button>
                <button className={ChamadosPageCSS.nao}>NÃO</button>
              </dialog>
            </div>
              <a href="/abrirChamado" className={ChamadosPageCSS.buttonInput}>
                Abrir novo chamado
              </a>
          </div>
        </main>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </>
  );
}
