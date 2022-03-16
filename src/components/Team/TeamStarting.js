import React from "react";
import "./TeamStarting.scss";

const TeamStarting = () => {
  return (
    <div className="team-starting-wrapper">
      <div className="team-starting-title">STARTING 5</div>
      <div className="team-starting-five">
        <div className="starting-player">
          <div className="team-starting-player">-</div>
          <div className="team-starting-position">G</div>
        </div>
        <div className="starting-player">
          <div className="team-starting-player">-</div>
          <div className="team-starting-position">G</div>
        </div>
        <div className="starting-player">
          <div className="team-starting-player">-</div>
          <div className="team-starting-position">F</div>
        </div>
        <div className="starting-player">
          <div className="team-starting-player">-</div>
          <div className="team-starting-position">F</div>
        </div>
        <div className="starting-player">
          <div className="team-starting-player">-</div>
          <div className="team-starting-position">C</div>
        </div>
      </div>
    </div>
  );
};

export default TeamStarting;
