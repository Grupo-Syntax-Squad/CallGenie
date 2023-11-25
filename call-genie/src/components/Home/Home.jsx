import React , { useEffect, useRef } from "react";
import HomePage from "./home.module.css";

export default function Home() {
  return (
    <div className={HomePage.homefundo}>
      <nav>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            alt="Logo"
            id={HomePage.logoindex}
          />
        </a>
        <div className={HomePage.navbuttons}>
          <a href="/cadastroCliente">Cadastrar</a>
          <a href="/entrar">Entrar</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
      <main className={HomePage.main_texto}>
        <div className={HomePage.texto}>
          <h1>Call Gennie.</h1>
          <h2 className={HomePage.home}>
            Bem-Vindo(a) ao CallGennie, o seu gerenciador de ordens de serviços.
          </h2>
          <div className={HomePage.buttoncontainer}>
            <a href="/cadastroCliente">
              <button className={HomePage.cadastrobutton}>CADASTRE-SE</button>
            </a>
          </div>
        </div>
        <div>
          <img
            src="assets/img/imagem-homepage.svg"
            alt="imagem-homepage"
            className={HomePage.main_img}

          />
        </div>
      </main>
      <footer>
        <p>Copyright © 2023 Syntax Squad | Todos os direitos reservados</p>
      </footer>
      <script src="menu.js"></script>
    </div>
  );
}