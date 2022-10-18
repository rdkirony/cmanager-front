import { Materia } from "../../entitys/Materia";
import "./Style.css";

type CardMateriaProps = {
  materia: Materia;
};

export function CardMateria(props: CardMateriaProps) {
  return (
    <div className="Container-card-materia" id={props.materia.id.toString()}>
      <p>{props.materia.nome}</p>
      <div className="tipo-materia">
        <p>{props.materia.tipoMateriaDto.nome}</p>
      </div>
    </div>
  );
}
