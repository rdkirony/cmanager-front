import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import "./Style.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormGroupComponent } from "../formulario/FormGroup";
import { Pessoa } from "../../entitys/Pessoa";
import {
  atualizarPessoa,
  buscarPessoaPeloId,
  cadastrarPessoa,
} from "../../services/user";
import { AlertMessage, TipoAlerta } from "../messages/AlertMessage";

Modal.setAppElement("#root");

interface NovaTarefaModalProps {
  isOpen: boolean;
  fecharModal: () => void;
  pessoaProps?: Pessoa;
}

export function PessoaInfoModal({
  isOpen,
  fecharModal,
  pessoaProps,
}: NovaTarefaModalProps) {
  const [pessoa, setPessoa] = useState<Pessoa>({} as Pessoa);
  const [loading, setLoading] = useState(false);
  const [isOcultarAlert, setIsOcultarAlert] = useState(true);

  useEffect(() => {
    pessoaProps ? setPessoa(pessoaProps) : "";
    setLoading(true);
  }, [pessoaProps]);

  function handleSetNome(value: string) {
    setPessoa({ ...pessoa, nome: value });
  }
  function handleSetEmail(value: string) {
    setPessoa({ ...pessoa, email: value });
  }
  function handleSetEndereco(value: string) {
    setPessoa({ ...pessoa, endereco: value });
  }
  function handleSetCpf(value: string) {
    setPessoa({ ...pessoa, cpf: value });
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pessoa.id) {
      atualizarPessoa(pessoa).then(
        (response) => {
          setPessoa(response);
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
    } else {
      cadastrarPessoa(pessoa).then(
        (response) => {
          setPessoa(response);
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
    }
  };

  return loading ? (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={fecharModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <div>
          <button
            type="button"
            onClick={fecharModal}
            className="react-modal-close"
          >
            <AiOutlineClose />
          </button>
          <AlertMessage
            mensagem="Usuario cadastrado com sucesso"
            tipo={TipoAlerta.Sucesso}
            ocultar={isOcultarAlert}
          ></AlertMessage>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col className="mb-3 Informacoes-pessoas">
                {pessoaProps ? "Editar" : "Cadastro de pessoa"}
              </Col>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetNome}
                defaultValue={pessoaProps?.nome!}
                className="mb-3"
                formDescricao="Nome"
                isAlteracao={false}
                placeHolder=""
                typeForm="text"
                key=""
              ></FormGroupComponent>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetCpf}
                defaultValue={pessoaProps?.cpf!}
                className="mb-3"
                formDescricao="Cpf"
                isAlteracao={false}
                placeHolder=""
                typeForm="text"
                key=""
              ></FormGroupComponent>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetEmail}
                defaultValue={pessoaProps?.email!}
                className="mb-3"
                formDescricao="Email"
                isAlteracao={false}
                placeHolder=""
                typeForm="email"
                key=""
              ></FormGroupComponent>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetEndereco}
                defaultValue={pessoaProps?.endereco!}
                className="mb-3"
                formDescricao="Endereço"
                isAlteracao={false}
                placeHolder=""
                typeForm="text"
                key=""
              ></FormGroupComponent>
            </Row>
            <Button
              variant="outline-success"
              type="submit"
              className="float-end"
            >
              Salvar
            </Button>
          </Form>
        </div>
      </Modal>
    </Container>
  ) : (
    <div></div>
  );
}
