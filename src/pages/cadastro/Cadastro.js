import React from "react";
import "./Cadastro.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Cadastro() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow-sm mb-3">
        <div class="container">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="Logo Upando!" width="300px" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggler="collapse"
              data-target=".navbar-collapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse">
            <div class="aling-self-end">
              <ul class="navbar-nav">
                <li class="nav-item ">
                  <a href="index.html" class="nav-link item-menu">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="login.html" class="nav-link item-menu">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a href="cadastro.html" class="nav-link item-menu">
                    Cadastrar
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link item-menu">
                    <svg
                      class="bi"
                      width="24"
                      height="24"
                      fill="currentColor"
                    ></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div class="container">
          <h1>Nova Senha Cadastrada!</h1>
          <hr />
          <p>Caro Cliente,</p>
          <p>
            Sua nova senha foi cadastrada com suceso. Para fazer o login,{" "}
            <a href="/login.html">Clique aqui</a>
          </p>
          <p>Desde já agradeçemos pela confiança em nossos serviços.</p>
          <p>
            Atensiosament,
            <br />
            Equipe Upando!
          </p>
          <p>
            <a href="/index.html" class="btn nav-upd btn-danger">
              Voltar à Página Principal.
            </a>
          </p>
        </div>
      </main>

      <div style="height: 273px;" class="d-block d-md-none"></div>
      <div style="height: 153px;" class="d-none d-md-block d-lg-none"></div>
      <div style="height: 129px;" class="d-block d-md-none d-log-block"></div>

      <footer class="border-top fixed-bottom text-muted bg-light">
        <div class="container">
          <div class="row py-3">
            <div class="col-12 col-md-4 text-center text-md-left">
              &copy; 2022 - Upando!
            </div>
            <div class="col-12 col-md-4 text-center">
              <a href="#" class="text-decoration-none text-dark">
                Politica de Privacidade
              </a>
            </div>
            <div class="col-12 col-md-4 text-center text-md-rigth">
              <a href="#" class="text-decoration-none text-dark">
                Contatos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Cadastro;
