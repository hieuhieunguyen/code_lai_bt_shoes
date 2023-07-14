import React from "react";

const Item = ({ item, handleProDetail }) => {
  return (
    <div className="col-4">
      <div className="card">
        <img src={item.image} alt="hình ảnh" />
        <div className="card-body text-left">
          <p className="font-weight-bold">{item.name}</p>
          <p className="mt-3 mb-0">${item.price}</p>
          <button className="btn btn-dark">add to card</button>
          <button
            onClick={() => {
              handleProDetail(item);
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-outline-success ml-3"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
