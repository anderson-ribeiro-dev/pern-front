import React, { useState } from "react";
import api from "../../services/api";
import { Container, Form, ButtonLogin } from "./styles";
import Logo from "../../assets/react.svg";

function Cadastro(props) {
  const [dadosForm, setDadosForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorEmail, setErrorEmail] = useState(false);

  async function handleSubmit() {
    await api
      .post(`/usuario`, dadosForm)
      .then((resp) => {
        window.location.href = "/app";
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }

  function handleChange(event) {
    setDadosForm({ ...dadosForm, [event.target.name]: event.target.value });
  }

  function validaEmail(e) {
    if (e.target.name === "email") {
      //Uso um comentario >>> eslint-disable-line <<<< na linha do comando para desabiltar o erro que ele da ao interpretar um regex
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g; // eslint-disable-line

      //verifica se esta deacordo com os padrao do regex
      const result = pattern.test(e.target.value);

      if (result === false) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }
  }

  return (
    <Container>
      <Form>
        <img src={Logo} alt="logo" />

        <input
          name="name"
          type="text"
          placeholder="Nome de Usuário"
          onChange={handleChange}
          value={dadosForm.name}
          autoComplete="off"
        />

        <input
          name="email"
          type="email"
          placeholder="Endereço de e-mail"
          onChange={handleChange}
          value={dadosForm.email}
          onBlur={validaEmail}
          autoComplete="off"
        />
        {errorEmail ? (
          <span style={{ color: "red" }}>
            *Por favor insira um e-mail válido
          </span>
        ) : (
          ""
        )}
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          value={dadosForm.password}
          autoComplete="off"
        />
        <ButtonLogin onClick={handleSubmit}>Cadastrar</ButtonLogin>
      </Form>
    </Container>
  );
}

export default Cadastro;
