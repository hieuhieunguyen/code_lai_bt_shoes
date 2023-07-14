import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="d-flex justify-content-between container">
        <h1 className="header-heading">Start Boostrap</h1>
        <ul className="d-flex header-list">
          <li className="pl-2 pr-2">Home</li>
          <li className="pl-2 pr-2">About</li>
          <li className="pl-2 pr-2">Service</li>
          <li className="pl-2 pr-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
