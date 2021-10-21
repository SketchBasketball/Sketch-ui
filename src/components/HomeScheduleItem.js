import React from "react";
import "./HomeScheduleItem.scss";
import { useHistory } from "react-router";

const HomeScheduleItem = ({ item }) => {
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
        <div>League</div>
        {/* <div>{item.match_type}</div> */}
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
        @ {item.scheduled_at.substr(0, 10)} {item.scheduled_at.substr(11, 5)}
      </div>
    </div>
  );
};

export default HomeScheduleItem;
