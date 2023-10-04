import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as RoutesName from "./constants/routes";
import Chamados from "./components/Chamados";
import Home from "./components/Home";
import Cadastro from "./components/cadastro";
import Cadastrar from "./components/cadastroopcao";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.home} element={<Home />} />
                <Route path={RoutesName.chamados} element={<Chamados />} />
                <Route path={RoutesName.abrirChamado} />
                <Route path={RoutesName.login} />
                <Route path={RoutesName.cadastro} element={<Cadastro />} />
                <Route path={RoutesName.cadastrar} element={<Cadastrar />} />
                <Route path="*" element={NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};