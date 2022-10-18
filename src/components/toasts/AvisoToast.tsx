import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./Style.css"

export function AvisoToast() {
const [showA, setShowA] = useState(true);

const toggleShowA = () => setShowA(!showA);
  return (
    <ToastContainer className="p-3" position='top-end'>
      <Toast show={showA} onClose={toggleShowA} style={{backgroundColor:"white"}}>
        <Toast.Header>
          <strong className="me-auto">Relatório disponível</strong>
          <small>11 minutos atrás</small>
        </Toast.Header>
        <Toast.Body> <a href="relatorio">Clique aqui para conferir.</a></Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
