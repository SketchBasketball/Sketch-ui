import React from "react";
import "./BannerStats.scss";
import { useSelector } from "react-redux";

const BannerStats = () => {
  const { teamStats, teamWLStats } = useSelector((store) => store.teamReducer);

  return (
    <div className="banner-stats-wrapper">
      <div className="banner-stats-title">
        <div className="banner-division">{teamStats[0]?.league_name}</div>
        <div className="banner-season">{" | "}</div>
        <div className="banner-season">{teamStats[0]?.season_name}</div>
      </div>
      <div className="banner-stats-container">
        <div className="banner-score">
          <div>
            <div className="banner-score-stat">
              {teamWLStats[0]?.games ? teamWLStats[0]?.games : 0}
            </div>
            <div className="banner-score-title">{"WIN"}</div>
          </div>
          <div>
            <div className="banner-score-stat">{" - "}</div>
          </div>
          <div>
            <div className="banner-score-stat">
              {teamWLStats[1]?.games ? teamWLStats[1]?.games : 0}
            </div>
            <div className="banner-score-title">{"LOSS"}</div>
          </div>
        </div>
        <div className="banner-stats-details">
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"PPG"}</div>
            <div className="banner-stat-content">
              {teamWLStats[0]?.PTS_AVG
                ? (
                    (teamWLStats[0]?.PTS_AVG + teamWLStats[1]?.PTS_AVG) /
                    2
                  ).toFixed(1)
                : 0}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"RPG"}</div>
            <div className="banner-stat-content">
              {teamWLStats[0]?.REB_AVG
                ? (
                    (teamWLStats[0]?.REB_AVG + teamWLStats[1]?.REB_AVG) /
                    2
                  ).toFixed(1)
                : 0}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"APG"}</div>
            <div className="banner-stat-content">
              {teamWLStats[0]?.AST_AVG
                ? (
                    (teamWLStats[0]?.AST_AVG + teamWLStats[1]?.AST_AVG) /
                    2
                  ).toFixed(1)
                : 0}
            </div>
          </div>
          <div className="banner-stat-box">
            <div className="banner-stat-title">{"REB"}</div>
            <div className="banner-stat-content">
              {teamWLStats[0]?.REB_AVG
                ? (
                    (teamWLStats[0]?.REB_AVG + teamWLStats[1]?.REB_AVG) /
                    2
                  ).toFixed(1)
                : 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerStats;
