import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Pagina404 from "pages/Pagina404";
import PaginaPadrao from "pages/PaginaPadrao";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<Pagina404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;