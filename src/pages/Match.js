import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMatchDetails } from "../store/actions/match";

const Match = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { matchDetails } = useSelector((store) => store.matchReducer);

  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, []);

  const columns = [
    { field: "name", headerName: "PLAYER", flex: 2, minWidth: 160 },
    { field: "minutes", headerName: "MIN", flex: 1, minWidth: 80 },
    { field: "points", headerName: "PTS", flex: 1, minWidth: 80 },
    { field: "assists", headerName: "AST", flex: 1, minWidth: 80 },
    { field: "def_rebounds", headerName: "DREB", flex: 1, minWidth: 80 },
    { field: "off_rebounds", headerName: "OREB", flex: 1, minWidth: 80 },
    { field: "rebounds", headerName: "REB", flex: 1, minWidth: 80 },
    { field: "field_goal_try", headerName: "FGA", flex: 1, minWidth: 80 },
    { field: "field_goal_made", headerName: "FGM", flex: 1, minWidth: 80 },
    { field: "three_point_try", headerName: "3PA", flex: 1, minWidth: 80 },
    { field: "three_point_made", headerName: "3PM", flex: 1, minWidth: 80 },
    { field: "steals", headerName: "STL", flex: 1, minWidth: 80 },
    { field: "blocks", headerName: "BLK", flex: 1, minWidth: 80 },
    { field: "fouls", headerName: "PF", flex: 1, minWidth: 80 },
    { field: "turnovers", headerName: "TO", flex: 1, minWidth: 80 },
  ];

  return (
    <div className="match-container">
      <div className="match-content-wrapper">
        {matchDetails ? matchDetails.league : null}
        <ContentBox title={matchDetails ? matchDetails.home_team.name : null}>
          <div className="data-grid-wrapper">
            <DataGrid
              rows={matchDetails ? matchDetails.home_team.match_stats : []}
              columns={columns}
              autoHeight={true}
              rowHeight={30}
              pageSize={100}
              rowsPerPageOptions={[100]}
            />
          </div>
        </ContentBox>
        <ContentBox title={matchDetails ? matchDetails.away_team.name : null}>
          <div className="data-grid-wrapper">
            <DataGrid
              rows={matchDetails ? matchDetails.away_team.match_stats : []}
              columns={columns}
              autoHeight={true}
              rowHeight={30}
              pageSize={100}
              rowsPerPageOptions={[100]}
            />
          </div>
        </ContentBox>
      </div>
    </div>
  );
};

export default Match;
