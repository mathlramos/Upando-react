import React from "react";

// import { Container } from './styles';

function Footer() {
  return (
    <footer className="border-top fixed-bottom text-muted bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 text-center text-md-left">
            &copy; 2022 - Upando!
          </div>
          <div className="col-12 col-md-4 text-center">
            <a href="#" className="text-decoration-none text-dark">
              Politica de Privacidade
            </a>
          </div>
          <div className="col-12 col-md-4 text-center text-md-rigth">
            <a href="#" className="text-decoration-none text-dark">
              Sobre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
