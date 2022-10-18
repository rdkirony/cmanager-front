import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPerfil } from "../components/cardPerfil/CardPerfil";
import TokenContext from "../context/TokenContext";
import { Perfil } from "../entitys/Perfil";
import adm from "../imgs/perfil/3.png"
import coord from "../imgs/perfil/2.png"
import prof from "../imgs/perfil/1.png"
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
                <CardPerfil image={adm} perfil={perfil} ></CardPerfil>
              </li>
            );
          }else if(perfil.id ==2){
            return (
              <li key={perfil.id}>
                <CardPerfil image={prof} perfil={perfil} ></CardPerfil>
              </li>
            );
          }else if(perfil.id ==3){
            return (
              <li key={perfil.id}>
                <CardPerfil image={coord} perfil={perfil} ></CardPerfil>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
