import React from "react";

export default function Home() {
    return(
        <>
        <nav>
    <a href="/">
      <img src="assets/img/CallGenielogosvg.svg" alt="Logo" id="logo-index"/>
    </a>
    <div className="nav-buttons">
      <a href="/cadastrar">Cadastrar</a>
      <a href="/entrar">Entrar</a>
      <a href="/sobre">Sobre</a>
      <a href="/FAQ">FAQ</a>
    </div>
  </nav>
    <main>
            <div>
                <h1>Call Gennie.</h1>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
                <div className="button-container">
                  <a href="/cadastrar"><button className="cadastro-button">CADASTRE-SE</button></a>
                </div>
                </div>
            <div >
                <img src="assets/img/imagem-homepage.svg" alt="imagem-homepage"/>
            </div>
    </main>
    <footer>
        <a>Copyright © 2023 Syntax Squad | Todos os direitos reservados</a>
    </footer>
    </>
    );
};