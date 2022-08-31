import { Card } from "../components/card/Card";
import "../styles/Opcoes.css";
import userImage from "../imgs/opcoes/user.png";
import profImage from "../imgs/opcoes/man.png";
import question from "../imgs/opcoes/question.png";
import profile from "../imgs/opcoes/architect.png";
import calendar from "../imgs/opcoes/calendar.png";
import perfis from "../imgs/opcoes/1.png";
import professores from "../imgs/opcoes/2.png";
import semestres from "../imgs/opcoes/3.png";
import materias from "../imgs/opcoes/6.png";
import { useContext, useEffect } from "react";
import TokenContext from "../context/TokenContext";
import { useNavigate } from "react-router-dom";

export function Opcoes() {
  const tokenContext = useContext(TokenContext);
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
  }, []);

  return (
    <div>
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
              <Card image={perfis}  text="Gerenciar Perfis"></Card>
            </a>
          </li>
          <li>
            <a href="">
              <Card image={semestres} text="Gerenciar Semestres"></Card>
            </a>
          </li>
          <li>
            <Card image={materias} text="Gerenciar Matérias"></Card>
          </li>
        </ul>
      </div>
    </div>
  );
}
