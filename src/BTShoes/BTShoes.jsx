import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";

const BTShoes = () => {
  const [productDetail, setProductDetail] = useState(data[0]);

  const handleProDetail = (product) => {
    setProductDetail(product);
  };
  return (
    <div className="container">
      <h1 className="text-center display-9">BT SHOES</h1>
      <ProductList handleProDetail={handleProDetail} data={data} />
      {/* modal */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Chi tiết sản phẩm
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body text-left">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="img-fluid"
                      src={productDetail.image}
                      alt="hình ảnh"
                    />
                  </div>
                  <div className="col-8">
                    <p className="font-weight-bold">{productDetail.name}</p>
                    <p className="mt-3">{productDetail.description}</p>
                    <p className="font-weight-bold mt-3">
                      {productDetail.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTShoes;
