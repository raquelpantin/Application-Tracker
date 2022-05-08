import "./PageHeader.scss";
import React from "react";
import logo from "../../assets/icons8-tick-box.svg";

const PageHeader = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={logo} />
      <h1 className="header-title">My Application Tracker</h1>
    </div>
  );
};

export default PageHeader;
