import React from "react";
import "./TeamAllTime.scss";
import { useSelector } from "react-redux";

const TeamAllTime = () => {
  const { teamAllTimeHigh } = useSelector((store) => store.teamReducer);

  return (
    <div className="team-alltime-wrapper">
      <div className="team-alltime-title">{"All Time Records"}</div>
      <div className="team-alltime-records">
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh.PTS}</div>
          <div className="single-record-name">Points</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh["3PM"]}</div>
          <div className="single-record-name">3PM</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh.REB}</div>
          <div className="single-record-name">Rebound</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh.AST}</div>
          <div className="single-record-name">Assist</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh.STL}</div>
          <div className="single-record-name">Steal</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{teamAllTimeHigh.BLK}</div>
          <div className="single-record-name">Block</div>
        </div>
      </div>
    </div>
  );
};

export default TeamAllTime;
