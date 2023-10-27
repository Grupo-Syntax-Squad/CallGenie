// import React, { useEffect, useState } from "react";
// import ChamadosPageCSS from "./ChamadosPage.module.css";
// import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
// import StyleTableCSS from './StyleTable.module.css'
// import axios from "axios";

// function handleSubmit(event) {
//   let id = event.target.name;
//   axios.delete(`http://localhost:8080/chamados/${id}`);
//   window.location.replace("/chamados");
//   event.preventDefault();
// };

// function chamadoPage(e) {
//   console.log(e.target.id);
//   localStorage.setItem("cham_id", e.target.id);
//   window.location.replace("/chamadoAberto");
// };


// function Table({ chamadoPage }) {
//   const [chamados, setChamados] = useState([])
//   // const [modal, setModal] = useState(false)

//   let cpf = localStorage.getItem("login");
//   useEffect(() => {
//     if (cpf.length === 1) {
//       axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
//     } else {
//       axios.get(`http://localhost:8080/chamados/cpf/${cpf}`).then(response => setChamados(response.data));
//     };
//   });
  
//   let listaChamados = chamados.map(chamado =>
//     <tr>
//       <td id={chamado.cham_id} onClick={chamadoPage} style={{cursor: "pointer", color: "blue", textDecoration: "underline"}}>{chamado.cham_titulo}</td>
//       <td>{chamado.cham_id}</td>
//       <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
//       <td>{chamado.cham_status}</td>
//       {cpf.length == 1 ? <></> : <td><button id="botaoDeletarChamado" type="submit">Deletar</button></td>}
//     </tr>
//   );

//   return (
//     <table>
//       <thead>
//         <tr className={StyleTableCSS.ptable}>
//           <th><p>Título</p></th>
//           <th><p>ID </p></th>
//           <th><p>Data de criação</p> </th>
//           <th><p>Status </p></th>
//         </tr>
//       </thead>
//       <tbody>{listaChamados}</tbody>
//     </table>
//   );
// };

// export default function Chamados() {
//   let cpf = localStorage.getItem("login");

//   return (
//     <body className={ChamadosPageCSS.Body}>
//       <div className={ChamadosPageCSS.bodyChamados}>
//         <header>
//           <a href="/">
//             <img
//               src="assets/img/Vector.svg"
//               className={HeaderChamado.logogenie}
//               alt="Logo - CallGenius"
//             />
//           </a>
//           <div className={HeaderChamado.headerItensRight}>
//             <a href="/alterarDados">
//               <img
//                 src="assets/img/iconeuser2.png"
//                 alt="Usuário"
//               />
//             </a>
//             <h2>Olá, {cpf.length == 1 ? "Suporte" : "User"}</h2>
//             <a href="/entrar">
//               <img
//                 src="assets/img/iconexit.png"
//                 alt="Sair"
//               />
//             </a>
//           </div>
//         </header>
//         <div className={ChamadosPageCSS.ajuda}>
//           <a href="/FAQ">Preciso de ajuda?</a>
//         </div>

//         <main className={ChamadosPageCSS.fundoChamado}>
//           <div className={HeaderChamado.fundo}>
//             <div className={ChamadosPageCSS.titulo}>
//               <h2>Meus Chamados</h2>
//             </div>
//             <div className={ChamadosPageCSS.filtrosContainer}>
//               <div className={ChamadosPageCSS.filtros}>
//                 <p>Meus Chamados  <i className="fa-solid fa-arrow-down"></i></p>
//               </div>
//               <div className={ChamadosPageCSS.filtros}>
//                 <p>Buscar por título <i className="fa-solid fa-magnifying-glass"></i></p>
//               </div>
//             </div>
//             <div className={StyleTableCSS.mainTable}>
//               <section className={StyleTableCSS.tableBody}>
//                 <Table chamadoPage={chamadoPage} />
//               </section>
//               <dialog open>
//                 <p>
//                   VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
//                   CONFIRMAR?
//                 </p>
//                 <form method="post" onSubmit={handleSubmit}><button className={ChamadosPageCSS.sim}>SIM</button></form>
//                 <button className={ChamadosPageCSS.nao}>NÃO</button>
//               </dialog>
//             </div>
//             <div className={ChamadosPageCSS.buttoncontainer}>
//             {cpf.length == 1 ? <></> : <a href="/abrirChamado">
//               <button className={ChamadosPageCSS.cadastrobutton}>Abrir Chamado</button>
//             </a>}
//             <a href="/relatorios">
//               <button className={ChamadosPageCSS.cadastrobutton}>Relatórios</button>
//             </a>
//           </div>
//           </div>
//         </main>
//       </div>
//       <footer>
//         Copyright © 2023 Syntax Squad | Todos os direitos reservados
//       </footer>
//     </body>
//   );
// };

