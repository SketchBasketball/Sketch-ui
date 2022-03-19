import React from "react";
import "./PlayerBannerInfo.scss";

const PlayerBannerInfo = () => {
  const playerStats = [
    {
      name: "Eric Jee Won Han",
      profile_photo: null,
      age: 21,
      birthdate: "Jan 21st, 1999",
      weight: 90,
      height: 195,
      PPG: 15.7,
      RPG: 14.8,
      SPG: 1.9,
      BPG: 5.7,
      APG: 11.7,
      gp: 5,
      potg: 3,
    },
  ];

  return (
    <div className="player-banner-staff-container">
      <div className="player-banner-upper-container">
        <div className="player-banner-upper-box">
          <div className="player-banner-upper-container-title">
            {"GAMES PLAYED"}
          </div>
          <div className="player-banner-upper-container-value">
            {playerStats[0]?.gp}
          </div>
        </div>
        <div className="player-banner-upper-box">
          <div className="player-banner-upper-container-title">
            {"PLAYER OF THE GAME"}
          </div>
          <div className="player-banner-upper-container-value">
            {playerStats[0]?.potg}
          </div>
        </div>
      </div>
      <div className="player-banner-lower-container">
        <div className="player-banner-lower-box">
          <div className="player-banner-lower-container-title">{"AGE"}</div>
          <div className="player-banner-lower-container-value">
            {playerStats[0]?.age}
          </div>
        </div>
        <div className="player-banner-lower-box">
          <div className="player-banner-lower-container-title">{"HEIGHT"}</div>
          <div className="player-banner-lower-container-value">
            {playerStats[0]?.height}
          </div>
        </div>
        <div className="player-banner-lower-box">
          <div className="player-banner-lower-container-title">
            {"BIRTHDATE"}
          </div>
          <div className="player-banner-lower-container-value">
            {playerStats[0]?.birthdate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBannerInfo;
