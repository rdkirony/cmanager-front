import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListMateriasProvider } from "./context/ListMateriasContext";
import { UserListaPessoasProvider } from "./context/ListPessoasContext";
import { UserListaUsuariosProvider } from "./context/ListUsuariosContext";
import { UsuarioProvider } from "./context/UserContext";
import { Auth } from "./pages/Auth";
import { GerenciarSemestres } from "./pages/GerenciarSemestres";
import { Materia } from "./pages/Materia";
import { MinhaConta } from "./pages/MinhaConta";
import { Opcoes } from "./pages/Opcoes";
import { Perfis } from "./pages/Perfis";
import { Pessoas } from "./pages/Pessoas";
import { Relatorio } from "./pages/Relatorio";
import { Usuario } from "./pages/Usuario";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/opcoes" element={<Opcoes />} />
        <Route
          path="/usuarios"
          element={
            <UserListaUsuariosProvider>
              <Usuario />
            </UserListaUsuariosProvider>
          }
        />
        <Route
          path="/pessoas"
          element={
            <UserListaPessoasProvider>
              <Pessoas />
            </UserListaPessoasProvider>
          }
        ></Route>
        <Route
          path="/minha-conta"
          element={
            <UsuarioProvider>
              <MinhaConta />
            </UsuarioProvider>
          }
        ></Route>
        <Route path="/perfis" element={<Perfis />}></Route>
        <Route
          path="/materias"
          element={
            <ListMateriasProvider>
              <Materia />
            </ListMateriasProvider>
          }
        />
        <Route path="/semestres" element={<GerenciarSemestres />} />
        <Route path="/relatorio" element={<Relatorio />} />
      </Routes>
    </BrowserRouter>
  );
}
