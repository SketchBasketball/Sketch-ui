import React from "react";
import "./ScheduleBox.scss";
import { useHistory } from "react-router";
import defaultLogo from "../logo/bball.png";

function ScheduleBox({ item }) {
  const history = useHistory();

  const scheduleClickHandler = (match_id) => {
    history.push(`/matches/${match_id}`);
  };

  const gameDate = item.scheduled_at.date.replace(/\./g, "");
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  return (
    <div>
      <div
        className="match-box"
        onClick={() => scheduleClickHandler(item.match_id)}
        style={{
          backgroundColor: currentDate > gameDate ? "#D3D3D3" : "#ffffff",
        }}
      >
        <div className="match-box-header">
          <span className="match-box-header-item">{item.match_name}</span>
          <span className="match-box-header-item">
            {item.scheduled_at.date + " " + item.scheduled_at.day}
          </span>
        </div>
        <div className="match-box-detail-wrapper">
          <div className="match-box-detail-header">{item.league_name}</div>
          <div className="match-box-detail">
            <div className="team-wrapper">
              <img
                src={item.home_team_logo ? item.home_team_logo : defaultLogo}
                className="temp-icon"
              />
              <div className="team-title">{item.home_team_name}</div>
            </div>
            <div
              className="score-wrapper"
              style={{
                fontSize:
                  item.home_team_score.toString().length > 2 ||
                  item.away_team_score.toString().length > 2
                    ? "1.2rem"
                    : "1.5rem",
              }}
            >
              <span>
                {item.home_team_score} : {item.away_team_score}
              </span>
            </div>
            <div className="team-wrapper">
              <img
                src={item.away_team_logo ? item.away_team_logo : defaultLogo}
                className="temp-icon"
              />
              <div className="team-title">{item.away_team_name}</div>
            </div>
          </div>
          <div className="match-box-venue-time">
            <span>
              {item.location} @ {item.scheduled_at.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBox;
