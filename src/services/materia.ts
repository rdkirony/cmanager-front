import Api from "../Axios";
import { getListaUrlPage } from "./urls";

export const listaMaterias = (page: number, nome: String) => {
    return Api.get(
      `/materias${getListaUrlPage(page)}${
        nome && page > 0 ? `&nome=${nome}` : nome ? `?nome=${nome}` : ""
      }`,
      {}
    ).then((response) => {
      return response.data;
    });
  };