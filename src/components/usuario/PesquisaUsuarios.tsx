import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { PessoaInfoModal } from "../pessoa/PessoaInfoModal";
import "./PesquisaUsuarios.css";
import { UsuarioInfoModal } from "./UsuarioInfoModal";

export function PesquisaUsuarios() {
  const [iscriarNovoUsuarioOpen, setIsCriarNovoUsuarioOpen] = useState(false);

  function handleFecharModalUsuario() {
    setIsCriarNovoUsuarioOpen(false);
  }
  function handleAbrirModalUsuario() {
    setIsCriarNovoUsuarioOpen(true);
  }

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
        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={handleAbrirModalUsuario}
        >
          Cadastrar
        </Button>
      </div>
      <div className="item-pesquisa-usuario">
        <UsuarioInfoModal
          isOpen={iscriarNovoUsuarioOpen}
          fecharModal={handleFecharModalUsuario}
        />
      </div>
    </div>
  );
}
