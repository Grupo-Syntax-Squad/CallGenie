import React , { useEffect, useRef } from "react";
import HomePage from "./home.module.css";
import { mudouTamanho, clickMenu } from './menu.js';

export default function Home() {
  const itensRef = useRef(null);

    useEffect(() => {
        mudouTamanho(itensRef.current);
    }, []);
  return (
    <div className={HomePage.homefundo} onResize={() => mudouTamanho(itensRef.current)}>
      <nav>
        <a href="/">
          <img
            src="assets/img/CallGenielogosvg.svg"
            alt="Logo"
            id={HomePage.logoindex}
          />
        </a>
        <span id={HomePage.burguer} onClick={() => clickMenu(itensRef.current)}>menu</span>
        <div className={HomePage.navbuttons} ref={itensRef}>
          <a href="/cadastro">Cadastrar</a>
          <a href="/entrar">Entrar</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
      <main className={HomePage.main_texto}>
        <div className={HomePage.texto}>
          <h1>Call Gennie.</h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h2>
          <div className={HomePage.buttoncontainer}>
            <a href="/cadastro">
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