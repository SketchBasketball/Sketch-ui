import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMatchDetails } from "../store/actions/match";
import matchStatDefaultHeader from "../const/matchStatDefaultHeader";
import GameResult from "../components/Match/GameResult";
import MatchDetailBox from "../components/Match/MatchDetailBox";
const Match = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { matchDetails } = useSelector((store) => store.matchReducer);

  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, []);

  return (
    <div className="match-container">
      <div className="match-content-wrapper">
        <GameResult matchDetails={matchDetails} />
        {matchDetails?.is_finished ? (
          <MatchDetailBox matchDetails={matchDetails} />
        ) : (
          <div className="not-finished-div">TBD: Shooting Chart and MVP</div>
        )}

        <div className="box-score-wrapper">
          <span>{matchDetails ? matchDetails.home_team.name : null}</span>
          <DataGrid
            rows={matchDetails ? matchDetails.home_team.match_stats : []}
            columns={matchStatDefaultHeader}
            autoHeight={true}
            rowHeight={30}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div>
        <div className="box-score-wrapper">
          <span>{matchDetails ? matchDetails.away_team.name : null}</span>
          <DataGrid
            rows={matchDetails ? matchDetails.away_team.match_stats : []}
            columns={matchStatDefaultHeader}
            autoHeight={true}
            rowHeight={30}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div>
      </div>
    </div>
  );
};

export default Match;
