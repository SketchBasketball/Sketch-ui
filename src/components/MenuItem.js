import React from "react";
import "./MenuItem.scss";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  return (
    <NavLink
      className="menu-item"
      to={props.path}
      exact={props.exact ? props.exact : false}
      activeStyle={{
        color: "#FF5722",
      }}
    >
      {props.title}
    </NavLink>
  );
}

export default MenuItem;
