import React from "react";
import bball from "../../logo/bball.png";
import "./TeamHeader.scss";

const TeamHeader = ({ info, stats }) => {
  return (
    <div className="team-header-container">
      <div className="team-header-logo">
        <img src={bball} className="logo-img" alt="home-logo" />
        <div className="team-header-info">
          <div className="team-header-name">{info[0].team_name}</div>
          <div className="team-header-record">
            {info
              ? info[0].games +
                " - " +
                info[1].games +
                " | " +
                info[0].season_name +
                " " +
                info[0].league_name.replaceAll("-", " ")
              : null}
          </div>
        </div>
      </div>
      <div className="team-header-stats">
        <div className="team-ppg">
          <div className="team-ppg-title">{"PPG"}</div>
          <div className="team-ppg-stat">{stats[0].PTS_AVG}</div>
        </div>
        <div className="vl"></div>
        <div className="team-rpg">
          <div className="team-rpg-title">{"RPG"}</div>
          <div className="team-rpg-stat">{stats[0].REB_AVG}</div>
        </div>
        <div className="vl"></div>
        <div className="team-apg">
          <div className="team-apg-title">{"APG"}</div>
          <div className="team-apg-stat">{stats[0].AST_AVG}</div>
        </div>
        <div className="vl"></div>
        <div className="team-oppg">
          <div className="team-ppg-title">{"W/L"}</div>
          <div className="team-ppg-stat">
            {(info[0].games / (info[0].games + info[1].games)).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
