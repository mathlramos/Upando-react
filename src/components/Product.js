import React from "react";

function Product(props) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-3">
      <div className="card text-center bg-light">
        <img src={props.image} className="car-img-top" />
        <div className="card-header">
          <b>R$: {props.product.price}</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
        </div>
        <div className="card-footer">
          <form className="d-block">
            <button className="btn nav-upd">Adicionar ao Carrinho</button>
          </form>
          <small className="text-success">
            {props.product.stock} unidades em estoque
          </small>
        </div>
      </div>
    </div>
  );
}

export default Product;
