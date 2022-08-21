import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import UserContext from "../../context/UserContext";
import "./Style.css";

export function NavbarUser() {
  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  const {usuario} = useContext(UserContext);
  
  return (
      <Navbar className="Menu-users">
        <Container className="Container-menu-users">
          <Navbar.Brand href="/opcoes" className="Menu-users-logo">
            Cmanager
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="Login-texto">
              <p>Olá, {usuario.pessoaDto?.nome!.split(" ")[0]}</p>
              <p>
                {" "}
                <a href="/minha-conta">Minha conta </a> |{" "}
                <button id="logout" onClick={handleClick}>
                  Sair{" "}
                </button>{" "}
              </p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
