import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Opcoes } from "./pages/Opcoes";
import { Pessoas } from "./pages/Pessoas";
import { Test } from "./pages/Test";

export function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/opcoes" element={<Opcoes />} />
            <Route path="/pessoas" element={<Pessoas />}></Route>
            <Route path="/test" element={<Test />}></Route>
        </Routes>
    </BrowserRouter>
    )
}