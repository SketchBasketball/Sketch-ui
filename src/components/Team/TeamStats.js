import React from "react";
import "./TeamStats.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  overallStatsDefaultHeader,
  winlossStatsDefaultHeader,
} from "../../const/teamDefaultHeader";

const TeamStats = ({ stats, wlstats }) => {
  const gridTitle = "Team Statistics";

  console.log("stats", stats);

  return (
    <div className="team-stats-wrapper">
      <div className="overall-stats-container">
        <span>{stats ? gridTitle : "No Team Selected"}</span>
        <DataGrid
          rows={stats && stats}
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
          rows={wlstats ? wlstats : []}
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
