import React from "react";
import "./PlayerBannerStats.scss";
import { useSelector } from "react-redux";

const BannerStats = () => {
  const { playerDetails } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-banner-stats-wrapper">
      <div className="player-banner-stats-container">
        <div className="player-banner-stat-upper-box">
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"PPG"}</div>
            <div className="player-banner-stat-content">
              {playerDetails?.PTS ? playerDetails?.PTS.toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"RPG"}</div>
            <div className="player-banner-stat-content">
              {playerDetails?.REB ? playerDetails?.REB.toFixed(1) : 0}
            </div>
          </div>
        </div>
        <div className="player-banner-stat-lower-box">
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"SPG"}</div>
            <div className="player-banner-stat-content">
              {playerDetails?.STL ? playerDetails?.STL.toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"BPG"}</div>
            <div className="player-banner-stat-content">
              {playerDetails?.BLK ? playerDetails?.BLK.toFixed(1) : 0}
            </div>
          </div>
          <div className="player-banner-stat-box">
            <div className="player-banner-stat-title">{"APG"}</div>
            <div className="player-banner-stat-content">
              {playerDetails?.AST ? playerDetails?.AST.toFixed(1) : 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerStats;
