import React from "react";
import "./TeamAwards.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  teamAchievementsDefaultHeader,
  teamAwardsDefaultHeader,
} from "../../const/teamDefaultHeader";

const TeamAwards = ({ achievements, awards }) => {
  const achievementGridTitle = "Achievements";
  const awardGridTitle = "Individual Awards";

  return (
    <div className="team-awards-wrapper">
      <div className="achievements-container">
        <span>{achievements ? achievementGridTitle : "No Team Selected"}</span>
        <DataGrid
          rows={achievements && achievements}
          getRowId={(row) => row.achievement_id}
          columns={teamAchievementsDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={100}
          rowsPerPageOptions={[100]}
          hideFooter={true}
        />
      </div>
      <div className="awards-container">
        <span>{awards ? awardGridTitle : "No Team Selected"}</span>
        <DataGrid
          rows={awards && awards}
          getRowId={(row) => row.award_id}
          columns={teamAwardsDefaultHeader}
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

export default TeamAwards;
