import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { ListaResultadoMaterias } from "../../entitys/ListPeriodo";
import { MateriaPessoa } from "../../entitys/MateriaPessoa";
import { InfoMaterias } from "./InfoMaterias";
import test from "./test.json";
import test2 from "./test2.json";
import test3 from "./test3.json";

export function Calendario() {
  const [listMateria, setListMateria] = useState<ListaResultadoMaterias>(
    test as ListaResultadoMaterias
  );

  const [semestreSelecionado, setSemestreSelecionado] = useState<number>(0);

  const dias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
  ];
  const periodos = ["Manhã", "Tarde", "Noite"];
  const semestres = ["Primeiro", "Terceiro", "Quinto"];
  
  const listas = [test,test2,test3];

  function change(event: React.FormEvent<HTMLSelectElement>) {
    setSemestreSelecionado(Number(event.currentTarget.value));
    setListMateria(listas[Number(event.currentTarget.value)] as ListaResultadoMaterias)
  }

  return (
    <div className="TabelaCalendario">
      <p id="TituloCalendario">Calendário 2022.1</p>
      <p style={{ textAlign: "center" }}>
        <b>{semestres[semestreSelecionado]} - Semestre</b>
      </p>
      <div className="ConteudoSelecionavel">
        <section>
          <Form.Select aria-label="Default select example" onChange={change}>
            <option value="0">Primeiro - Semestre</option>
            <option value="1">Terceiro - Semestre</option>
            <option value="2">Quinto - Semestre</option>
          </Form.Select>
        </section>
      </div>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Período</th>
              {Array.from({ length: dias.length }).map((_, index) => (
                <th key={index}>{dias[index]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: periodos.length }).map((_, indexp) => (
              <tr>
                <td>{periodos[indexp]}</td>
                {Array.from({ length: dias.length }).map((_, indexd) => (
                  <td key={indexd}>
                    <InfoMaterias
                      listMateriaPessoa={
                        listMateria.periodo[indexp].dia[indexd]
                          .listaMateriaPessoa
                      }
                    ></InfoMaterias>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
