import React from "react";
import "./BannerStats.scss";
import { useSelector } from "react-redux";

const BannerStats = () => {
  const { teamDetails, wlDetails } = useSelector((store) => store.teamReducer);

  return (
    <div className="banner-stats-wrapper">
      <div className="banner-stats-title">
        <div className="banner-division">{teamDetails[0]?.league_fullname}</div>
        <div className="banner-season">{" | "}</div>
        <div className="banner-season">{teamDetails[0]?.season_name}</div>
      </div>
      <div className="banner-stats-container">
        <div className="banner-score">
          <div>
            <div className="banner-score-stat">{wlDetails[0]?.games}</div>
            <div className="banner-score-title">{"WIN"}</div>
          </div>
          <div>
            <div className="banner-score-stat">{" - "}</div>
          </div>
          <div>
            <div className="banner-score-stat">{wlDetails[1]?.games}</div>
            <div className="banner-score-title">{"LOSS"}</div>
          </div>
        </div>
        <div className="banner-stats-details">
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"PPG"}</div>
            <div className="banner-stat-content">
              {((wlDetails[0]?.PTS_AVG + wlDetails[1]?.PTS_AVG) / 2).toFixed(1)}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"RPG"}</div>
            <div className="banner-stat-content">
              {((wlDetails[0]?.REB_AVG + wlDetails[1]?.REB_AVG) / 2).toFixed(1)}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"APG"}</div>
            <div className="banner-stat-content">
              {((wlDetails[0]?.AST_AVG + wlDetails[1]?.AST_AVG) / 2).toFixed(1)}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"PF"}</div>
            <div className="banner-stat-content">
              {((wlDetails[0]?.PF_AVG + wlDetails[1]?.PF_AVG) / 2).toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerStats;
