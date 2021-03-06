import React from "react";
import "./PlayerSeasonStats.scss";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { playerSeasonStatsStatisticsHeader } from "../../const/playerDetailStatisticsHeader";

const PlayerSeasonStats = () => {
  const { playerSeasonStats } = useSelector((store) => store.playerReducer);

  return (
    <div className="team-roster-wrapper">
      <div className="team-roster-container">
        <span>
          {playerSeasonStats ? "Season Statistics " : "No Player Selected"}
        </span>
        <DataGrid
          rows={playerSeasonStats ? playerSeasonStats : []}
          columns={playerSeasonStatsStatisticsHeader}
          getRowId={(row) => row.season_id + row.match_type}
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
