import React from "react";
import "./TeamRoster.scss";
import { DataGrid } from "@mui/x-data-grid";
import { teamRosterDefaultHeader } from "../../const/teamDefaultHeader";

const TeamRoster = ({ roster }) => {
  const gridTitle = " Roster - " + roster[0].season_name;

  return (
    <div className="team-roster-wrapper">
      <div className="team-roster-container">
        <span>{roster ? gridTitle : "No Team Selected"}</span>
        <DataGrid
          rows={roster ? roster : []}
          columns={teamRosterDefaultHeader}
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

export default TeamRoster;
