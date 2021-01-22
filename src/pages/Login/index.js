import React, { useState } from "react";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Link } from "react-router-dom";
import OpenNotificationWithIcon from "../../components/Notificacao";

import { Container, Form, ButtonLogin } from "./styles";
import Logo from "../../assets/react.svg";

function Login(props) {
  const [dadosForm, setDadosForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit() {
    await api
      .post(`/auth`, dadosForm)
      .then((resp) => {
        if (resp.status === 200) {
          console.log();
          localStorage.setItem("USER", JSON.stringify(resp.data.user));
          login(resp.data.token);

          //props.history.push("/app")
          window.location.href = "/app";
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon("error", "Credênciais inválidas !!", "");
      });
  }

  function handleChange(event) {
    setDadosForm({ ...dadosForm, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      <Form>
        <img src={Logo} alt="logo" />

        <input
          name="email"
          type="email"
          placeholder="Endereço de e-mail"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <ButtonLogin onClick={handleSubmit}>Entrar</ButtonLogin>
        <hr />
        <Link to="/signup">Criar conta grátis</Link>
      </Form>
    </Container>
  );
}

export default Login;
