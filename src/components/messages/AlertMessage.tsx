import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export enum TipoAlerta {
  Sucesso = "success",
  Erro = "danger",
  Aviso = "warning",
}

interface AlertMessageProps {
  mensagem: string;
  tipo: string;
  ocultar: boolean;
}

export function AlertMessage(props: AlertMessageProps) {
  return (
    <Alert
      key={props.tipo}
      variant={props.tipo}
      style={{ display: props.ocultar ? "none" : "" }}
    >
      {props.mensagem}
    </Alert>
  );
}
