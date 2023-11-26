import React, { useState, useEffect } from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import axios from "axios";
import DoLogin from "../DoLogin";

export default function ChamadoAberto() {
  const [chamado, setChamado] = useState({});
  const [equipamento, setEquipamento] = useState({});
  const [suporte, setSuporte] = useState({});
  const [userName, setUserName] = useState("");

  const id = localStorage.getItem("cham_id");
  const cpf = localStorage.getItem("login");
  const sup_id = localStorage.getItem("sup_id");

  useEffect(() => {
    axios.get(`http://localhost:8080/chamados/${id}`).then(response => { 
      setEquipamento(response.data.equipamento);
      setChamado(response.data.chamado);
      setSuporte(response.data.suporte);
    });

    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/${cpf.length === 1 ? "suportes" : "clientes"}/${cpf}`
        );
        const name = cpf.length === 1 ? response.data.sup_nome : response.data.cli_nome;
        setUserName(name);
      } catch (error) {
        console.error("Erro ao obter o nome do usuário:", error);
      }
    };

    fetchUserName();
  }, [id, cpf]);

  console.log(chamado, equipamento, suporte);
  
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
            src="assets/img/iconeuser2.png"
            alt="Usuário"
            className={ChamadoAbertoCss.fotoUser}
            id="logo-fundo-brando"
            onClick={() => {window.location.replace("/chamados")}}
            style={{cursor: "pointer"}}
          />
          <h2>Olá, {userName}</h2>
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
        <a href="/FAQ">Preciso de ajuda?</a>
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
                <img
                  src="assets/img/iconback.png"
                  alt="Voltar"
                  id={ChamadoAbertoCss.iconback}
                  style={{cursor: "pointer"}}
                  onClick={() => {window.location.replace("/chamados")}}
                />
              
              <div className={ChamadoAbertoCss.fundoChamadoAberto} >
                <div className={ChamadoAbertoCss.colunaEsquerda} >
                  
                  <p> {chamado.cham_descricao} </p>
                    {cpf.length < 11 ? <a href="/responderchamado" className={ChamadoAbertoCss.responder_a}>
                      <button className={ChamadoAbertoCss.responderbutton}>Responder Chamado</button>
                    </a> : <a href="/respostaChamado" className={ChamadoAbertoCss.responder_a}>
                      <button className={ChamadoAbertoCss.responderbutton}>Ver resposta do chamado</button>
                    </a>}
                </div>
              </div>
              <div className={ChamadoAbertoCss.colunaDireita}>
                <div className={ChamadoAbertoCss.fundoChamadoAberto}>
                  <h2>Equipamento Cadastrado</h2>
                  <div className={ChamadoAbertoCss.flexRow} >
                    <div className={ChamadoAbertoCss.containerNomeNumero}>
                      <p>Nome: {equipamento.equ_nome}</p>
                      <p>Número de série: {equipamento.equ_numserie}</p>
                    </div>
                  </div>
                  <p className={ChamadoAbertoCss.textCenter}>Tipo de equipamento: {equipamento.equ_tipo}</p>
                </div>
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
