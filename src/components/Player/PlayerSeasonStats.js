import React from "react";
import "./PlayerSeasonStats.scss";
// import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { playerDetailStatisticsHeader } from "../../const/playerDetailStatisticsHeader";
import { playerStatsBySeasons } from "../Player/PlayerAPIExample";

const PlayerSeasonStats = () => {
  // const { teamPlayerStats } = useSelector((store) => store.teamReducer);

  return (
    <div className="team-roster-wrapper">
      <div className="team-roster-container">
        <span>
          {playerStatsBySeasons
            ? "Player Statistics - " +
              playerStatsBySeasons[0]?.league_abv.replace(/-/g, " ") +
              " " +
              playerStatsBySeasons[0]?.season_name
            : "No Player Selected"}
        </span>
        <DataGrid
          rows={playerStatsBySeasons ? playerStatsBySeasons : []}
          columns={playerDetailStatisticsHeader}
          getRowId={(row) => row.game_id}
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

export default PlayerSeasonStats;
