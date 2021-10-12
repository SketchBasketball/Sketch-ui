import React from "react";
import "./Error.scss";
import errorPage from "../logo/error_page.png";

const Error = () => {
  return (
    <>
      <img src={errorPage} className="error-page" alt="error-page" />
    </>
  );
};

export default Error;
