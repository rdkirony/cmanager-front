import { useContext, useRef, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { PessoaInfoModal } from "./PessoaInfoModal";
import "./PesquisaPessoas.css";
import UserListaPessoasContext from "../../context/ListPessoasContext";
import { listaPessoas } from "../../services/user";

export function PesquisaPessoas() {
  const [isCriarNovaPessoaOpen, setIsCriarNovaPessoaOpen] = useState(false);
  const { alterarPessoas, alterarPageCount } = useContext(
    UserListaPessoasContext
  );

  const inputRef = useRef<HTMLInputElement>(null);
  function handleAbrirModalPessoa() {
    setIsCriarNovaPessoaOpen(true);
  }
  function handleFecharModalPessoa() {
    setIsCriarNovaPessoaOpen(false);
  }
  function handlePesquisarPessoas(event: React.MouseEvent<HTMLButtonElement>) {
    listaPessoas(0, inputRef.current!.value).then(
      (response) => {
        alterarPessoas(response.content);
        alterarPageCount(response.totalPages);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
    console.log(inputRef.current?.value);
  }

  return (
    <div className="Container-Pesquisa-Pessoas">
      <div className="Nome-form-pesquisa item-pesquisa-pessoa">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nome"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={inputRef}
          />
        </InputGroup>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={handlePesquisarPessoas}
        >
          Pesquisar
        </Button>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={handleAbrirModalPessoa}
        >
          Cadastrar
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
