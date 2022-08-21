import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListPessoas } from "../components/pessoa/ListPessoas";
import { PesquisaPessoas } from "../components/pessoa/PesquisaPessoas";
import TokenContext from "../context/TokenContext";
import "../styles/Pessoas.css";

export function Pessoas() {
  const tokenContext = useContext(TokenContext)
  let navigate = useNavigate();

  useEffect(() => {
    !tokenContext.token ? navigate("/"):""
  }, []);

  return (
    <div>
      <div className="gerenciar-pessoas">
        <div className="pessoas-texto">Gerenciar Pessoas</div>
        <PesquisaPessoas></PesquisaPessoas>
        <ListPessoas></ListPessoas>
      </div>
    </div>
  );
}
