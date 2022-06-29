import React from "react";
import api from "../../services/api";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import "./Login.css";

function login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const login = async () => {
    const { data } = await api.post("/signin", { username: email, password });
    console.log(data);
  };
  return (
    <>
      <Nav />
      <main className="login-card">
        <div className="container-login">
          <h1 className="gradient login-text">Entrar</h1>
          <div>
            <div className="form-control-custom">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="form-control-custom">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="">Senha</label>
            </div>
            <button className="btn" onClick={login}>
              Entrar
            </button>
            <p className="text login-text">
              <a href="./cadastronovasenha.html" className="link">
                Esqueci minha senha
              </a>
            </p>
            <p className="text login-text">
              <a href="./cadastro.html" className="link">
                Me cadastrar
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default login;
