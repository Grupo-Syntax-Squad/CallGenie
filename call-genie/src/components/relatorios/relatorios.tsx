import React, { useEffect, useState } from "react";
import RelatorioCss from "./relatorioCss.module.css";
import ChamadoAbertoCss from "../chamadoAberto/chamadoAberto.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css';

const ArquivosSelecionados: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, file]);
    } else {
      setSelectedFiles((prevSelectedFiles) =>
        prevSelectedFiles.filter((selectedFile) => selectedFile !== file)
      );
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFiles.length > 0) {
      const downloadUrl = `http://example.com/download?files=${encodeURIComponent(
        JSON.stringify(selectedFiles)
      )}`;
      //trocar a url do exemplo pela função de baixar o arquivo.
      window.location.href = downloadUrl;
    } else {
      alert('Nenhum arquivo selecionado!');
    }
  }

  return (
    <div>
      <header>
        <a href="/">
          <img
            src="assets/img/Vector.svg"
            className={HeaderChamado.logogenie}
            alt="Logo - CallGenius"
          />
        </a>
        <div className={HeaderChamado.headerItensRight}>
          <img src="assets/img/iconeuser2.png" alt="Usuário" />
          <h2>Olá, Cliente</h2>
          <a href="/entrar">
            <img src="assets/img/iconexit.png" alt="Sair" />
          </a>
        </div>
      </header>

      <h1>Selecione os Arquivos que deseja baixar o relatorio</h1>

      <div className={RelatorioCss.relatorio}>
        <div className={RelatorioCss.filtrosContainer}>
          <div>
            <select name={"Filtar Chamados"} className={RelatorioCss.filtrosLista} >
              <optgroup label={"Filtrar Chamados em geral"} >
                <option value={"Filtro01"}>Ordem Alfabética</option>
                <option value={"Filtro02"}>ID de pedido</option>
                <option value={"Filtro03"}>Status do pedido</option>
              </optgroup>
            </select>
          </div>
          <div>
            <select name={"filtro"} className={RelatorioCss.filtrosLista} >
              <optgroup label={"Filtrar Chamados em geral"} >
                <option value={"Filtro01"}>Ordem Alfabética</option>
                <option value={"Filtro02"}>ID de pedido</option>
                <option value={"Filtro03"}>Status do pedido</option>
              </optgroup>
            </select>
          </div>
        </div>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="file1">
            <input
              type="checkbox"
              name="files[]"
              id="file1"
              value="arquivo1.txt"
              onChange={handleCheckboxChange}
            />
            <p>titulo e id Chamado 1 </p>
          </label>
          <br />

          <label htmlFor="file2">
           
            <input
              type="checkbox"
              name="files[]"
              id="file2"
              value="arquivo2.txt"
              onChange={handleCheckboxChange}
            />
            <p>titulo e id Chamado 2 </p>
          </label>
          <br />

          <label htmlFor="file3">
            <input
              type="checkbox"
              name="files[]"
              id="file3"
              value="arquivo3.txt"
              onChange={handleCheckboxChange}
            />
            <p>titulo e id Chamado 3 </p>
          </label>
          <br />

          <button type="submit">Baixar Selecionados</button>
        </form>
      </div>
    </div>
  );
};

export default ArquivosSelecionados;