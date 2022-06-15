import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import product1 from "./img/produtos/000001.jpg";
import product2 from "./img/produtos/000002.jpg";

function App() {
  const generateProduct = () => {
    for (let i = 0; i < 5; i++) {
      return (
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
          <div class="card text-center bg-light">
            <img src={product1} class="car-img-top" />
            <div class="card-header">
              <b>R$: 4,50</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Item 9999</h5>
              <p class="card-text">
                Inspirado por famosos personagens esses bonecos cabeçudos com
                corpo pequeno e aspecto de 'fofura'.
              </p>
            </div>
            <div class="card-footer">
              <form class="d-block">
                <button class="btn nav-upd">Adicionar ao Carrinho</button>
              </form>
              <small class="text-success">X unidades em estoque</small>
            </div>
          </div>
        </div>
      );
    }
  };
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
                    <svg class="bi" width="24" height="24" fill="currentColor">
                      {/* <use xlink:href="/bi.svg#cart3" /> */}
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header class="container">
        {/* <!-- Carousel --> */}
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          {/* <!-- Indicators/dots --> */}
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
          </div>
          {/*     
                   <!-- The slideshow/carousel --> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="./img/slides/slide01.png"
                alt="slide1"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="./img/slides/slide02.png"
                alt="slide2"
                class="d-block w-100"
              />
            </div>
          </div>

          {/* <!-- Left and right controls/icons --> */}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
        <hr class="mt-3" />
      </header>

      <main class="mb-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <form class="justify-content-center justify-content-md-start mb-3 mb-md-0">
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Digite aqui o que procura"
                  />
                  <button class="btn nav-upd">Pesquisar</button>
                </div>
              </form>
            </div>

            <div class="col-12 col-md-7">
              <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <form class="ml-3 d-inline-block">
                  <select class="form-select form-select-sm">
                    <option>Ordenar pelo nome</option>
                    <option>Preço Crescente</option>
                    <option>Preço Decrescente</option>
                  </select>
                </form>
                <nav class="d-inline-block">
                  <ul class="pagination pagination-sm my-0">
                    <li class="page item">
                      <button class="page-link">1</button>
                    </li>
                    <li class="page item">
                      <button class="page-link">2</button>
                    </li>
                    <li class="page item">
                      <button class="page-link">3</button>
                    </li>
                    <li class="page item">
                      <button class="page-link">4</button>
                    </li>
                    <li class="page item">
                      <button class="page-link">5</button>
                    </li>
                    <li class="page item">
                      <button class="page-link">6</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="row">
            {generateProduct()}

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 2</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product1} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 3</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 4</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product1} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 5</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 6</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product1} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 1</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 2</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product1} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 3</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 4</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product1} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 5</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
              <div class="card text-center bg-light">
                <img src={product2} class="car-img-top" />
                <div class="card-header">
                  <b>R$: 4,50</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Item 6</h5>
                  <p class="card-text">
                    Inspirado por famosos personagens esses bonecos cabeçudos
                    com corpo pequeno e aspecto de 'fofura'.
                  </p>
                </div>
                <div class="card-footer">
                  <form class="d-block">
                    <button class="btn nav-upd">Adicionar ao Carrinho</button>
                  </form>
                  <small class="text-success">X unidades em estoque</small>
                </div>
              </div>
            </div>
            <hr class="mt-3" />
            <div class="row pb-4">
              <div class="col-12">
                <div class="col-12 col-md-7">
                  <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                    <nav class="d-inline-block">
                      <ul class="pagination pagination-sm my-0">
                        <li class="page item">
                          <button class="page-link">
                            <h4>1</h4>
                          </button>
                        </li>
                        <li class="page item">
                          <button class="page-link">
                            <h4>2</h4>
                          </button>
                        </li>
                        <li class="page item">
                          <button class="page-link">
                            <h4>3</h4>
                          </button>
                        </li>
                        <li class="page item">
                          <button class="page-link">
                            <h4>4</h4>
                          </button>
                        </li>
                        <li class="page item">
                          <button class="page-link">
                            <h4>5</h4>
                          </button>
                        </li>
                        <li class="page item">
                          <button class="page-link">
                            <h4>6</h4>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                Sobre
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
