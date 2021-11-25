import React from "react";
import { useHistory } from "react-router";
import defaultHeaderMenu from "../../const/defaultHeaderMenu";
import "./Header.scss";
import logo from "../../logo/logo.png";
import MenuItem from "./MenuItem";

function Header() {
  let history = useHistory();

  return (
    <div className="HeaderWrapper">
      <div className="Header">
        <div
          className="logo-wrapper"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
        <MenuItem key="home" title="Home" path="/" exact={true} />
        {defaultHeaderMenu.map((item, index) => {
          return <MenuItem key={index} title={item.title} path={item.path} />;
        })}
      </div>
    </div>
  );
}

export default Header;
