import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as RoutesName from "./constants/routes";
import Chamados from "./components/Chamados";
import Home from "./components/Home";
import Cadastro from "./components/cadastro";
import Cadastrar from "./components/cadastroopcao";
import FAQ from "./components/FAQ";
import OpcaoCadastro from "./components/opcaoCadastro";
import AlterarDados from "./components/alterarDados";
import Contato from "./components/contato";
import Entrar from "./components/entrar";
import AbrirChamado from "./components/abrirChamado";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.home} element={<Home />} />
                <Route path={RoutesName.chamados} element={<Chamados />} />
                <Route path={RoutesName.abrirChamado} element={<AbrirChamado/>}/>
                <Route path={RoutesName.login} />
                <Route path={RoutesName.cadastro} element={<Cadastro />} />
                <Route path={RoutesName.cadastrar} element={<Cadastrar />} />
                <Route path={RoutesName.FAQ} element={<FAQ />} />
                <Route path={RoutesName.opcaoCadastro} element={<OpcaoCadastro />} />
                <Route path={RoutesName.alterarDados} element={<AlterarDados />} />
                <Route path={RoutesName.contato} element={<Contato />} />
                <Route path={RoutesName.entrar} element={<Entrar />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};