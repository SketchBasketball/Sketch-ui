import React from "react";
import "./PlayerCurrentSeasonAvg.scss";
import { useSelector } from "react-redux";

const PlayerCurrentSeasonAvg = () => {
  const { playerCurrentAVGs } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-current-season-avg-wrapper">
      <div className="player-current-season-avg-title">{"Current Season"}</div>
      <div className="player-current-season-avg-value">
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.PTS ? playerCurrentAVGs?.PTS.toFixed(1) : 0}
          </div>
          <div className="player-current-season-single-avg-name">Points</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.["3PM"]
              ? playerCurrentAVGs?.["3PM"].toFixed(1)
              : 0}
          </div>
          <div className="player-current-season-single-avg-name">3PM</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.REB ? playerCurrentAVGs?.REB.toFixed(1) : 0}
          </div>
          <div className="player-current-season-single-avg-name">Rebound</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.AST ? playerCurrentAVGs?.AST.toFixed(1) : 0}
          </div>
          <div className="player-current-season-single-avg-name">Assist</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.STL ? playerCurrentAVGs?.STL.toFixed(1) : 0}
          </div>
          <div className="player-current-season-single-avg-name">Steal</div>
        </div>
        <div className="player-current-season-single-avg">
          <div className="player-current-season-single-avg-value">
            {playerCurrentAVGs?.BLK ? playerCurrentAVGs?.BLK.toFixed(1) : 0}
          </div>
          <div className="player-current-season-single-avg-name">Block</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCurrentSeasonAvg;
