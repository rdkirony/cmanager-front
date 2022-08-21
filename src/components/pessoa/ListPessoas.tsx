import React, { SetStateAction, useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Pessoa } from "../../entitys/Pessoa";
import { buscarPessoaPeloId, listaPessoas } from "../../services/user";
import { PessoaInfoModal } from "./PessoaInfoModal";
import "./Style.css";

export function ListPessoas() {
  const [users, setUsers] = useState<Pessoa[]>([]);
  const [isCriarNovaPessoaOpen, setIsCriarNovaPessoaOpen] = useState(false);
  const [pessoa, setPessoa] = useState<Pessoa>({} as Pessoa);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [displayUsers, setDisplayUsers] = useState<JSX.Element>();

  useEffect(() => {
    listaPessoas(0).then(
      (response) => {
        setUsers(response.content);
        setPageCount(response.totalPages);
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
      <Table striped className="Table-pessoas">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cpf</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr
                key={user.id}
                id={user.id.toString()}
                className="Tr-pessoas"
                onClick={handleAbrirModalPessoa}
              >
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{user.endereco}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  function handleAbrirModalPessoa(e: any) {
    console.log(e.currentTarget.id);
    buscarPessoaPeloId(e.currentTarget.id).then(
      (response) => {
        console.log(response);
        setPessoa(response);
        setIsCriarNovaPessoaOpen(true);
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
  function handleFecharModalPessoa() {
    setIsCriarNovaPessoaOpen(false);
    window.location.reload();
  }

  function changePage({ selected }: { selected: number }) {
    listaPessoas(selected).then(
      (response) => {
        setUsers(response.content);
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
    <div className="App">
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
      <PessoaInfoModal
        isOpen={isCriarNovaPessoaOpen}
        fecharModal={handleFecharModalPessoa}
        pessoaProps={pessoa}
      />
    </div>
  ) : (
    <div></div>
  );
}
