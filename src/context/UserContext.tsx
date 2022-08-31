import { createContext, ReactNode, useEffect, useState } from "react";
import { Usuario } from "../entitys/Usuario";
import { usuariosInfos } from "../services/user";

interface UsuarioContextData {
  usuario: Usuario;
  alterarUsuario: (usuario: Usuario) => void;
}

interface UsuarioProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UsuarioContextData>({} as UsuarioContextData);

export default UserContext;

export function UsuarioProvider({ children }: UsuarioProviderProps) {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  function alterarUsuario(usuario: Usuario) {
    setUsuario(usuario);
  }

  useEffect(() => {
    usuariosInfos().then(
      (response) => {
        setUsuario(response);
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
  }, []);
  return (
    <UserContext.Provider value={{ usuario, alterarUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
