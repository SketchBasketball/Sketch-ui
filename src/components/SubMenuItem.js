import React from "react";
import "./SubMenuItem.scss";
import { NavLink } from "react-router-dom";

const SubMenuItem = (props) => {
  return (
    <NavLink
      className="league-menu-link"
      exact={props.exact ? props.exact : false}
      to={props.path}
      activeStyle={{
        color: "#FF5722",
        border: "#FF5722 solid 1px",
      }}
    >
      {props.name}
    </NavLink>
  );
};

export default SubMenuItem;
