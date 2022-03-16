import React from "react";
import "./TeamStats.scss";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import {
  overallStatsDefaultHeader,
  winlossStatsDefaultHeader,
} from "../../const/teamDefaultHeader";

const TeamStats = () => {
  const { teamStats, teamWLStats } = useSelector((store) => store.teamReducer);

  return (
    <div className="team-stats-wrapper">
      <div className="overall-stats-container">
        <span>{teamStats ? "Team Statistics" : "No Team Selected"}</span>
        <DataGrid
          rows={teamStats ? teamStats : []}
          getRowId={(row) => row.team_id}
          columns={overallStatsDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={100}
          rowsPerPageOptions={[100]}
          hideFooter={true}
        />
      </div>
      <div className="winloss-stats-container">
        <DataGrid
          rows={teamWLStats ? teamWLStats : []}
          getRowId={(row) => row.title}
          columns={winlossStatsDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={100}
          rowsPerPageOptions={[100]}
          hideFooter={true}
        />
      </div>
    </div>
  );
};

export default TeamStats;
