import Api from "../Axios";

export const login = (username: string, password: string) => {
  return Api.post("/auth", {
    login: username,
    senha: password,
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("perfilId", response.data.perfilId)
    }
    return response.data;
  });
};
