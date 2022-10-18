import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListaMaterias } from "../components/materia/ListaMaterias";
import { PesquisaMaterias } from "../components/materia/PesquisaMaterias";
import TokenContext from "../context/TokenContext";

export function Materia() {
  const tokenContext = useContext(TokenContext);
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
  }, []);
  return (
    <div>
      <PesquisaMaterias></PesquisaMaterias>
      <ListaMaterias></ListaMaterias>
    </div>
  );
}
