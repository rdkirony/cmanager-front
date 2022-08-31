import { ReactNode, createContext, useEffect, useState } from "react";
import { Pessoa } from "../entitys/Pessoa";
import { usuariosInfos } from "../services/user";

interface ListPessoasContextData {
  users: Pessoa[];
  alterarPessoas: (user: Pessoa[]) => void;
  pageCount: number;
  alterarPageCount: (pageCount: number) => void;
}

interface UsuarioProviderProps {
  children: ReactNode;
}

const UserListaPessoasContext = createContext<ListPessoasContextData>(
  {} as ListPessoasContextData
);

export default UserListaPessoasContext;

export function UserListaPessoasProvider({ children }: UsuarioProviderProps) {
  const [users, setUsers] = useState<Pessoa[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  function alterarPageCount(pageCount: number) {
    setPageCount(pageCount);
  }

  function alterarPessoas(user: Pessoa[]) {
    setUsers(user);
  }

  return (
    <UserListaPessoasContext.Provider
      value={{ users, alterarPessoas, pageCount, alterarPageCount }}
    >
      {children}
    </UserListaPessoasContext.Provider>
  );
}
