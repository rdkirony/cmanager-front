import { useEffect, useState, ChangeEvent, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormGroupComponent } from "../components/formulario/FormGroup";
import TokenContext from "../context/TokenContext";
import UserContext from "../context/UserContext";
import { atualizarPessoa } from "../services/user";
import "../styles/MinhaConta.css";

export function MinhaConta() {
  const tokenContext = useContext(TokenContext);
  const { usuario, alterarUsuario } = useContext(UserContext);

  let navigate = useNavigate();
  const [isAlteracao, setIsAlteracao] = useState<boolean>(false);
  useEffect(() => {
    !tokenContext.token ? navigate("/") : "";
  }, []);

  const enventAlterarInfoHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsAlteracao(true);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(usuario);
    atualizarPessoa(usuario?.pessoaDto).then(
      (response) => {
        alterarUsuario({ ...usuario, pessoaDto: response });
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
    setIsAlteracao(false);
  };
  function handleSetNome(value: string) {
    alterarUsuario({
      ...usuario,
      pessoaDto: {
        ...usuario?.pessoaDto,
        nome: value,
      },
    });
  }
  function handleSetEmail(value: string) {
    alterarUsuario({
      ...usuario,
      pessoaDto: {
        ...usuario?.pessoaDto,
        email: value,
      },
    });
  }
  function handleSetCpf(value: string) {
    alterarUsuario({
      ...usuario,
      pessoaDto: {
        ...usuario?.pessoaDto,
        cpf: value,
      },
    });
  }
  function handleSetEndereco(value: string) {
    alterarUsuario({
      ...usuario,
      pessoaDto: {
        ...usuario?.pessoaDto,
        endereco: value,
      },
    });
  }
  return (
    <Container className="Minha-conta-container">
      <Form onSubmit={handleFormSubmit}>
        <div className="Pessoa-informacoes">
          <Row>
            <Col className="mb-3 Informacoes-gerais">Informações gerais</Col>
          </Row>
          <Row>
            <Col>
              <FormGroupComponent
                alterarUsuario={handleSetNome}
                defaultValue={usuario?.pessoaDto?.nome!}
                className="mb-3"
                formDescricao="Nome"
                isAlteracao={!isAlteracao}
                placeHolder=""
                typeForm="text"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
            <Col>
              <FormGroupComponent
                alterarUsuario={handleSetEmail}
                defaultValue={usuario?.pessoaDto?.email!}
                className="mb-3"
                formDescricao="Email"
                isAlteracao={!isAlteracao}
                placeHolder=""
                typeForm="email"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroupComponent
                alterarUsuario={handleSetCpf}
                defaultValue={usuario?.pessoaDto?.cpf!}
                className="mb-3"
                formDescricao="Cpf"
                isAlteracao={!isAlteracao}
                placeHolder=""
                typeForm="text"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
            <Col>
              <FormGroupComponent
                alterarUsuario={handleSetEndereco}
                defaultValue={usuario?.pessoaDto?.endereco!}
                className="mb-3"
                formDescricao="Endereço"
                isAlteracao={!isAlteracao}
                placeHolder=""
                typeForm="text"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3 Informacoes-gerais">Perfil</Col>
          </Row>
          <Row>
            <Col>
              <FormGroupComponent
                defaultValue={usuario?.perfilDto?.nome!}
                className="mb-3"
                formDescricao="Nome"
                isAlteracao={true}
                placeHolder=""
                typeForm="text"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
            <Col>
              <FormGroupComponent
                defaultValue={usuario?.perfilDto?.descricao!}
                className="mb-3"
                formDescricao="Descrição"
                isAlteracao={true}
                placeHolder=""
                typeForm="text"
                key={usuario.id}
              ></FormGroupComponent>
            </Col>
          </Row>
          {isAlteracao ? (
            <Button
              variant="outline-success"
              type="submit"
              className="float-end"
            >
              Salvar alterações
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              className="float-end"
              onClick={enventAlterarInfoHandler}
              type="button"
            >
              Alterar informações
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}
