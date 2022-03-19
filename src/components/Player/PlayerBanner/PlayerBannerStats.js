import React from "react";
import "./PlayerBannerStats.scss";
// import { useSelector } from "react-redux";

const BannerStats = () => {
  // const { playerStats, playerSeasonStats } = useSelector((store) => store.playerReducer);

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
    <div className="player-banner-stats-wrapper">
      <div className="player-banner-stats-container">
        <div className="player-banner-stat-upper-box">
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"PPG"}</div>
            <div className="player-banner-stat-content">
              {playerStats[0]?.PPG ? (playerStats[0]?.PPG / 2).toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"RPG"}</div>
            <div className="player-banner-stat-content">
              {playerStats[0]?.RPG ? (playerStats[0]?.RPG / 2).toFixed(1) : 0}
            </div>
          </div>
        </div>

        <div className="player-banner-stat-lower-box">
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"SPG"}</div>
            <div className="player-banner-stat-content">
              {playerStats[0]?.SPG ? (playerStats[0]?.SPG / 2).toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"BPG"}</div>
            <div className="player-banner-stat-content">
              {playerStats[0]?.BPG ? (playerStats[0]?.BPG / 2).toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"APG"}</div>
            <div className="player-banner-stat-content">
              {playerStats[0]?.APG ? (playerStats[0]?.APG / 2).toFixed(1) : 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerStats;
