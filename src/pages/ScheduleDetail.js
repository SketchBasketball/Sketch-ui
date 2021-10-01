import React from "react";
import "./ScheduleDetail.scss";
import { useParams } from "react-router-dom";

const ScheduleDetail = () => {
  const { league } = useParams();

  return (
    <div className="schedule-detail-wrapper">
      Schedule Detail View - {league}
    </div>
  );
};

export default ScheduleDetail;
