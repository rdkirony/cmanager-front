import { Card } from "../components/card/Card";
import "../styles/Opcoes.css";
import professores from "../imgs/opcoes/1.png";
import materias from "../imgs/opcoes/4.png";
import semestres from "../imgs/opcoes/5.png";
import profImage from "../imgs/opcoes/6.png";
import perfis from "../imgs/opcoes/7.png";
import { useContext, useEffect } from "react";
import TokenContext from "../context/TokenContext";
import { useNavigate } from "react-router-dom";
import { AvisoToast } from "../components/toasts/AvisoToast";

export function Opcoes() {
  const tokenContext = useContext(TokenContext);
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
  }, []);

  return (
    <div>
      <AvisoToast></AvisoToast>
      <div className="Opcoes-menu">
        <ul>
          <li>
            <a href="usuarios">
              {" "}
              <Card image={professores} text="Gerenciar Usuários"></Card>
            </a>
          </li>
          <li>
            <a href="/pessoas">
              {" "}
              <Card image={profImage} text="Gerenciar Pessoas"></Card>
            </a>
          </li>
          <li>
            <a href="/perfis">
              <Card image={perfis} text="Gerenciar Perfis"></Card>
            </a>
          </li>
          <li>
            <a href="/semestres">
              <Card image={semestres} text="Gerenciar Semestres"></Card>
            </a>
          </li>
          <li>
            <a href="/materias">
              <Card image={materias} text="Gerenciar Matérias"></Card>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
