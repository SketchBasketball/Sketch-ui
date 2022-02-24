import React from "react";
import bball from "../../../logo/bball.png";
import "./BannerLogo.scss";

const BannerLogo = ({ teamDetails }) => {
  console.log("stats/teamDetails", teamDetails);

  const teamName = teamDetails[0].team_name.toUpperCase();

  return (
    <div
      className="banner-logo-container"
      style={{ borderStyle: "solid", borderColor: "blue" }}
    >
      <div
        className="banner-logo"
        style={{ borderStyle: "solid", borderColor: "purple" }}
      >
        <img src={bball} className="logo" />
      </div>
      <div
        className="banner-team-name"
        style={{ borderStyle: "solid", borderColor: "purple" }}
      >
        <div>{teamName}</div>
      </div>
    </div>
  );
};

export default BannerLogo;
