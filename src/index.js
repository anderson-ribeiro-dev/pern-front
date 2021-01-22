import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GlobalStyle } from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AuthProvider from "./contexts/auth";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <Header />
      <Routes />
      <Footer />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
