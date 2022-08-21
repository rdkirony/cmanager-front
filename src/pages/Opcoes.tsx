import { Card } from "../components/card/Card";
import "../styles/Opcoes.css";
import userImage from "../imgs/opcoes/user.png";
import profImage from "../imgs/opcoes/man.png";
import question from "../imgs/opcoes/question.png";
import profile from "../imgs/opcoes/architect.png";
import calendar from "../imgs/opcoes/calendar.png";
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
            <a href="">
              {" "}
              <Card image={userImage} text="Gerenciar Usuários"></Card>
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
              <Card image={profile} text="Gerenciar Perfis"></Card>
            </a>
          </li>
          <li>
            <a href="">
              <Card image={calendar} text="Gerenciar Semestres"></Card>
            </a>
          </li>
          <li>
            <Card image={question} text="Gerenciar Matérias"></Card>
          </li>
        </ul>
      </div>
    </div>
  );
}
