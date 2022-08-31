import { Dispatch, SetStateAction } from "react";
import { Perfil } from "./Perfil";
import { Pessoa } from "./Pessoa"

export interface Usuario {
    pessoaDto?:Partial<Pessoa>,
    perfilDto?:Partial<Perfil>,
    id:number,
    login:string | undefined,
}