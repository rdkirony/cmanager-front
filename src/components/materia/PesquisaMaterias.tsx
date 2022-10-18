import { useContext, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ListMateriasContextData from "../../context/ListMateriasContext";
import { TipoMateria } from "../../entitys/TipoMateria";
import { listaMaterias } from "../../services/materia";
import { MateriaInfoModal } from "./MateriaInfoModal";

export function PesquisaMaterias() {
  const [isCriarNovaMateriaOpen, setIsCriarNovaMateriaOpen] = useState(false);
  const [tipoMateria,setTipoMateria] = useState<TipoMateria[]>([])
  const { alterarMaterias, alterarPageCount } = useContext(
    ListMateriasContextData
  );
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAbrirModalMateria() {
    setIsCriarNovaMateriaOpen(true);
  }
  function handleFecharModalMateria() {
    setIsCriarNovaMateriaOpen(false);
  }

  function handlePesquisarMaterias(event: React.MouseEvent<HTMLButtonElement>) {
    listaMaterias(0, inputRef.current!.value).then(
      (response) => {
        alterarMaterias(response.content);
        alterarPageCount(response.totalPages);
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
  }

  return (
    <div className="Container-Pesquisa-Pessoas">
      <div className="Nome-form-pesquisa item-pesquisa-pessoa">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nome"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={inputRef}
          />
        </InputGroup>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={handlePesquisarMaterias}
        >
          Pesquisar
        </Button>
      </div>
      <div className="item-pesquisa-pessoa">
        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={handleAbrirModalMateria}
        >
          Cadastrar
        </Button>
      </div>
      <div className="item-pesquisa-materia">
        <MateriaInfoModal
          isOpen={isCriarNovaMateriaOpen}
          fecharModal={handleFecharModalMateria}
        />
      </div>
    </div>
  );
}
