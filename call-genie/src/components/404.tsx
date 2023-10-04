< !DOCTYPE html >
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="shortcut icon" href="./assets/img/Vector.svg" type="image/x-icon">
                        <title>ERRO</title>
                        <style>
                            @import url(https://fonts.googleapis.com/css?family=opensans:500);
                        </head>
                        <body>
                            import React from 'react';
                            import '../Cadastro Usuários/404.css';
                            import {any} from 'prop-types';

                            function NotFoundPage() {
    return (
                            <React.Fragment>
                                <Head />
                                <Header />
                                <Body />
                            </React.Fragment>
                            )
}


                            function Head() {
    return (
                            <head>
                                <title>ERRO</title>
                            </head>
                            )
}

                            function Header() {
    return (
                            <header>
                                <a href="/"><img src="assets/img/CallGenielogosvg.svg" className="logonome" alt="Logo - CallGenius" /></a>
                            </header>
                            )
}

                            function Main() {
    return (
                            <body>
                                <div id="clouds">
                                    <div className="cloud x1"></div>
                                    <div className="cloud x1_5"></div>
                                    <div className="cloud x2"></div>
                                    <div class="cloud x3"></div>
                                    <div class="cloud x4"></div>
                                    <div class="cloud x5"></div>
                                </div>
                                <div class='c'>
                                    <div class='_404'>404</div>
                                    <hr>
                                        <br>
                                            <div class='_1'>A PÁGINA</div>
                                            <br>
                                                <div class='_2'>NÃO FOI ENCONTRADA</div>
                                                <br>
                                                    <a class='btn' href='/'>VOLTAR PARA O INÍCIO</a>
                                                </div>
                                            </body>
                                            )
}

                                            function Footer() {
    return (
                                            <footer>
                                                Copyright © 2023 Syntax Squad | Todos os direitos reservados
                                            </footer>
                                            )
}

                                            export default NotFoundPage;
