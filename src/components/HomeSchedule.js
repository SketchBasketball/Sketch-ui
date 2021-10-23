import React from "react";
import "./HomeSchedule.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMainSchedules } from "../store/actions/mainSchedule";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import HomeScheduleItem from "../components/HomeScheduleItem";

const HomeSchedule = () => {
  const dispatch = useDispatch();
  const { schedules, isLoading, isError } = useSelector(
    (store) => store.mainScheduleReducer
  );

  useEffect(() => {
    dispatch(getMainSchedules());
  }, []);
  return (
    <div className="schedule-bar-wrapper">
      <div className="schedule-title">Upcoming Matches</div>
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
        ) : isError ? (
          <div className="schedule-bar-loader-wrapper">
            <span>Error: please try again</span>
          </div>
        ) : schedules.length ? (
          schedules.map((item, index) => {
            return <HomeScheduleItem item={item} key={index} />;
          })
        ) : (
          <div className="no-content-div">no schedules</div>
        )}
      </div>
    </div>
  );
};

export default HomeSchedule;
