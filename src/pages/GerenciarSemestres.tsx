import { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormGroupComponent } from "../components/formulario/FormGroup";
import { CadastroSemestre } from "../components/gerenciarSemestres/CadastroSemestre";
import { ListaSemestres } from "../components/gerenciarSemestres/ListaSemestre";
import TokenContext from "../context/TokenContext";

export function GerenciarSemestres() {
  const tokenContext = useContext(TokenContext);
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
  }, []);

  return (
    <div>
      <CadastroSemestre></CadastroSemestre>
    </div>
  );
}
