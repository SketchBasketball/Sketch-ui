import React from "react";
import "./Footer.scss";
import fbLogo from "../logo/facebook.png";
import igLogo from "../logo/insta.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>Copyright © 2021 SKETCH Basketball. All rights reserved.</span>
          <span>
            No portion of sketchbball.com may be duplicated, redistributed or
            manipulated in any form.
          </span>
          <span>
            By accessing any information beyond this page, you agree to abide by
            the sketchbball.com.
          </span>
          <span>Hong Kong Web Design by BobbyL</span>
        </div>
        <div className="footer-content-right">
          <a
            href="https://www.instagram.com/sketchbball/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={igLogo} className="ig-logo" alt="ig-logo" />
          </a>
          <a
            href="https://www.facebook.com/sketchballcompetition/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fbLogo} className="fb-logo" alt="fb-logo" />
          </a>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Footer;
