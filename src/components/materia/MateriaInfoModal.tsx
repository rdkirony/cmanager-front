import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormGroupComponent } from "../formulario/FormGroup";
import { AlertMessage, TipoAlerta } from "../messages/AlertMessage";
import { Materia } from "../../entitys/Materia";
import { TipoMateria } from "../../entitys/TipoMateria";

Modal.setAppElement("#root");

interface NovaPessoaModalProps {
  isOpen: boolean;
  fecharModal: () => void;
  materiaProps?: Materia;
}

export function MateriaInfoModal({
  isOpen,
  fecharModal,
  materiaProps,
}: NovaPessoaModalProps) {
  const [materia, setMateria] = useState<Materia>({} as Materia);
  const [loading, setLoading] = useState(false);
  const [isOcultarAlert, setIsOcultarAlert] = useState(true);

  useEffect(() => {
    materiaProps ? setMateria(materiaProps) : "";
    setLoading(true);
  }, [materiaProps]);

  function handleSetNome(value: string) {
    setMateria({ ...materia, nome: value });
  }
  function handleSetDescricao(value: string) {
    setMateria({ ...materia, descricao: value });
  }
  function handleSetTipoMateria(value: TipoMateria) {
    setMateria({ ...materia, tipoMateriaDto: value });
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   /* if (pessoa.id) {
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
    }*/
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
              <Col className="mb-3 Informacoes-pessoas" style={{textAlign:"center"}}>
                {materiaProps ? "Editar" : "Cadastro de Matérias"}
              </Col>
            </Row>
            <Row>
              <FormGroupComponent
                alterarUsuario={handleSetNome}
                defaultValue={materia?.nome!}
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
                alterarUsuario={handleSetDescricao}
                defaultValue={materia?.nome!}
                className="mb-3"
                formDescricao="Descrição"
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
                  <option value="1">Obrigatória</option>
                  <option value="2">Optativa</option>
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
