import { Usuario } from "../../entitys/Usuario";
import "./Style.css";
import Teacher from "./imgs/teacher.png";

type CardUsuarioProps = {
  usuario: Usuario;
};

export function CardUsuario(props: CardUsuarioProps) {
  return (
    <div className="Container-card-usuario" id={props.usuario.id.toString()}>
      <p>{props.usuario.pessoaDto?.nome}</p>
      <img src={Teacher} width="auto" height="auto" alt="" />
      <p>{props.usuario.perfilDto?.nome}</p>
    </div>
  );
}
