import { InputGroup, Form, Button } from "react-bootstrap";
import { PessoaInfoModal } from "../pessoa/PessoaInfoModal";
import "./PesquisaUsuarios.css";

export function PesquisaUsuarios() {
  return (
    <div className="Container-Pesquisa-Usuarios">
      <div className="Nome-form-pesquisa item-pesquisa-usuario">
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
      <div className="item-pesquisa-usuario">
        <Button variant="outline-success" id="button-addon2">
          Cadastrar
        </Button>
      </div>
      <div className="item-pesquisa-usuario"></div>
    </div>
  );
}
