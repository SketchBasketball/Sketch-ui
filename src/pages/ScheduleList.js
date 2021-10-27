import React from "react";
import "./ScheduleList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulesInPages } from "../store/actions/schedule";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import noContent from "../logo/no_content.png";
import { useParams, Link, useLocation } from "react-router-dom";
import ScheduleBox from "../components/ScheduleBox";

const ScheduleList = () => {
  const dispatch = useDispatch();
  const { pages, schedules, isLoading, isEndOfPage, hasPrev, hasNext } =
    useSelector((store) => store.scheduleReducer);
  const { league } = useParams();
  const location = useLocation();
  const pageNum = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    dispatch(getSchedulesInPages(league, pageNum ? +pageNum : 0));
  }, [league, pageNum]);

  return (
    <div className="schedule-list-wrapper">
      <div className="schedule-nav-bar">
        <Link
          className={hasPrev ? "nav-button" : "nav-button-disabled"}
          to={`${location.pathname}?page=${pages - 1}`}
        >
          {"< Prev"}
        </Link>
        <Link className="nav-button" to={`${location.pathname}?page=0`}>
          {league ? league : "Summary"}
        </Link>
        <Link
          className={hasNext ? "nav-button" : "nav-button-disabled"}
          to={`${location.pathname}?page=${pages + 1}`}
        >
          {"Next >"}
        </Link>
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
          return <ScheduleBox key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ScheduleList;
