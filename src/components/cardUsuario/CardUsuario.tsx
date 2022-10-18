import { Usuario } from "../../entitys/Usuario";
import "./Style.css";
import Teacher from "./imgs/9.png";

type CardUsuarioProps = {
  usuario: Usuario;
  img: string;
};

export function CardUsuario(props: CardUsuarioProps) {
  return (
    <div className="Container-card-usuario" id={props.usuario.id.toString()}>
      <p>{props.usuario.pessoaDto?.nome}</p>
      <img src={props.img} width="230px" height="150px" alt="" />
      <p>{props.usuario.perfilDto?.nome}</p>
    </div>
  );
}
