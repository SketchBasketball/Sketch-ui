import React from "react";
import "./PlayerCareerHigh.scss";
import { useSelector } from "react-redux";

const PlayerCareerHigh = () => {
  const { playerAllTimeHighs } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-careerhigh-wrapper">
      <div className="player-careerhigh-title">{"Career High"}</div>
      <div className="player-careerhigh-records">
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.PTS ? playerAllTimeHighs?.PTS : 0}
          </div>
          <div className="player-single-record-name">Points</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.["3PM"] ? playerAllTimeHighs?.["3PM"] : 0}
          </div>
          <div className="player-single-record-name">3PM</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.REB ? playerAllTimeHighs?.REB : 0}
          </div>
          <div className="player-single-record-name">Rebound</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.AST ? playerAllTimeHighs?.AST : 0}
          </div>
          <div className="player-single-record-name">Assist</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.STL ? playerAllTimeHighs?.STL : 0}
          </div>
          <div className="player-single-record-name">Steal</div>
        </div>
        <div className="player-single-record">
          <div className="player-single-record-stat">
            {playerAllTimeHighs?.BLK ? playerAllTimeHighs?.BLK : 0}
          </div>
          <div className="player-single-record-name">Block</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCareerHigh;
