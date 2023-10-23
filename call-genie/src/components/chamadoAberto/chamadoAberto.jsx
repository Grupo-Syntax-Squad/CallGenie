import React, { useState, useEffect } from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import axios from "axios";
import DoLogin from "../DoLogin";

export default function ChamadoAberto() {
  const [chamado, setChamado] = useState({});
  const id = localStorage.getItem("cham_id");
  const cpf = localStorage.getItem("login");
  useEffect(() => {
    axios.get(`http://localhost:8080/chamados/${id}`).then(response => { setChamado(response.data) });
  });
  return (
    <body className={ChamadoAbertoCss.Body}>
      <header>
        <a href="/">
          <img
            src="assets/img/Vector.svg"
            className={ChamadoAbertoCss.logo_genie}
            alt="Logo - CallGenius"
          />
        </a>
        <div className={HeaderChamado.headerItensRight}>
          <img
            src="assets/img/user.png"
            alt="Usuário"
            className={ChamadoAbertoCss.fotoUser}
            id="logo-fundo-brando"
          />
          <h2>Olá, {cpf.length == 1 ? "Suporte" : "User"}</h2>
          <a href="/entrar">
            <img
              src="assets/img/vector_logOut.svg"
              alt="logout"
              className={ChamadoAbertoCss.logOutFoto}
            />
          </a>
        </div>
      </header>

      <div className={ChamadoAbertoCss.ajuda}>
        <a href="/chamadoAberto">Preciso de ajuda</a>
      </div>
      <div className={ChamadoAbertoCss.divFlex}>
        <main>
          <div className={ChamadoAbertoCss.fundoChamadoAberto} >
            <div className={ChamadoAbertoCss.divFlex}>
              <div className={ChamadoAbertoCss.infoDispositivo}>
                <p>Título: {chamado.cham_titulo}</p>
                <p>ID: {id}</p>
                <p>Data de Criação: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</p>
                <p className={ChamadoAbertoCss.statusAndamento}>Chamado em {chamado.cham_status}</p>
              </div>
            </div>
            <div className={ChamadoAbertoCss.flexRow}>
              <div className={ChamadoAbertoCss.fundo_chamado_aberto} >
                <div className={ChamadoAbertoCss.colunaEsquerda} >
                  <p> {chamado.cham_descricao} </p>
                </div>
              </div>
              <div className={ChamadoAbertoCss.colunaDireita}>
                <div className={ChamadoAbertoCss.fundoChamadoAberto}>
                  <h2>Equipamento Cadastrado</h2>
                  <div className={ChamadoAbertoCss.flexRow} >
                    <div className={ChamadoAbertoCss.containerNomeNumero}>
                      <p>Nome: </p>
                      <p>Número de série: </p>
                    </div>
                  </div>
                  <p className={ChamadoAbertoCss.textCenter}>Tipo de equipamento:</p>
                </div>
                <h2>Comentários</h2>
                <textarea name="" id="" cols={30} rows={10} placeholder="Clique aqui para adicionar um comentário ao chamado" className="fundo-chamado-aberto"></textarea>
                <p className="text-chamado-aberto" id="prazo-text">Prazo de resposta até: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 2)).toLocaleDateString()}</p>
                <p className="text-chamado-aberto">Agradecemos o contato, aguarde a resposta de um de nossos suportes</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
    </body>
  );
}
