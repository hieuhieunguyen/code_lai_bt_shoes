import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./style.css";
import Footer from "./Footer";

const BTThucHanhLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default BTThucHanhLayout;
