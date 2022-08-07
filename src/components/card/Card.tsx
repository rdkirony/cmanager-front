import "./Style.css";

type CardProps = {
  text:string,
  image: string
}

export function Card(props: CardProps) {
  return (
    <div className="Card-opcoes">
      <div className="Card-image">
        <img src={props.image} width="auto" height="auto" alt="" />
      </div>
      <div className="Card-conteudo">{props.text}</div>
    </div>
  );
}
