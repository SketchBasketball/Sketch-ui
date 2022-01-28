import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import defaultHeaderMenu from "../../const/defaultHeaderMenu";
import "./Header.scss";
import logo from "../../logo/logo.png";
import MenuItem from "./MenuItem";

function Header() {
  let history = useHistory();
  let url = window.location.href
    .toString()
    .split(window.location.host)[1]
    .replace("/", "");
  const [currentPage, setCurrentPage] = useState(url);

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      setCurrentPage(location.pathname.split("/")[1]);
      console.log(location);
    });
  }, [history]);

  return (
    <div>
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
      {currentPage ? (
        <div className="BannerWrapper">
          <div className="Banner">
            <span>{currentPage}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
