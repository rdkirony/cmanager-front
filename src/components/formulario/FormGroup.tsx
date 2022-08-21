import { Form } from "react-bootstrap";

interface FormGroupProps{
    defaultValue:string,
    isAlteracao:boolean,
    formDescricao:string,
    className:string,
    typeForm:string,
    placeHolder:string,
    alterarUsuario?: (value:string) => void
}


export function FormGroupComponent(props:FormGroupProps) {
  return (
    <Form.Group className={props.className} controlId="formBasicEmail">
      <Form.Label>{props.formDescricao}</Form.Label>
      <Form.Control
        type={props.typeForm}
        placeholder={props.placeHolder}
        defaultValue={props.defaultValue}
        disabled={props.isAlteracao}
        onChange={(e) =>props.alterarUsuario!(e.target.value)}
        name={props.formDescricao}
      />
    </Form.Group>
  );
}
