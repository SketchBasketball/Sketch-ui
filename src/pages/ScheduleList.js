import React from "react";
import "./ScheduleList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulesInPages } from "../store/actions/schedule";
import { useEffect } from "react";

const ScheduleList = () => {
  const dispatch = useDispatch();
  const { pages, schedules } = useSelector((store) => store.scheduleReducer);
  useEffect(() => {
    dispatch(getSchedulesInPages(0));
  }, []);

  function handleNavButtonClick(pages) {
    dispatch(getSchedulesInPages(pages));
  }

  return (
    <div className="schedule-list-wrapper">
      <div className="schedule-bav-bar">
        <div
          className="nav-button"
          onClick={() => handleNavButtonClick(pages - 1)}
        >
          {"< Prev"}
        </div>
        <div className="nav-button" onClick={() => handleNavButtonClick(0)}>
          Schedule
        </div>
        <div
          className="nav-button"
          onClick={() => handleNavButtonClick(pages + 1)}
        >
          {"Next >"}
        </div>
      </div>
      <div className="schedule-list-grid">
        {schedules.map((item, index) => {
          return (
            <div className="match-box" key={index}>
              <div className="match-box-header">
                <span className="match-box-header-item">
                  {item.scheduled_at.substr(0, 10)}
                </span>
                <span className="match-box-header-item">THU</span>
              </div>
              <div className="match-box-detail-wrapper">
                <div className="match-box-detail-header">
                  {item.league_name}
                </div>
                <div className="match-box-detail">
                  <div className="team-wrapper">
                    <div className="temp-icon-a"></div>
                    <div className="team-title">{item.home_team_name}</div>
                  </div>
                  <div className="score-wrapper">
                    <span>
                      {item.home_team_score} : {item.away_team_score}
                    </span>
                  </div>
                  <div className="team-wrapper">
                    <div className="temp-icon-b"></div>
                    <div className="team-title">{item.away_team_name}</div>
                  </div>
                </div>
                <div className="match-box-venue-time">
                  <span>
                    {item.location} @ {item.scheduled_at.substr(11, 5)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleList;
