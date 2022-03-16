import React from "react";
import "./TeamBanner.scss";
import BannerLogo from "./TeamBanner/BannerLogo";
import BannerStats from "./TeamBanner/BannerStats";
import BannerStaff from "./TeamBanner/BannerStaff";
import BannerBadges from "../Team/TeamBanner/BannerBadges";

const TeamBanner = () => {
  return (
    <div className="team-banner-wrapper">
      <div className="team-banner-container">
        <div className="team-banner-top-wrapper">
          <div className="team-banner-top-container">
            <BannerLogo />
            <BannerStats />
          </div>
        </div>
        <div className="team-banner-bottom-wrapper">
          <div className="team-banner-bottom-container">
            <BannerStaff />
            <BannerBadges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
