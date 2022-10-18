import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ListMateriasContextData from "../../context/ListMateriasContext";
import { Materia } from "../../entitys/Materia";
import { listaMaterias } from "../../services/materia";
import { CardMateria } from "../cardMateria/CardMateria";

export function ListaMaterias(){
    const { materias, alterarMaterias, pageCount, alterarPageCount } = useContext(
        ListMateriasContextData
      );
      const [isCriarNovoUsuarioOpen, setIsCriarNovoUsuarioOpen] = useState(false);
      const [materia, setMateria] = useState<Materia>({} as Materia);
      const [loading, setLoading] = useState(false);
      const [displayUsers, setDisplayUsers] = useState<JSX.Element>();
    
      useEffect(() => {
        listaMaterias(0, "").then(
          (response) => {
            alterarMaterias(response.content);
            alterarPageCount(response.totalPages);
            setLoading(true);
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
      useEffect(() => {
        setDisplayUsers(DisplayList());
      }, [materias]);
    
      function DisplayList() {
        return (
          <div className="Cards-lista-usuarios">
            {materias.map((materia) => {
              return (
                <div onClick={handleAbrirModalMateria}>
                  <CardMateria materia={materia}></CardMateria>
                </div>
              );
            })}
          </div>
        );
      }
    
      function handleAbrirModalMateria(e: any) {
        console.log(e.currentTarget.id);
        
      }
      function handleFecharModalUsuario() {
        setIsCriarNovoUsuarioOpen(false);
        window.location.reload();
      }
    
      function changePage({ selected }: { selected: number }) {
        listaMaterias(selected, "").then(
          (response) => {
            alterarMaterias(response.content);
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
      }
    
      return loading ? (
        <div>
          <div>
            {displayUsers}
            <ReactPaginate
              previousLabel={"Anterior"}
              nextLabel={"Próxima"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              breakLabel="..."
              pageRangeDisplayed={2}
            />
          </div>
        </div>
      ) : (
        <div></div>
      );
}