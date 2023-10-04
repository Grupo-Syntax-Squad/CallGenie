import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as RoutesName from "./constants/routes";
import Chamados from "./components/Chamados";
import Home from "./components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.home} element={<Home />} />
                <Route path={RoutesName.chamados} element={<Chamados />} />
                <Route path={RoutesName.abrirChamado} />
                <Route path={RoutesName.login} />
            </Routes>
        </BrowserRouter>
    );
};