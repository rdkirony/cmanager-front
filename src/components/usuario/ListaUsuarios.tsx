import React, { SetStateAction, useContext, useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  buscarUsuarioPeloId,
  listaUsuarios,
} from "../../services/user";
import "./ListaUsuarios.css";
import UserListaUsuariosContext from "../../context/ListUsuariosContext";
import { CardUsuario } from "../cardUsuario/CardUsuario";
import { Usuario } from "../../entitys/Usuario";

export function ListUsuarios() {
  const { users, alterarUsuarios, pageCount, alterarPageCount } = useContext(
    UserListaUsuariosContext
  );
  const [isCriarNovoUsuarioOpen, setIsCriarNovoUsuarioOpen] = useState(false);
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [loading, setLoading] = useState(false);
  const [displayUsers, setDisplayUsers] = useState<JSX.Element>();

  useEffect(() => {
    listaUsuarios(0, "").then(
      (response) => {
        alterarUsuarios(response.content);
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
  }, [users]);

  function DisplayList() {
    return (
      <div className="Cards-lista-usuarios">
        {users.map((user) => {
          return (
            <div onClick={handleAbrirModalUsuario}>
              <CardUsuario usuario={user}></CardUsuario>
            </div>
          );
        })}
      </div>
    );
  }

  function handleAbrirModalUsuario(e: any) {
    console.log(e.currentTarget.id);
    buscarUsuarioPeloId(e.currentTarget.firstElementChild.id).then(
      (response) => {
        console.log(response);
        setUsuario(response);
        setIsCriarNovoUsuarioOpen(true);
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
  function handleFecharModalUsuario() {
    setIsCriarNovoUsuarioOpen(false);
    window.location.reload();
  }

  function changePage({ selected }: { selected: number }) {
    listaUsuarios(selected, "").then(
      (response) => {
        alterarUsuarios(response.content);
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
