import React from "react";
import "./ScheduleBox.scss";
import { useHistory } from "react-router";
import defaultLogo from "../logo/bball.png";
import TeamNameButton from "./Team/TeamNameButton";

function ScheduleBox({ item }) {
  const history = useHistory();
  const TeamNameButtonStyle = {
    color: "black",
    fontSize: "1rem",
    fontWeight: 600,
  };

  const scheduleClickHandler = (match_id) => {
    history.push(`/matches/${match_id}`);
  };

  return (
    <div
      className="match-box"
      onClick={() => scheduleClickHandler(item.match_id)}
    >
      <div className="match-box-header">
        <span className="match-box-header-item">{item.scheduled_at.date}</span>
        <span className="match-box-header-item">{item.scheduled_at.day}</span>
      </div>
      <div className="match-box-detail-wrapper">
        <div className="match-box-detail-header">{item.league_name}</div>
        <div className="match-box-detail-match-name">{item.match_name}</div>
        <div className="match-box-detail">
          <div className="team-wrapper">
            <img
              src={item.home_team_logo ? item.home_team_logo : defaultLogo}
              className="temp-icon"
            />
            <div className="team-title">
              {
                <TeamNameButton
                  ButtonStyle={TeamNameButtonStyle}
                  ButtonSize={"medium"}
                  TeamName={item.home_team_name}
                  TeamId={item.home_team_id}
                />
              }
            </div>
          </div>
          <div className="score-wrapper">
            <span>
              {item.home_team_score} : {item.away_team_score}
            </span>
          </div>
          <div className="team-wrapper">
            <img
              src={item.away_team_logo ? item.away_team_logo : defaultLogo}
              className="temp-icon"
            />
            <div className="team-title">
              {
                <TeamNameButton
                  ButtonStyle={TeamNameButtonStyle}
                  ButtonSize={"medium"}
                  TeamName={item.away_team_name}
                  TeamId={item.away_team_id}
                />
              }
            </div>
          </div>
        </div>
        <div className="match-box-venue-time">
          <span>
            {item.location} @ {item.scheduled_at.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBox;
