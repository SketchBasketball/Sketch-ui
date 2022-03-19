import React from "react";
import "./PlayerCareerHigh.scss";
// import { useSelector } from "react-redux";
import { playerCareerHighStats } from "../Player/PlayerAPIExample";

const PlayerCareerHigh = () => {
  // const { playerCareerHighStats } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-careerhigh-wrapper">
      <div className="player-careerhigh-title">{"Career High"}</div>
      <div className="player-careerhigh-records">
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.PTS}
          </div>
          <div className="player-single-record-name">Points</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.["3PM"]}
          </div>
          <div className="player-single-record-name">3PM</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.REB}
          </div>
          <div className="player-single-record-name">Rebound</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.AST}
          </div>
          <div className="player-single-record-name">Assist</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.STL}
          </div>
          <div className="player-single-record-name">Steal</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerCareerHighStats[0]?.BLK}
          </div>
          <div className="player-single-record-name">Block</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCareerHigh;
