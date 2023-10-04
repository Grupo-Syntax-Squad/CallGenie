import React from "react";

export default function AbrirChamado() {
    return(
        <>
        <header>
        <a href="/"><img src="assets/img/Vector.svg" className= 'logogenie' alt="Logo - CallGenius"/></a>
        <div className="header-itens-right flex">
            <img src="assets/img/user.png" alt="Usuário" className="fotouser" id="logo-fundo-brando"/>
            <h2>Olá, user</h2>
            <a href="/entrar"><i className="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
    </header>
    <main>
        <div className="fundo-abrir-chamado">
                <div className="flex-row">
                    <i className="fa-solid fa-arrow-left" id="icon-back-page"></i>
                    <h1>Novo chamado</h1>
                </div>
                <form action="/abrirChamado" method="post">
                <div className="container-abrir-chamado flex-row">
                    <div className="coluna-esquerda">
                        <label>
                            <input type="text" placeholder="Título do chamado *" className="input-fundo" required name="titulo"/>
                        </label>
                        <textarea name="comentario" id="input-comentario" cols={30} rows={10} className="input-fundo" placeholder="   Comentário"></textarea>
                
                        <div className="input-equipamento">
                                <input type="text" placeholder="Nome do Equipamento" name="equipamentonome"/>
                                <input type="number" placeholder="Número de série" name="numeroserie"/>
                                <input type="text" placeholder="Tipo de equipamento" name="equipamentotipo"/>
                        </div>
                    </div>
                    <div className="coluna-direita">
                        <textarea name="desc" id="input-descricao" cols={100} rows={20} placeholder="Descrição do Chamado" className="input-fundo"></textarea>
                        <button type="submit" className="button-input auto">Enviar</button>
                    </div>
                </div>
            </form>
        </div>

    </main>
    <footer>Copyright © 2023 Syntax Squad | Todos os direitos reservados</footer>
        </>
    )
}