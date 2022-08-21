import Api from "../Axios"
import { Pessoa } from "../entitys/Pessoa"
import { getListaUrlPage } from "./urls"

export const pessoaInfos = () =>{
    return Api
      .get("/pessoas/token", {
      }
      )
      .then((response) => {
        return response.data
      })
}
export const usuariosInfos = () =>{
  return Api
    .get("/usuarios/token", {
    }
    )
    .then((response) => {
      return response.data
    })
}
export const atualizarPessoa = (pessoa?:Partial<Pessoa>) =>{
  return Api
    .put("/pessoas", {
      id:pessoa?.id,
      nome:pessoa?.nome,
      cpf:pessoa?.cpf,
      endereco:pessoa?.endereco,
      email:pessoa?.email
    }
    )
    .then((response) => {
      return response.data
    })
}
export const cadastrarPessoa = (pessoa?:Partial<Pessoa>) =>{
  return Api
    .post("/pessoas", {
      nome:pessoa?.nome,
      cpf:pessoa?.cpf,
      endereco:pessoa?.endereco,
      email:pessoa?.email
    }
    )
    .then((response) => {
      return response.data
    })
}


export const buscarPessoaPeloId = (id:string) =>{
  return Api
    .get("/pessoas/" + id, {
    }
    )
    .then((response) => {
      return response.data
    })
}

export const listaPessoas =(page:number)=>{
  return Api
  .get(`/pessoas${getListaUrlPage(page)}`, {
  }
  )
  .then((response) => {
    return response.data
  })
}
