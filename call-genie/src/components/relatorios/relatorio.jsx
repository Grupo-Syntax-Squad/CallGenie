import { useState, useEffect } from "react";
import axios from "axios";
import RelatorioPag from "./relatorioPag.module.css";
import { ipAPI } from "../../constants/routes";

function Imprimir(event) {
  window.print();
}

export default function Relatorio() {
  const [chamado, setChamado] = useState({});
  const [equipamento, setEquipamento] = useState({});
  const [suporte, setSuporte] = useState({});
  const [resposta, setResposta] = useState({});
  const [cliente, setCliente] = useState({});
 
  const id = localStorage.getItem("cham_id");
  const cpf = localStorage.getItem("login");
  const sup_id = localStorage.getItem("sup_id");

  useEffect(() => {
    axios.get(`${ipAPI}gerarRelatorio/${id}`).then(response => {
      setEquipamento(response.data.equipamento);
      setChamado(response.data.chamado);
      setCliente(response.data.cliente);
      setResposta(response.data.resposta);
      setSuporte(response.data.suporte);
    });
  });

  return (
    <div className={RelatorioPag.text_black}>
      <div className={RelatorioPag.flexCabecalho}>
        <img
          src="assets/img/CallGenie_Black.png"
          alt="Logo"
          id={RelatorioPag.logoindex}
        />
        <h2 className={RelatorioPag.marginBottom}><strong>Id do Chamado: {chamado.cham_id}</strong></h2>
      </div>
      <p className={RelatorioPag.text_left}>Chamado respondido por: {suporte.sup_nome}</p>
      <div className={RelatorioPag.center}>
        <div className={RelatorioPag.flex}>
          <p>{cliente.cli_nome}</p>
          <p>{chamado.cham_cli_cpf}</p>
          <p>{cliente.cli_telefone}</p>
        </div>
      </div>
      <div className={RelatorioPag.divisor}></div>
      <div className={RelatorioPag.flex}>
        <h3>{chamado.cham_titulo}</h3>
        <h3>{chamado.cham_urgencia}</h3>
        <h3>criado em: {new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate()+1)).toLocaleDateString()}</h3>
      </div>
      <p className={RelatorioPag.text_justify}>
        <div className={RelatorioPag.marginBottom}>
          <strong>Descrição:</strong>{chamado.cham_descricao}
        </div>
      </p>
      <p className={RelatorioPag.text_justify}>
        <div className={RelatorioPag.marginBottom}>
          <strong>Equipamento:</strong> {equipamento.equ_nome}  ||  {equipamento.equ_numserie}  ||  {equipamento.equ_tipo}
        </div>

      </p>
      <p className={RelatorioPag.text_justify}>
        <strong>Resposta:</strong> {resposta.resp_soluc_comum}
      </p>
      <p className={RelatorioPag.text_right}><strong className={RelatorioPag.small_text}>Respondido em: {new Date(new Date().setDate(new Date(resposta.resp_data).getDate()+1)).toLocaleDateString()}</strong></p>
      <p className={RelatorioPag.text_justify}>
        <strong>Comentário:</strong>Comentário do cliente
      </p>
      <p className={RelatorioPag.text_right}><div className={RelatorioPag.marginBottom}><strong className={RelatorioPag.small_text}>Comentário adicionado em: xx/xx/xxxx</strong></div></p>
      <p className={RelatorioPag.flex}><strong>Encerrado em: {new Date().toLocaleDateString()}</strong></p>
      <button onClick={Imprimir} className={RelatorioPag.imprimir}>Imprimir</button>
      <div className={RelatorioPag.footerRelatorio}>
        <footer className={RelatorioPag.flex}>
          <p className={RelatorioPag.small_text}>Copyright © 2023 Syntax Squad | Todos os direitos reservados</p>
          <p className={RelatorioPag.marginLeft}><strong>Relatório gerado em: {new Date().toLocaleDateString()}</strong></p>
        </footer>
      </div>
    </div>
  );
}
