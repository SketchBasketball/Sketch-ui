import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>
            Copyright © 2021 SKETCH Basketball League. All rights reserved.
          </span>
          <span>
            No portion of aicbl.com may be duplicated, redistributed or
            manipulated in any form.
          </span>
          <span>
            By accessing any information beyond this page, you agree to abide by
            the sketchbball.com.
          </span>
          <span>Hong Kong Web Design by BobbyL</span>
        </div>
        <div className="footer-content-right">
          <span>Insta icon</span>
          <span>FB icon</span>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Footer;
