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
        color: "#171e4f",
        fontWeight: 700,
        borderBottom: "#171e4f solid ",
      }}
    >
      {props.name}
    </NavLink>
  );
};

export default SubMenuItem;
