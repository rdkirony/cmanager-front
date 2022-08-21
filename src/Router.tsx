import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioProvider } from "./context/UserContext";
import { Auth } from "./pages/Auth";
import { MinhaConta } from "./pages/MinhaConta";
import { Opcoes } from "./pages/Opcoes";
import { Perfis } from "./pages/Perfis";
import { Pessoas } from "./pages/Pessoas";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/opcoes" element={<Opcoes />} />
        <Route path="/pessoas" element={<Pessoas />}></Route>
        <Route
          path="/minha-conta"
          element={
            <UsuarioProvider>
              <MinhaConta />
            </UsuarioProvider>
          }
        ></Route>
        <Route path="/perfis" element={<Perfis />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
