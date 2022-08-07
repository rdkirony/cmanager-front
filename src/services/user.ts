import Api from "../Axios"

export const pessoaInfos = () =>{
    return Api
      .get("/pessoas/token", {
      }
      )
      .then((response) => {
        return response.data
      })
}