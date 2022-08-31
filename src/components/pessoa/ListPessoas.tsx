import React, { SetStateAction, useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Pessoa } from "../../entitys/Pessoa";
import { buscarPessoaPeloId, listaPessoas } from "../../services/user";
import { PessoaInfoModal } from "./PessoaInfoModal";
import "./ListaPessoas.css";
import  Teacher  from   "../../imgs/cardPessoa/teacher.png";
import  Teacher2  from   "../../imgs/cardPessoa/teacher2.png";
import  Teacher3  from   "../../imgs/cardPessoa/teacher3.png";
import  Teacher4  from   "../../imgs/cardPessoa/teacher4.png";
import { CardPessoa } from "../carPessoa/CardPessoa";
import UserListaPessoasContext from "../../context/ListPessoasContext";


export function ListPessoas() {
  const { users, alterarPessoas, pageCount, alterarPageCount } = useContext(UserListaPessoasContext);
  const [isCriarNovaPessoaOpen, setIsCriarNovaPessoaOpen] = useState(false);
  const [pessoa, setPessoa] = useState<Pessoa>({} as Pessoa);
  const [loading, setLoading] = useState(false);
  const [displayUsers, setDisplayUsers] = useState<JSX.Element>();

  useEffect(() => {
    listaPessoas(0,"").then(
      (response) => {
        alterarPessoas(response.content);
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

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function DisplayList() {
    return (
      <div className="Cards-lista-pessoas">
        {users.map((user) => {
          let val = getRandomInt(0,4)
          if(val ==0){
            return (
              <div onClick={handleAbrirModalPessoa}>
                <CardPessoa image={Teacher} pessoa={user}>
                </CardPessoa>
              </div>
            );
          }else if(val == 1){
            return(
              <div onClick={handleAbrirModalPessoa}>
                <CardPessoa image={Teacher2} pessoa={user}>
                </CardPessoa>
              </div>
            )
          }else if(val == 2){
            return(
              <div onClick={handleAbrirModalPessoa}>
                <CardPessoa image={Teacher3} pessoa={user}>
                </CardPessoa>
              </div>
            )
          }else{
            return(
              <div onClick={handleAbrirModalPessoa}>
                <CardPessoa image={Teacher4} pessoa={user}>
                </CardPessoa>
              </div>
            )
          }

        })}
      </div>
    );
  }


  function handleAbrirModalPessoa(e: any) {
    console.log(e.currentTarget.id);
    buscarPessoaPeloId(e.currentTarget.firstElementChild.id).then(
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
    listaPessoas(selected,"").then(
      (response) => {
        alterarPessoas(response.content);
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
