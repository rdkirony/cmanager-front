export const getListaUrlPage = (page: number) => {
  let urlFinal = "";
  page ? (urlFinal = `?page=${page}`) : "";
  return urlFinal;
};
