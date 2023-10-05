import React from "react";
import "./style/404.css";
import { any } from "prop-types";

function NotFoundPage() {
  return (
    <React.Fragment>
      <Head />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

function Head() {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        href="./assets/img/Vector.svg"
        type="image/x-icon"
      />
      <title>ERRO</title>
      <style>
        @import url(https://fonts.googleapis.com/css?family=opensans:500);
      </style>
    </head>
  );
}

function Header() {
  return (
    <header>
      <a href="/">
        <img
          src="assets/img/CallGenielogosvg.svg"
          className="logonome"
          alt="Logo - CallGenius"
        />
      </a>
    </header>
  );
}

function Main() {
  return (
    <body>
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <br>
          <div className="_1">A PÁGINA</div>
        </br>
        <br>
          <div className="_2">NÃO FOI ENCONTRADA</div>
        </br>
        <br>
          <a className="btn" href="/">
            VOLTAR PARA O INÍCIO
          </a>
        </br>
      </div>
    </body>
  );
}

function Footer() {
  return (
    <footer>
      Copyright © 2023 Syntax Squad | Todos os direitos reservados
    </footer>
  );
}

export default NotFoundPage;
