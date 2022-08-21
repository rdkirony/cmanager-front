import { Card, Button } from "react-bootstrap";
import { Perfil } from "../../entitys/Perfil";

type CardPerfilProps = {
  perfil: Perfil;
  image: string;
};

export function CardPerfil(props: CardPerfilProps) {
  return (
    <Card style={{ width: "18rem", padding:"5%" }} id={props.perfil.id.toString()}>
      <Card.Img variant="top" src={props.image} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{props.perfil.nome}</Card.Title>
        <Card.Text>{props.perfil.descricao}</Card.Text>
        <Button variant="outline-primary">Editar</Button>
      </Card.Body>
    </Card>
  );
}
