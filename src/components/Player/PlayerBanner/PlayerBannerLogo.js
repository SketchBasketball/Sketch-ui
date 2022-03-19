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
      <div className="player-banner-team-name">
        <div>{playerStats[0]?.name?.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default PlayerBannerLogo;
