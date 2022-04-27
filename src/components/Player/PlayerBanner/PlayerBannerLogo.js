import React from "react";
import defaultPlayerPhoto from "../../../logo/default-player.png";
import "./PlayerBannerLogo.scss";
import { useSelector } from "react-redux";

const PlayerBannerLogo = () => {
  const { playerDetails } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-banner-logo-container">
      <div className="player-banner-logo">
        <img
          src={
            playerDetails?.profile_photo != null
              ? playerDetails?.profile_photo
              : defaultPlayerPhoto
          }
          className="player-logo"
        />
      </div>
      <div className="player-banner-intro">
        <div className="player-banner-intro-line">
          {playerDetails?.quote ? playerDetails.quote : null}
        </div>
        <div className="player-banner-intro-name">
          {playerDetails?.name
            ? playerDetails?.name?.toUpperCase()
            : "No Player Selected"}
        </div>
        <div className="player-banner-intro-tags">
          {playerDetails.keywords == []
            ? playerDetails?.keywords?.map((keyword, index) => {
                <div
                  className="player-banner-intro-single-tag"
                  key={index}
                >{`#${keyword}`}</div>;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default PlayerBannerLogo;
