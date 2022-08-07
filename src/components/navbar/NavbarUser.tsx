import { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import { Pessoa } from "../../entitys/Pessoa";
import { pessoaInfos } from "../../services/user";
import "./Style.css";

export function NavbarUser() {
  const [pessoa, setPessoa] = useState<Pessoa>();
  useEffect(() => {
    pessoaInfos().then(
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
  }, []);

  return (
    <Navbar className="Menu-users">
      <Container>
        <Navbar.Brand href="/opcoes" className="Menu-users-logo">
          Cmanager
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Usuário: <a href="#login">{pessoa?.nome}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
