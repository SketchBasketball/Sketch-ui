import React from "react";
import "./TeamSchedule.scss";
import Loader from "react-loader-spinner";
import TeamScheduleItem from "./TeamScheduleItem";

const TeamSchedule = ({ title, games, isLoading }) => {
  return (
    <div className="schedule-bar-wrapper">
      <div className="schedule-title">
        <div className="schedule-title-wrapper">{title ? title : null}</div>
      </div>
      <div className="schedule-bar">
        {isLoading ? (
          <div className="schedule-bar-loader-wrapper">
            <Loader
              type="Oval"
              color="#ff5722"
              secondaryColor="#757575"
              width={40}
              height={40}
            />
          </div>
        ) : games?.length ? (
          games.map((item, index) => {
            return <TeamScheduleItem item={item} key={index} />;
          })
        ) : (
          <div className="no-content-div">TBA</div>
        )}
      </div>
    </div>
  );
};

export default TeamSchedule;
