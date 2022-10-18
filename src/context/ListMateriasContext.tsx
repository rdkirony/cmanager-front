import { ReactNode, createContext, useEffect, useState } from "react";
import { Materia } from "../entitys/Materia";

interface ListMateriasContextData {
  materias: Materia[];
  alterarMaterias: (materias: Materia[]) => void;
  pageCount: number;
  alterarPageCount: (pageCount: number) => void;
}

interface UsuarioProviderProps {
  children: ReactNode;
}

const ListMateriasContextData = createContext<ListMateriasContextData>(
  {} as ListMateriasContextData
);

export default ListMateriasContextData;

export function ListMateriasProvider({ children }: UsuarioProviderProps) {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  function alterarPageCount(pageCount: number) {
    setPageCount(pageCount);
  }

  function alterarMaterias(materias: Materia[]) {
    setMaterias(materias);
  }

  return (
    <ListMateriasContextData.Provider
      value={{ materias, alterarMaterias, pageCount, alterarPageCount }}
    >
      {children}
    </ListMateriasContextData.Provider>
  );
}
