import React from "react";
import "./ScheduleList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulesInPages } from "../store/actions/schedule";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import noContent from "../logo/no_content.png";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

const ScheduleList = () => {
  const dispatch = useDispatch();
  const { pages, schedules, isLoading, isEndOfPage } = useSelector(
    (store) => store.scheduleReducer
  );
  const { league } = useParams();
  const history = useHistory();

  const scheduleClickHandler = (match_id) => {
    history.push(`/matches/${match_id}`);
  };

  useEffect(() => {
    dispatch(getSchedulesInPages(league, 0));
  }, [league]);

  function handleNavButtonClick(pages) {
    dispatch(getSchedulesInPages(league, pages));
  }

  return (
    <div className="schedule-list-wrapper">
      <div className="schedule-nav-bar">
        <div
          className="nav-button"
          onClick={() => handleNavButtonClick(pages - 1)}
        >
          {"< Prev"}
        </div>
        <div className="nav-button" onClick={() => handleNavButtonClick(0)}>
          {league ? league : "Summary"}
        </div>
        <div
          className="nav-button"
          onClick={() => handleNavButtonClick(pages + 1)}
        >
          {"Next >"}
        </div>
      </div>
      {isLoading ? (
        <div className="schedule-content-loader-wrapper">
          <Loader type="Oval" color="#ff5722" secondaryColor="#757575" />
        </div>
      ) : isEndOfPage ? (
        <div className="end-page">
          <img src={noContent} className="no-content" alt="no-content" />
        </div>
      ) : null}
      <div className="schedule-list-grid">
        {schedules.map((item, index) => {
          return (
            <div
              className="match-box"
              key={index}
              onClick={() => scheduleClickHandler(item.match_id)}
            >
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
