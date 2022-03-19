import React from "react";
import "./PlayerBanner.scss";
import PlayerBannerLogo from "./PlayerBanner/PlayerBannerLogo";
import PlayerBannerStats from "./PlayerBanner/PlayerBannerStats";
import PlayerBannerInfo from "./PlayerBanner/PlayerBannerInfo";
import PlayerBannerBadges from "./PlayerBanner/PlayerBannerBadges";

const PlayerBanner = () => {
  return (
    <div className="player-banner-wrapper">
      <div className="player-banner-container">
        <div className="player-banner-top-wrapper">
          <div className="player-banner-top-container">
            <PlayerBannerLogo />
            <PlayerBannerStats />
          </div>
        </div>
        <div className="player-banner-bottom-wrapper">
          <div className="player-banner-bottom-container">
            <PlayerBannerInfo />
            <PlayerBannerBadges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBanner;
