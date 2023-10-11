import React from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
// import "./style/main.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
// import "./style/style-table.css";

export default function ChamadoAberto() {
  return (
    <>
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
          <h2>Olá, user</h2>
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
                      <p>Título:</p>
                      <p>ID:</p>
                      <p>Data de Criação: </p>
                      <p className={ChamadoAbertoCss.statusAndamento}>Chamado em </p>
                  </div>
                </div>
                <div className={ChamadoAbertoCss.flexRow}>
                    <div className={ChamadoAbertoCss.fundo_chamado_aberto} >
                        <div className={ChamadoAbertoCss.colunaEsquerda} >
                          <p> chamadoInfo.dataValues.cham_descricao </p>
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
                        <p className="text-chamado-aberto" id="prazo-text">Prazo de resposta até:</p>
                        <p className="text-chamado-aberto">Agradecemos o contato, aguarde a resposta de um de nossos suportes</p>
                    </div>
                </div>
            </div>
        </main>

        {/* <main>
            <div className="fundo_chamado_aberto div_flex">
                <div className="info_dispositivo">
                    <p>Título: <%= chamadoInfo.dataValues.cham_titulo %></p>
                    <p>ID: <%= chamadoInfo.dataValues.cham_id %></p>
                    <p>Data de Criação: <%= chamadoInfo.dataValues.cham_data_inicio.split(/-/)[2] %>/<%= chamadoInfo.dataValues.cham_data_inicio.split(/-/)[1] %>/<%= chamadoInfo.dataValues.cham_data_inicio.split(/-/)[0] %></p>
                    <p className="status <%= chamadoInfo.dataValues.cham_status.toLowerCase() %>">Chamado em <%= chamadoInfo.dataValues.cham_status %></p>
                </div>
                <div className="flex-row">
                    <div className="fundo-chamado-aberto coluna-esquerda">
                        <p><%= chamadoInfo.dataValues.cham_descricao %></p>
                    </div>
                    <div className="coluna-direita">
                        <div className="fundo-chamado-aberto">
                            <h2>Equipamento Cadastrado</h2>
                            <div className="flex-row container-nome-numero">
                                <p>Nome: </p>
                                <p>Número de série: </p>
                            </div>
                            <p className="text-center">Tipo de equipamento:</p>
                        </div>
                        <h2>Comentários</h2>
                        <textarea name="" id="" cols={30} rows={10} placeholder="Clique aqui para adicionar um comentário ao chamado" className="fundo-chamado-aberto"></textarea>
                        <p className="text-chamado-aberto" id="prazo-text">Prazo de resposta até: <%= prazo %></p>
                        <p className="text-chamado-aberto">Agradecemos o contato, aguarde a resposta de um de nossos suportes</p>
                    </div>
                </div>
            </div>
        </main> */}
    </div> 
    <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
    </>
  );
}
