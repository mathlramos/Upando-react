import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import mockProducts from "./mockProducts";
import productImage1 from "./img/produtos/000001.jpg";
import productImage2 from "./img/produtos/000002.jpg";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import PaginationWithOrdenator from "./components/PaginationWithOrdenator";

function App() {
  const renderProducts = () => {
    return mockProducts.map((product) => (
      <Product key={product.id} image={productImage1} product={product} />
    ));
  };

  return (
    <>
      <Nav />
      <header className="container">
        {/* <!-- Carousel --> */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* <!-- Indicators/dots --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
          </div>
          {/*     
                   <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img/slides/slide01.png"
                alt="slide1"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img/slides/slide02.png"
                alt="slide2"
                className="d-block w-100"
              />
            </div>
          </div>

          {/* <!-- Left and right controls/icons --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <hr className="mt-3" />
      </header>

      <main className="mb-5 pb-5">
        <div className="container">
          <div className="row">
            <SearchBar />
            <PaginationWithOrdenator />
          </div>
          <hr className="mt-3" />
          <div className="row">
            {renderProducts()}
            <hr className="mt-3" />
          </div>
        </div>
        <Pagination />
      </main>

      <Footer />
    </>
  );
}

export default App;
