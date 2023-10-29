import React, { useEffect, useRef } from "react";
import HomePage from "./home.module.css";
import { mudouTamanho, clickMenu } from './menu.js';

export default function Home() {
  const itensRef = useRef(null);

  // Função para lidar com o redimensionamento da tela
  const handleResize = () => {
    mudouTamanho(itensRef.current);
  };

  useEffect(() => {
    // Chama a função mudouTamanho quando o componente é montado
    mudouTamanho(itensRef.current);

    // Adiciona um ouvinte de evento de redimensionamento para monitorar as mudanças na largura da tela
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <span id={HomePage.burguer} onClick={() => clickMenu(itensRef.current)}>menu</span>
        <div className={HomePage.navbuttons} ref={itensRef}>
          <a href="/cadastro">Cadastrar</a>
          <a href="/entrar">Entrar</a>
          <a href="/FAQ">FAQ</a>
        </div>
      </nav>
      <main className={HomePage.main}>
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
        <div className={HomePage.imgHome}>
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