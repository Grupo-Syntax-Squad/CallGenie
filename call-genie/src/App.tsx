import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import * as RoutesName from "./constants/routes";
import Chamados from "./components/Chamados/Chamados";
import ChamadosSuporte from "./components/Chamados/ChamadosSuporte";
import Home from "./components/Home/Home";
import Cadastro from "./components/cadastro/cadastro";
import CadastrarCliente from "./components/cadastro/cadastroCliente";
import CadastrarSuporte from "./components/cadastro/cadastroSuporte";
import FAQ from "./components/FAQ/FAQ";
import OpcaoCadastro from "./components/opcaoCadastro/opcaoCadastro";
import AlterarDados from "./components/alterarDados/alterarDados";
import Contato from "./components/contato";
import Entrar from "./components/entrar/entrar";
import AbrirChamado from "./components/abrirChamado/abrirChamado";
import ChamadoAberto from "./components/chamadoAberto/chamadoAberto";

import NotFoundPage from "./components/404";
import Cliente from "./components/Cliente/Cliente";
import Admin from "./components/Admin/Admin";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.home} element={<Home />} />
                <Route path={RoutesName.chamados} element={<Chamados />} />
                <Route path={RoutesName.abrirChamado} element={<AbrirChamado/>}/>
                <Route path={RoutesName.chamadoAberto} element={<ChamadoAberto/>}/>
                <Route path={RoutesName.login} />
                <Route path={RoutesName.cadastro} element={<Cadastro />} />
                <Route path={RoutesName.cadastroCliente} element={<CadastrarCliente />} />
                <Route path={RoutesName.cadastroSuporte} element={<CadastrarSuporte />} />
                <Route path={RoutesName.FAQ} element={<FAQ />} />
                <Route path={RoutesName.opcaoCadastro} element={<OpcaoCadastro />} />
                <Route path={RoutesName.alterarDados} element={<AlterarDados />} />
                <Route path={RoutesName.contato} element={<Contato />} />
                <Route path={RoutesName.entrar} element={<Entrar />} />
                <Route path={RoutesName.cliente} element={<Cliente />}/>
                <Route path={RoutesName.chamadosSuporte} element={<ChamadosSuporte />}/>
                <Route path={RoutesName.admin} element={<Admin />}/>

                {/* <Route path="*" element={<NotFoundPage />} /> */}
                <Route path= {RoutesName.notFound} element ={<NotFoundPage />} />
                <Route path= "*" element={< Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
};
