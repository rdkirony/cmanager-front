import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { PessoaInfoModal } from "./PessoaInfoModal";
import "./PesquisaPessoas.css";

export function PesquisaPessoas() {
  const [isCriarNovaPessoaOpen, setIsCriarNovaPessoaOpen] = useState(false);
  function handleAbrirModalPessoa() {
    setIsCriarNovaPessoaOpen(true);
  }
  function handleFecharModalPessoa() {
    setIsCriarNovaPessoaOpen(false);
  }

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
        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={handleAbrirModalPessoa}
        >
          Cadastrar pessoa
        </Button>
      </div>
      <div className="item-pesquisa-pessoa">
        <PessoaInfoModal
          isOpen={isCriarNovaPessoaOpen}
          fecharModal={handleFecharModalPessoa}
        />
      </div>
    </div>
  );
}
