import { Button, ListGroup } from "react-bootstrap";
import { FormGroupComponent } from "../formulario/FormGroup";
import "./CadastroSemestre.css";

export function CadastroSemestre() {
  return (
    <div className="containerCadastroSemestre">
      <p id="textoContainer">Cadastro de Semestres</p>
      <div className="containerFilhoSemestre">
        <div className="dataSemestre">
          <p id="textoData">Perido - Semestre</p>
          <FormGroupComponent
            defaultValue={""}
            className="mb-3"
            formDescricao="Data abertura"
            isAlteracao={false}
            placeHolder=""
            typeForm="date"
            key=""
            id="test"
          ></FormGroupComponent>
          <FormGroupComponent
            defaultValue={""}
            className="mb-3"
            formDescricao="Data fechamento"
            isAlteracao={false}
            placeHolder=""
            typeForm="date"
            key=""
          ></FormGroupComponent>
        </div>
        <div className="dataAlocacao">
          <p id="textoData">Periodo - Formulário</p>
          <FormGroupComponent
            defaultValue={""}
            className="mb-3"
            formDescricao="Data abertura"
            isAlteracao={false}
            placeHolder=""
            typeForm="date"
            key=""
          ></FormGroupComponent>
          <FormGroupComponent
            defaultValue={""}
            className="mb-3"
            formDescricao="Data fechamento"
            isAlteracao={false}
            placeHolder=""
            typeForm="date"
            key=""
          ></FormGroupComponent>
        </div>
      </div>
      <p id="textoContainer">Selecionar matérias</p>
      <div className="containerSelecionarMaterias">
        <div className="materiasSelecionar">
          <p id="selecionar">Matérias disponiveis</p>
          <p>Cálculo 3</p>
          <p>Cálculo 2</p>
          <p>Cálculo 1</p>
          <p>Engenharia de Software</p>
          <p>Programação Orientada a Objetos</p>
          <p>Física 1</p>
          <p>Física 2</p>
        </div>
        <div className="buttonsMaterias">
          <Button variant="outline-primary">Adicionar</Button>
          <Button variant="outline-danger">Remover</Button>
        </div>
        <div className="materiasSelecionadas">
          <p id="selecionar">Matérias selecionadas</p>
          <p>Eletronica Digital</p>
          <p>Circuitos Eletrônicos</p>
          <p>Empreendedorismo</p>
          <p>Computação e Sociedade</p>
        </div>
      </div>
      <div className="salvarInformacoes">
        <Button variant="outline-success" type="submit">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