import React, { useEffect, useState } from "react";
import ChamadosPageCSS from "./ChamadosPage.module.css";
import HeaderChamado from '../HeaderChamado/headerChamado.module.css'
import StyleTableCSS from './StyleTable.module.css'
import axios from "axios";

function handleSubmit(event) {
  let id = event.target.name;
  axios.delete(`http://localhost:8080/chamados/${id}`);
  window.location.replace("/chamados");
  event.preventDefault();
};

function chamadoPage(e) {
  console.log(e.target.id);
  localStorage.setItem("cham_id", e.target.id);
  window.location.replace("/chamadoAberto");
};


function Table({ selectedChamados, handleCheckboxChange, chamadoPage }) {
  const [chamados, setChamados] = useState([])
  // const [modal, setModal] = useState(false)

  let cpf = localStorage.getItem("login");
  console.log(cpf)
  useEffect(() => {
    if (cpf.length === 1) {
      axios.get(`http://localhost:8080/chamados`).then(response => setChamados(response.data));
    } else {
      axios.get(`http://localhost:8080/chamados/cpf/${cpf}`).then(response => setChamados(response.data));
    };
  });
  
  const listaChamados = chamados.map((chamado) => (
    <tr key={chamado.cham_id}>
      <td
        id={chamado.cham_id}
        onClick={chamadoPage}
        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
      >
        {chamado.cham_titulo}
      </td>
      <td>{chamado.cham_id}</td>
      <td>{new Date(new Date().setDate(new Date(chamado.cham_data_inicio).getDate() + 1)).toLocaleDateString()}</td>
      <td>{chamado.cham_status}</td>
      <td>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(chamado.cham_id)}
          checked={selectedChamados.includes(chamado.cham_id)}
        />
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr className={StyleTableCSS.ptable}>
          <th><p>Título</p></th>
          <th><p>ID </p></th>
          <th><p>Data de criação</p> </th>
          <th><p>Status </p></th>
        </tr>
      </thead>
      <tbody>{listaChamados}</tbody>
    </table>
  );
};

export default function Chamados() {
  let cpf = localStorage.getItem("login");
  const [selectedChamados, setSelectedChamados] = useState([]);

  const handleCheckboxChange = (chamadoId) => {
    if (selectedChamados.includes(chamadoId)) {
      setSelectedChamados(selectedChamados.filter((id) => id !== chamadoId));
    } else {
      setSelectedChamados([...selectedChamados, chamadoId]);
    }
  };


  return (
    
    <body className={ChamadosPageCSS.Body}>
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
            <a href="/alterarDados">
              <img
                src="assets/img/iconeuser2.png"
                alt="Usuário"
              />
            </a>
            <h2>Olá, {cpf.length == 1 ? "Suporte" : "User"}</h2>
            <a href="/entrar">
              <img
                src="assets/img/iconexit.png"
                alt="Sair"
              />
            </a>
          </div>
        </header>
        <div className={ChamadosPageCSS.ajuda}>
          <a href="/FAQ">Preciso de ajuda?</a>
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
              <div className={ChamadosPageCSS.filtros}>
                <p>Buscar por título <i className="fa-solid fa-magnifying-glass"></i></p>
              </div>
            </div>
            <div className={StyleTableCSS.mainTable}>
              <section className={StyleTableCSS.tableBody}>
              <Table selectedChamados={selectedChamados} handleCheckboxChange={handleCheckboxChange} chamadoPage={chamadoPage} />

                
              </section>
              {/* <dialog open>
                <p>
                  VOCÊ ESTÁ PRESTES A DELETAR UMA ORDEM DE SERVIÇO, DESEJA
                  CONFIRMAR?
                </p>
                <form method="post" onSubmit={handleSubmit}><button className={ChamadosPageCSS.sim}>SIM</button></form>
                <button className={ChamadosPageCSS.nao}>NÃO</button>
              </dialog> */}
            </div>
            <div className={ChamadosPageCSS.buttoncontainer}>
            {cpf.length == 1 ? <></> : <a href="/abrirChamado">
              <button className={ChamadosPageCSS.cadastrobutton}>Abrir Chamado</button>
            </a>}
            <a href="/relatorios">
              <button className={ChamadosPageCSS.cadastrobutton}>Relatório</button>
            </a>

            <a >
              <button className={ChamadosPageCSS.cadastrobutton}>deletar chamado</button>
            </a>

          </div>
          </div>
        </main>
      </div>
      <footer>
        Copyright © 2023 Syntax Squad | Todos os direitos reservados
      </footer>
    </body>
  );
};
