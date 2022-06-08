import React from "react";
import teamLogo from "../../../logo/sketch_logo2.png";
import "./BannerLogo.scss";
import { useSelector } from "react-redux";

const BannerLogo = () => {
  const { teamStats, teamInfo } = useSelector((store) => store.teamReducer);

  return (
    <div className="banner-logo-container">
      <div className="banner-logo">
        <img
          src={teamInfo?.logo ? teamInfo?.logo : teamLogo}
          className="logo"
        />
      </div>
      <div className="banner-team-name">
        <div>{teamStats[0]?.team_name?.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default BannerLogo;
