import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormGroupComponent } from "../formulario/FormGroup";
import { AlertMessage, TipoAlerta } from "../messages/AlertMessage";
import { Usuario } from "../../entitys/Usuario";
import { cadastrarUsuario } from "../../services/user";

Modal.setAppElement("#root");

interface NovaTarefaModalProps {
  isOpen: boolean;
  fecharModal: () => void;
  usuarioProps?: Usuario;
}

export function UsuarioInfoModal({
  isOpen,
  fecharModal,
  usuarioProps,
}: NovaTarefaModalProps) {
  const [usuario, setusuario] = useState<Usuario>({} as Usuario);
  const [loading, setLoading] = useState(false);
  const [isOcultarAlert, setIsOcultarAlert] = useState(true);

  useEffect(() => {
    usuarioProps ? setusuario(usuarioProps) : "";
    setLoading(true);
  }, [usuarioProps]);

  function handleSetLogin(value: string) {
    setusuario({ ...usuario, login: value });
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cadastrarUsuario(usuario).then(
      (response) => {
        setusuario(response);
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
              <Col className="mb-3 Informacoes-usuarios">
                {usuarioProps ? "Editar" : "Cadastro de usuario"}
              </Col>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetLogin}
                defaultValue={usuarioProps?.login!}
                className="mb-3"
                formDescricao="Login"
                isAlteracao={false}
                placeHolder=""
                typeForm="text"
                key=""
              ></FormGroupComponent>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  <option>Perfil</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  <option>Pessoa</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
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
