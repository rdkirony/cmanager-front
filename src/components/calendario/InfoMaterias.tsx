import { Materia } from "../../entitys/Materia";
import { MateriaPessoa } from "../../entitys/MateriaPessoa";
import "./Style.css";

type InfoMateriasProps = {
  listMateriaPessoa: MateriaPessoa[];
};

export function InfoMaterias(props: InfoMateriasProps) {
  return (
    <div className="InfoMateriasCalendario">
      {props.listMateriaPessoa.length > 0 ? (
        props.listMateriaPessoa.map((result) => {
          return (
            <>
              <section id="MateriaInfoNome"><b>{result.materia.nome.toUpperCase()}</b></section>
              <section id="PessoaInfoNome">{result.pessoa.nome}</section>
            </>
          );
        })
      ) : (
        <p id="InfoLivre" style={{ textAlign: "center" }}>Livre</p>
      )}
    </div>
  );
}
