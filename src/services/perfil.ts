import Api from "../Axios";
import { getListaUrlPage } from "./urls";

export const listaPerfis = (page: number) => {
  return Api.get(`/perfis${getListaUrlPage(page)}`, {}).then((response) => {
    return response.data;
  });
};
