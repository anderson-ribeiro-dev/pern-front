import React, { useContext } from "react";
import { Container, Header } from "./styles";
import { logout, isAuthenticated } from "../../services/auth";
import { AuthContext } from "../../contexts/auth";

import Sair from "../../assets/logout.svg";

function Login(props) {
  const { user } = useContext(AuthContext);

  function handleSignOut() {
    logout();
    window.location.href = "/";
  }
  //const user = JSON.parse(localStorage.getItem('USER'))
  return (
    <Container>
      <Header>
        Cadastrar Produtos
        {isAuthenticated() ? (
          <div>
            <span>Olá, {user.name}</span>
            <img src={Sair} alt="Sair" onClick={handleSignOut} />
          </div>
        ) : null}
      </Header>
    </Container>
  );
}

export default Login;
