import React from "react";
import "./TeamHeader.scss";

const TeamHeader = (/*{ name, logo, stats }*/) => {
  return (
    <div className="team-header-container">
      <div className="team-header-logo">
        <div style={{ backgroundColor: "black" }}>{"logo ? logo : null"}</div>
      </div>
      <div className="team-header-info">
        <div className="team-header-name">{"Boston Celtics"}</div>
        <div
          className="team-header-record"
          style={{ fontSize: "70%", marginTop: "0.5rem" }}
        >
          {"23-22 | 10th in Eastern"}
        </div>
      </div>
      <div className="team-header-ranks">
        <div style={{ backgroundColor: "grey" }}>{"logo ? logo : null"}</div>
      </div>
    </div>
  );
};

export default TeamHeader;
