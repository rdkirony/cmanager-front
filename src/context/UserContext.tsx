import { createContext } from "react";

type PerfilProps = {
    id:number,
    nome:string,
    descricao:string
}

type PessoaProps = {
    id:number,
    setId:(id:string) =>void
    nome:string,
    setNome:(nome:string) =>void
    cpf?:string,
    setCpf: () =>{}
    email?:string,
    setEmail : () =>{}
    endereco?:string,
    setEndereco:() =>{}
}

type UserProps = {
    pessoa?:PessoaProps,
    token: string,
    perfil?:PerfilProps,
    id:number | undefined,
}

const UserContext = createContext<UserProps>({
    id:undefined,
    token:""
})

export default UserContext;