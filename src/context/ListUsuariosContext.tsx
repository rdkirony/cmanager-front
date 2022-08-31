import { ReactNode, createContext, useEffect, useState } from "react";
import { Usuario } from "../entitys/Usuario";

interface ListUsuariosContextData {
  users: Usuario[];
  alterarUsuarios: (user: Usuario[]) => void;
  pageCount: number;
  alterarPageCount: (pageCount: number) => void;
}

interface UsuarioProviderProps {
  children: ReactNode;
}

const UserListaUsuariosContext = createContext<ListUsuariosContextData>(
  {} as ListUsuariosContextData
);

export default UserListaUsuariosContext;

export function UserListaUsuariosProvider({ children }: UsuarioProviderProps) {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  function alterarPageCount(pageCount: number) {
    setPageCount(pageCount);
  }

  function alterarUsuarios(user: Usuario[]) {
    setUsers(user);
  }

  return (
    <UserListaUsuariosContext.Provider
      value={{ users, alterarUsuarios, pageCount, alterarPageCount }}
    >
      {children}
    </UserListaUsuariosContext.Provider>
  );
}
