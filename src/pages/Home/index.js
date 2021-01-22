import React, { useEffect, useState } from "react";
import OpenNotificationWithIcon from "../../components/Notificacao";
import "antd/dist/antd.css";
import api from "../../services/api";
import Pagination from "react-js-pagination";
import Lixeira from "../../assets/lixeira.svg";
import Editar from "../../assets/editar.svg";
import Aprovar from "../../assets/aprovar.svg";
import Cancelar from "../../assets/cancelar.svg";
import PrevPagination from "../../assets/prev-pagination.svg";
import NextPagination from "../../assets/next-pagination.svg";
import {
  ContainerCadGames,
  ContainerListaGames,
  ButtonCadastro,
  ConteudoGames,
  InputEdit,
} from "./styles";
import "./styles.css";

function Home() {
  const [dadosForm, setDadosForm] = useState({ descricao: "" });
  const [produtoList, setProdutoList] = useState([]);
  const [produtoEdit, setProdutoEdit] = useState({});
  const [produtoId, selectProdutoId] = useState("");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [limite] = useState(3);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getDados(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getDados(pagina) {
    const offset = pagina === 1 ? 0 : (pagina - 1) * limite;

    await api
      .get(`/produto/${limite}/${offset}`)
      .then((resp) => {
        setProdutoList(resp.data.data);
        setTotal(Number(resp.data.totalCount));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function carregarPaginaNova(pagina) {
    setPaginaAtual(pagina);
    getDados(pagina);
  }

  async function handleSave() {
    if (dadosForm.descricao !== "") {
      await api
        .post(`/produto`, dadosForm)
        .then((resp) => {
          if (resp.status === 200) {
            OpenNotificationWithIcon(
              "success",
              "Produto cadastrado com sucesso!",
              ""
            );
            clearForm();
            getDados(1);
          } else {
            OpenNotificationWithIcon("error", "Erro ao cadastrar!", "");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      OpenNotificationWithIcon("error", "Campo esta vazio!", "");
    }
  }

  async function handleDelete(id) {
    await api
      .delete(`/produto/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          OpenNotificationWithIcon(
            "success",
            "Produto excluído com sucesso!",
            ""
          );
          clearForm();
          getDados(1);
        } else {
          OpenNotificationWithIcon("error", "Erro ao tentar excluir!", "");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEdit(id, item) {
    selectProdutoId(id);
    setProdutoEdit(item);
  }

  async function handleApprove() {
    await api
      .put(`/produto/${produtoId}`, produtoEdit)
      .then((resp) => {
        if (resp.status === 200) {
          OpenNotificationWithIcon(
            "success",
            "Produto atualizado com sucesso!",
            ""
          );
          clearForm();
          getDados(1);
        } else {
          OpenNotificationWithIcon("error", "Erro ao tentar atualizar!", "");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCancelEdit(event) {
    clearForm();
  }

  function handleChangeEdit(event) {
    setProdutoEdit({
      ...produtoEdit,
      [event.target.name]: event.target.value,
    });
  }

  function handleChange(event) {
    setDadosForm({
      ...dadosForm,
      [event.target.name]: event.target.value,
    });
  }

  function clearForm() {
    setDadosForm({
      descricao: "",
      desconto: "",
      preco: "",
    });
    selectProdutoId("");
    setProdutoEdit("");
  }

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row">
        <ContainerCadGames className="col-xs-4 col-sm-12 col-md-12 col-lg-4">
          <input
            name="descricao"
            type="text"
            placeholder="exemplo: Canela de veio"
            value={dadosForm.descricao}
            onChange={handleChange}
          />
        </ContainerCadGames>
        <ContainerCadGames className="col-xs-4 col-sm-12 col-md-12 col-lg-4">
          <input
            name="desconto"
            type="number"
            placeholder="exemplo: 5%"
            value={dadosForm.desconto}
            onChange={handleChange}
          />
        </ContainerCadGames>
        <ContainerCadGames className="col-xs-4 col-sm-12 col-md-12 col-lg-4">
          <input
            name="preco"
            type="number"
            placeholder="exemplo: Preço do produto"
            value={dadosForm.preco}
            onChange={handleChange}
          />
        </ContainerCadGames>
        <ButtonCadastro onClick={handleSave}>Cadastrar</ButtonCadastro>
      </div>

      <div className="row">
        <ContainerListaGames className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {produtoList.length > 0
            ? produtoList.map((item, index) => {
                return (
                  <ConteudoGames
                    className="col-xs-12 col-sm-12 col-md-8 col-lg-8"
                    key={index}
                  >
                    {produtoId !== item.id ? (
                      <>
                        <span>{`Descrição: ${item.descricao}   Desconto: ${item.desconto}   Preço: ${item.preco}`}</span>
                        <div>
                          <img
                            src={Editar}
                            alt="Editar"
                            onClick={() => handleEdit(item.id, item)}
                          ></img>
                          <img
                            src={Lixeira}
                            alt="Excluir"
                            onClick={() => handleDelete(item.id)}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <>
                        <InputEdit
                          name="descricao"
                          type="text"
                          placeholder=""
                          value={produtoEdit.descricao}
                          onChange={handleChangeEdit}
                        />
                        <InputEdit
                          name="desconto"
                          type="number"
                          placeholder=""
                          value={produtoEdit.desconto}
                          onChange={handleChangeEdit}
                        />
                        <InputEdit
                          name="preco"
                          type="number"
                          placeholder=""
                          value={produtoEdit.preco}
                          onChange={handleChangeEdit}
                        />

                        <div>
                          <img
                            src={Aprovar}
                            alt="Aprovar"
                            onClick={() => handleApprove(item.id)}
                          ></img>
                          <img
                            src={Cancelar}
                            alt="Cancelar"
                            onClick={() => handleCancelEdit()}
                          ></img>
                        </div>
                      </>
                    )}
                  </ConteudoGames>
                );
              })
            : null}

          {produtoList.length > 0 ? (
            <Pagination
              activePage={paginaAtual}
              itemsCountPerPage={limite}
              totalItemsCount={total}
              pageRangeDisplayed={7}
              hideFirstLastPages={true}
              onChange={carregarPaginaNova}
              prevPageText={
                <div className="prev-page">
                  <img src={PrevPagination} alt="prev-page" />
                </div>
              }
              nextPageText={
                <div className="next-page">
                  <img src={NextPagination} alt="prev-page" />
                </div>
              }
            />
          ) : null}
        </ContainerListaGames>
      </div>
    </div>
  );
}

export default Home;
