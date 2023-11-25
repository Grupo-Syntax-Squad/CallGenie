import React from "react";
import CssTemplate from './template.module.css'
import HeaderChamadoCSS from '../HeaderChamado/headerChamado.module.css'
import ChamadosPageCSS from "../Chamados/Chamados.module.css";
import StyleTableCSS from '../Chamados/StyleTable.module.css'



export default function Template() { 
  return (
    <>
      <header>
        <a href="/">
          <img
            src="assets/img/Vector.svg"
            className={HeaderChamadoCSS.logogenie}
            alt="Logo - CallGenius"
          />
        </a>
        <div className={HeaderChamadoCSS.headerItensRight}>
          <img
            src="assets/img/user.png"
            alt="Usuário"
            className={HeaderChamadoCSS.fotouser}
            id="logo-fundo-brando"
          />
          <h2>Olá, user</h2>
          <a href="/entrar">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </header>
      <div className={HeaderChamadoCSS.ajuda}>
        <a href="/Chamados">Preciso de ajuda</a>
      </div>
      <main>
        <div className={HeaderChamadoCSS.fundo}>
          <div id={ChamadosPageCSS.meusChamadosTitle}>
            <h2>Meus Chamados</h2>
          </div>
          <div className={ChamadosPageCSS.filtrarEBuscar}>
            <div className={ChamadosPageCSS.filtrarChamadosContainer}>
              <div className={ChamadosPageCSS.filtrar}>
                <p>Filtrar por</p>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <div className={ChamadosPageCSS.filtrarMenu}>
                <i className="fa-solid fa-x"></i>
                <li>Em aberto</li>
                <li>Em andamento</li>
                <li>Concluído</li>
                <li>Com equipamento Cadastrado</li>
                <li>Meus chamados</li>
                <li>Ordem Alfabética</li>
              </div>
            </div>
            <div className={ChamadosPageCSS.buscarPorTitulo}>
              <p>Buscar por título</p>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className={StyleTableCSS.mainTable}>
            <section className={StyleTableCSS.tableBody}>
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
                </tbody>
              </table>
            </section>
            <dialog>
              <p>
                VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
                CONFIRMAR?
              </p>
              <button className="sim">SIM</button>
              <button className="nao">NÃO</button>
            </dialog>
            <a href="/abrirChamado" className={ChamadosPageCSS.buttonInput}>
              Abrir novo chamado
            </a>
            <a href="FAQ">
              <button className={ChamadosPageCSS.buttonInput}>Perguntas Frequentes</button>
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