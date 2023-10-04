import React from 'react';
import '../Cadastro Usuários/cadastro.css';
import { any } from 'prop-types';


function Cadastrar() {
    return (
        <React.Fragment>
            <Head />
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

function Head() {
    return (
        <head>
            <title>Cadastre-se</title>
        </head>
    )
}

function Header() {
    return (
        <header>
            <a href="/"><img src="assets/img/CallGenielogosvg.svg" className="logonome" alt="Logo - CallGenius"/></a>
        </header>
    )
}

function Main() {
    return (
        <main>
            <div className="cadastro-container">
                <form action="">
                        <input type="text" placeholder="Nome"/>

                        <input type="text" placeholder="Nome de Usuário"/>

                        <input type="email" placeholder="E-mail"/>

                        <input type="tel" placeholder="Telefone"/>

                        <input type="number" placeholder="CEP"/>

                        <input type="number" placeholder="CPF"/>

                        <input type="text" placeholder="Endereço"/>

                    <input type="button" value="Cadastrar-se" className="button-input"/>
                </form>
            </div>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            Copyright © 2023 Syntax Squad | Todos os direitos reservados
        </footer>
    )
}

export default Cadastrar;
