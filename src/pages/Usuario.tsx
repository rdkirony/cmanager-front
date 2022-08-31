import { ListUsuarios } from "../components/usuario/ListaUsuarios";
import { PesquisaUsuarios } from "../components/usuario/PesquisaUsuarios";
import "../styles/Usuario.css";

export function Usuario() {
  return (
    <div>
      <div className="usuarios-texto">Gerenciar Usuários</div>
      <PesquisaUsuarios></PesquisaUsuarios>
      <ListUsuarios></ListUsuarios>
    </div>
  );
}
