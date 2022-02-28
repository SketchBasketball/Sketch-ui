import React from "react";
import "./TeamAllTime.scss";
import { useSelector } from "react-redux";

const TeamAllTime = () => {
  const { allTimeHighs } = useSelector((store) => store.teamReducer);
  console.log(allTimeHighs);

  return (
    <div className="team-alltime-wrapper">
      <div className="team-alltime-title">{"All Time Records"}</div>
      <div className="team-alltime-records">
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs.PTS}</div>
          <div className="single-record-name">PTS</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs["3PM"]}</div>
          <div className="single-record-name">3PM</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs.REB}</div>
          <div className="single-record-name">REB</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs.AST}</div>
          <div className="single-record-name">AST</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs.STL}</div>
          <div className="single-record-name">STL</div>
        </div>
        <div className="single-record">
          <div className="single-record-stat">{allTimeHighs.BLK}</div>
          <div className="single-record-name">BLK</div>
        </div>
      </div>
    </div>
  );
};

export default TeamAllTime;
