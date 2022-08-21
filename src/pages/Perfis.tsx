import { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CardPerfil } from "../components/cardPerfil/CardPerfil";
import TokenContext from "../context/TokenContext";
import { Perfil } from "../entitys/Perfil";
import profImage from "../imgs/perfil/teacher.png";
import businessman from "../imgs/perfil/businessman.png"
import connection from "../imgs/perfil/coordination.png"
import { listaPerfis } from "../services/perfil";
import "../styles/Perfil.css";

export function Perfis() {
  const [perfis, setPerfis] = useState<Perfil[]>([]);
  const tokenContext = useContext(TokenContext);
  let navigate = useNavigate();
  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
    listaPerfis(0).then(
      (response) => {
        setPerfis(response.content);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  }, []);

  return (
    <div className="Perfil-container">
      <ul>
        {perfis.map((perfil) => {
          if(perfil.id == 1){
            return (
              <li key={perfil.id}>
                <CardPerfil image={businessman} perfil={perfil} ></CardPerfil>
              </li>
            );
          }else if(perfil.id ==2){
            return (
              <li key={perfil.id}>
                <CardPerfil image={profImage} perfil={perfil} ></CardPerfil>
              </li>
            );
          }else if(perfil.id ==3){
            return (
              <li key={perfil.id}>
                <CardPerfil image={connection} perfil={perfil} ></CardPerfil>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
