import React from "react";

function SearchBar() {
  return (
    <div className="col-12 col-md-5">
      <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Digite aqui o que procura"
          />
          <button className="btn nav-upd">Pesquisar</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
