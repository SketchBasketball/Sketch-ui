import React from "react";
import "./TeamScheduleItem.scss";
import { useHistory } from "react-router";

const TeamScheduleItem = ({ item }) => {
  const history = useHistory();

  const scheduleClickHandler = (match_id) => {
    history.push(`/matches/${match_id}`);
  };
  return (
    <div
      className="schedule-content"
      onClick={() => scheduleClickHandler(item.match_id)}
    >
      <div className="league-name">
        <div>{item.league_name}</div>
        <div>{item.match_type}</div>
      </div>

      <div className="team-info">
        <div className="team-name">{item.home_team_name}</div>
        <div>{item.home_team_score}</div>
      </div>
      <div className="team-info">
        <div className="team-name">{item.away_team_name}</div>
        <div>{item.away_team_score}</div>
      </div>
      <div className="match-etc">📍 {item.location}</div>
      <div className="match-etc">
        @ {item.scheduled_at.date} {item.scheduled_at.time}
      </div>
    </div>
  );
};

export default TeamScheduleItem;
