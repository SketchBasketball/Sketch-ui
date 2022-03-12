import React from "react";
import "./TeamRoster.scss";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { teamRosterDefaultHeader } from "../../const/teamDefaultHeader";

const TeamRoster = () => {
  const { teamPlayerStats } = useSelector((store) => store.teamReducer);

  return (
    <div className="team-roster-wrapper">
      <div className="team-roster-container">
        <span>
          {teamPlayerStats
            ? teamPlayerStats[0]?.team_name +
              " Roster - " +
              teamPlayerStats[0]?.league_season_name
            : "No Team Selected"}
        </span>
        <DataGrid
          rows={teamPlayerStats ? teamPlayerStats : []}
          columns={teamRosterDefaultHeader}
          getRowId={(row) => row.player_id}
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
