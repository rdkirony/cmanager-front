import { MouseEventHandler } from "react";
import { Perfil } from "../../entitys/Perfil";
import { Pessoa } from "../../entitys/Pessoa";
import "./Style.css";

type CardPessoaProps ={
    pessoa:Pessoa
    children: React.ReactNode;
    image:string;
}

export function CardPessoa(props:CardPessoaProps){
    return(
        <div className="Container-card-pessoa" id={props.pessoa.id.toString()}>
            {props.pessoa.nome}
            <div className="Img-card-pessoa"><img src={props.image} width="auto" height="auto" alt="" /></div>
            {props.children}
        </div>
    )
}