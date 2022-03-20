import React from "react";
import defaultPlayerPhoto from "../../../logo/default-player.png";
import "./PlayerBannerLogo.scss";
// import { useSelector } from "react-redux";

import { playerStats } from "../PlayerAPIExample";

const PlayerBannerLogo = () => {
  // const { playerStats } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-banner-logo-container">
      <div className="player-banner-logo">
        <img
          src={
            playerStats[0]?.profile_photo != null
              ? playerStats[0]?.profile_photo
              : defaultPlayerPhoto
          }
          className="player-logo"
        />
      </div>
      <div className="player-banner-intro">
        <div className="player-banner-intro-line">
          {"To Achieve, You Must Believe"}
        </div>
        <div className="player-banner-intro-name">
          {playerStats[0]?.name?.toUpperCase()}
        </div>
        <div className="player-banner-intro-tags">
          <div className="player-banner-intro-single-tag">{"#6X_MVP"}</div>
          <div className="player-banner-intro-single-tag">{"#50X_POTG"}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBannerLogo;
