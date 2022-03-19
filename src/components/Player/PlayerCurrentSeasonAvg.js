import React from "react";
import "./PlayerCurrentSeasonAvg.scss";
// import { useSelector } from "react-redux";
import { playerCurrentSeasonAvgStats } from "../Player/PlayerAPIExample";

const PlayerCurrentSeasonAvg = () => {
  // const { teamAllTimeHigh } = useSelector((store) => store.teamReducer);

  return (
    <div className="player-current-season-avg-wrapper">
      <div className="player-current-season-avg-title">
        {"Current Season" +
          " - " +
          playerCurrentSeasonAvgStats[0]?.league_season_name}
      </div>
      <div className="player-current-season-avg-value">
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.PTS_AVG}
          </div>
          <div className="player-current-season-single-avg-name">Points</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.["3PM_AVG"]}
          </div>
          <div className="player-current-season-single-avg-name">3PM</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.REB_AVG}
          </div>
          <div className="player-current-season-single-avg-name">Rebound</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.AST_AVG}
          </div>
          <div className="player-current-season-single-avg-name">Assist</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.STL_AVG}
          </div>
          <div className="player-current-season-single-avg-name">Steal</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentSeasonAvgStats[0]?.BLK_AVG}
          </div>
          <div className="player-current-season-single-avg-name">Block</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCurrentSeasonAvg;
