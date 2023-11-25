import React, { useEffect, useState } from "react";
import ChamadoAbertoCss from "./chamadoAberto.module.css"
// import "./style/main.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
// import "./style/style-table.css";
import axios from "axios";

export default function ChamadoAberto() {
  const [chamado, setChamado] = useState({});
  const [resposta, setResposta] = useState({});
  const [userName, setUserName] = useState(""); // Adicione o estado para armazenar o nome do usuário

  const cham_id = localStorage.getItem("cham_id");

  useEffect(() => {
    axios.get(`http://localhost:8080/verResposta/${cham_id}`).then(response => {
      setChamado(response.data.chamado);
      setResposta(response.data.resposta);
    });

    const userCpf = localStorage.getItem("login");

    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/clientes/${userCpf}`
        );
        const name = response.data.cli_nome;
        setUserName(name);
      } catch (error) {
        console.error("Erro ao obter o nome do usuário:", error);
      }
    };

    fetchUserName();
  }, [cham_id]);

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
          <a href="Chamados">
          <img
            src="assets/img/user.png"
            alt="Usuário"
            className={ChamadoAbertoCss.fotoUser}
            id="logo-fundo-brando"
          />
          </a>
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
        <a href="/faq">Preciso de ajuda?</a>
      </div>
      <div className={ChamadoAbertoCss.divFlex}>
        <main>
          <div className={ChamadoAbertoCss.fundoChamadoAberto} >
            <div className={ChamadoAbertoCss.divFlex}>
              <div className={ChamadoAbertoCss.infoDispositivo}>
                <p>Título: {chamado.cham_titulo}</p>
                <p>ID: {cham_id}</p>
                <p>Data de Criação: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</p>
                <p className={ChamadoAbertoCss.statusAndamento}>Chamado em {chamado.cham_status}</p>
              </div>
            </div>
            <div className={ChamadoAbertoCss.respostachamado}>
              <div className={ChamadoAbertoCss.colunaDireita}>
                <div className={ChamadoAbertoCss.fundoChamadoAberto}>
                  <h2>Resposta</h2>
                  <p className={ChamadoAbertoCss.textChamadoAberto} id="#">{resposta.resp_soluc_comum}</p>
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>
      <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
    </body>
  );
}
