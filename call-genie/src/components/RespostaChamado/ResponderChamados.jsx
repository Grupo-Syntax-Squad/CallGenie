import React from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import AbrirChamado from "../abrirChamado/abrirChamado";

export default function ChamadoAberto() {
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
                      <p>Título:{chamado.cham_titulo}</p>
                      <p>ID:{id}</p>
                      <p>CPF do Cliente: {chamado.cli_cpf}</p> 
                      <p>Data de Criação: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()} </p>
                      <p className={ChamadoAbertoCss.statusAndamento}>Chamado em {chamado.cham_status} </p>
                  </div>
                </div>
                <div className={ChamadoAbertoCss.flexRow}>
                    <div className={ChamadoAbertoCss.colunaEsquerda}>
                        <div className={ChamadoAbertoCss.fundo_chamado_aberto}>
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
                      <h2>Resposta</h2>
                      <textarea name="" id="" cols={30} rows={10} placeholder="Clique aqui para adicionar uma resposta" className="fundo-chamado-aberto"></textarea>
                      <p className="text-chamado-aberto" id="prazo-text">Prazo de resposta até: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 2)).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
        </main>
        <button type="submit" className={AbrirChamado.buttonInput}> Enviar </button>
    </div> 
    <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
    </body>
  );
}
