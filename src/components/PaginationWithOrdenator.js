import React from "react";

function PaginationWithOrdenator() {
  return (
    <div className="col-12 col-md-7">
      <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
        <form className="ml-3 d-inline-block">
          <select className="form-select form-select-sm">
            <option>Ordenar pelo nome</option>
            <option>Preço Crescente</option>
            <option>Preço Decrescente</option>
          </select>
        </form>
        <nav className="d-inline-block">
          <ul className="pagination pagination-sm my-0">
            <li className="page item">
              <button className="page-link">1</button>
            </li>
            <li className="page item">
              <button className="page-link">2</button>
            </li>
            <li className="page item">
              <button className="page-link">3</button>
            </li>
            <li className="page item">
              <button className="page-link">4</button>
            </li>
            <li className="page item">
              <button className="page-link">5</button>
            </li>
            <li className="page item">
              <button className="page-link">6</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PaginationWithOrdenator;
