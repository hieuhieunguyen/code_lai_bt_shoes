import React from "react";
import Item from "./Item";

const ProductList = ({ data, handleProDetail }) => {
  return (
    <div className="row mt-4">
      {data.map((item) => (
        <Item handleProDetail={handleProDetail} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
