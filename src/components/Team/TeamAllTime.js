import React from "react";
import "./TeamAllTime.scss";
import { useSelector } from "react-redux";

const TeamAllTime = () => {
  const { allTimeHigh } = useSelector((store) => store.teamReducer);

  return (
    <div className="team-alltime-wrapper">
      <div className="team-alltime-title">{"All Time Records"}</div>
      <div className="team-alltime-records">
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh.PTS}</div>
          <div className="single-record-name">PTS</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh["3PM"]}</div>
          <div className="single-record-name">3PM</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh.REB}</div>
          <div className="single-record-name">REB</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh.AST}</div>
          <div className="single-record-name">AST</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh.STL}</div>
          <div className="single-record-name">STL</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHigh.BLK}</div>
          <div className="single-record-name">BLK</div>
        </div>
      </div>
    </div>
  );
};

export default TeamAllTime;
