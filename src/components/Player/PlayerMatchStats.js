import React from "react";
import "./PlayerMatchStats.scss";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { playerMatchStatsStatisticsHeader } from "../../const/playerDetailStatisticsHeader";

const PlayerMatchStats = () => {
  const { playerMatchStats } = useSelector((store) => store.playerReducer);

  return (
    <div className="player-match-stats-wrapper">
      <div className="player-match-stats-container">
        <span>
          {playerMatchStats ? "Match Statistics " : "No Player Selected"}
        </span>
        <DataGrid
          rows={playerMatchStats ? playerMatchStats : []}
          columns={playerMatchStatsStatisticsHeader}
          getRowId={(row) => row.match_id}
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

export default PlayerMatchStats;
