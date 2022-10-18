import { InputGroup, Form, Button } from "react-bootstrap";

export function ListaSemestres() {
  return (
    <div className="Container-Pesquisa-Pessoas">
      <div className="Nome-form-pesquisa item-pesquisa-pessoa">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nome"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button variant="outline-primary" id="button-addon2">
          Pesquisar
        </Button>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button variant="outline-success" id="button-addon2">
          Cadastrar
        </Button>
      </div>
      <div className="item-pesquisa-semestre"></div>
    </div>
  );
}
