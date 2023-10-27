import React, { useEffect, useState } from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import AbrirChamado from "../abrirChamado/abrirChamado";
import axios from "axios";

export default function ChamadoAberto() {
  const [chamado, setChamado] = useState({});
  const [equipamento, setEquipamento] = useState({});
  const [resposta, setResposta] = useState("");

  const sup_id = localStorage.getItem("login");
  const cham_id = localStorage.getItem("cham_id");
  useEffect(() => {
    axios.get(`http://localhost:8080/chamados/${cham_id}`).then(response => {
      setEquipamento(response.data.equipamento);
      setChamado(response.data.chamado);
    });
  });

  const handleChange = (event) => {
    setResposta(event.target.value);
    console.log(resposta);
  };

  const handleSubmit = (event) => {
    let dataResposta = new Date();
    axios.post("http://localhost:8080/respostasChamados", {
      data: dataResposta,
      soluc_comum: resposta,
      sup_id: sup_id,
      cham_id: cham_id
    });

    axios.get(`http://localhost:8080/chamados/${cham_id}`).then(response => {
      axios.put(`http://localhost:8080/chamados/${cham_id}`, {
        titulo: response.data.chamado.cham_titulo,
        descricao: response.data.chamado.cham_descricao,
        data_inicio: response.data.chamado.cham_data_inicio,
        prazo: response.data.chamado.cham_prazo,
        status: "andamento"
      });
    });

    // window.location.replace("/chamadoAberto");
    event.preventDefault();
  };

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
        <a href="/FAQ">Preciso de ajuda</a>
      </div>
      <div className={ChamadoAbertoCss.divFlex}>
        <main>
          <div className={ChamadoAbertoCss.fundoChamadoAberto} >
            <div className={ChamadoAbertoCss.divFlex}>
              <div className={ChamadoAbertoCss.infoDispositivo}>
                <p>Título:{chamado.cham_titulo}</p>
                <p>ID:{cham_id}</p>
                <p>CPF do Cliente: {chamado.cham_cli_cpf}</p>
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
                      <p>Nome: {equipamento.equ_nome}</p>
                      <p>Número de série: {equipamento.equ_numserie}</p>
                    </div>
                  </div>
                  <p className={ChamadoAbertoCss.textCenter}>Tipo de equipamento: {equipamento.equ_tipo}</p>
                </div>
                <h2>Resposta</h2>
                <textarea name="resposta" cols={30} rows={10} placeholder="Clique aqui para adicionar uma resposta" className="fundo-chamado-aberto" onChange={handleChange}></textarea>
                <p className="text-chamado-aberto" id="prazo-text">Prazo de resposta até: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 2)).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </main>
        <button type="submit" className={AbrirChamado.buttonInput} onClick={handleSubmit}> Enviar </button>
        <button type="submit" className={AbrirChamado.buttonInput} onClick={handleSubmit}> finalizar chamado </button>
        {/* fazer a função de mudar estado e colocar ela no lugar de "MudarEstado"  */}

      </div>
      <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
    </body>
  );
}
