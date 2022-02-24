import React from "react";
import teamLogo from "../../../logo/sketch_logo2.png";
import "./BannerLogo.scss";
import { useSelector } from "react-redux";

const BannerLogo = () => {
  const { teamDetails } = useSelector((store) => store.teamReducer);

  return (
    <div className="banner-logo-container">
      <div className="banner-logo">
        <img src={teamLogo} className="logo" />
      </div>
      <div className="banner-team-name">
        <div>{teamDetails[0]?.team_name?.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default BannerLogo;
