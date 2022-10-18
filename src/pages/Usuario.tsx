import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListUsuarios } from "../components/usuario/ListaUsuarios";
import { PesquisaUsuarios } from "../components/usuario/PesquisaUsuarios";
import TokenContext from "../context/TokenContext";
import "../styles/Usuario.css";

export function Usuario() {
  const tokenContext = useContext(TokenContext)
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/"):""
  }, []);
  return (
    <div>
      <div className="usuarios-texto">Gerenciar Usuários</div>
      <PesquisaUsuarios></PesquisaUsuarios>
      <ListUsuarios></ListUsuarios>
    </div>
  );
}
