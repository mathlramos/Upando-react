import React from "react";

function Pagination() {
  return (
    <div className="row pb-4">
      <div className="col-12">
        <div className="col-12 col-md-7">
          <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
            <nav className="d-inline-block">
              <ul className="pagination pagination-sm my-0">
                <li className="page item">
                  <button className="page-link">
                    <h4>1</h4>
                  </button>
                </li>
                <li className="page item">
                  <button className="page-link">
                    <h4>2</h4>
                  </button>
                </li>
                <li className="page item">
                  <button className="page-link">
                    <h4>3</h4>
                  </button>
                </li>
                <li className="page item">
                  <button className="page-link">
                    <h4>4</h4>
                  </button>
                </li>
                <li className="page item">
                  <button className="page-link">
                    <h4>5</h4>
                  </button>
                </li>
                <li className="page item">
                  <button className="page-link">
                    <h4>6</h4>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
