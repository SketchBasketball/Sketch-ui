import React from "react";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

const matchStatDefaultHeader = [
  {
    field: "name",
    headerName: "PLAYER",
    flex: 2.5,
    minWidth: 160,
    sortable: false,
    renderCell: (playerDetails) => {
      const history = useHistory();

      const playerClickHandler = (player_id) => {
        history.push(`/players/${player_id}`);
      };
      return (
        <Button
          sx={{
            color: "black",
            fontSize: "0.8rem",
            justifyContent: "flex-start",
          }}
          size={"small"}
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            playerClickHandler(playerDetails.row.player_id);
          }}
        >
          {playerDetails.row.name}
        </Button>
      );
    },
  },
  {
    field: "minutes",
    headerName: "MIN",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "points",
    headerName: "PTS",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "assists",
    headerName: "AST",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "def_rebounds",
    headerName: "DREB",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "off_rebounds",
    headerName: "OREB",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "rebounds",
    headerName: "REB",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "field_goal_try",
    headerName: "FGA",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "field_goal_made",
    headerName: "FGM",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "three_point_try",
    headerName: "3PA",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "three_point_made",
    headerName: "3PM",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "free_throw_try",
    headerName: "FTA",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "free_throw_made",
    headerName: "FTM",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "steals",
    headerName: "STL",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "blocks",
    headerName: "BLK",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  { field: "fouls", headerName: "PF", flex: 1, minWidth: 80, sortable: false },
  {
    field: "turnovers",
    headerName: "TO",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
];

const statPageDefaultHeader = [
  {
    field: "league_season_name",
    headerName: "SEASON",
    flex: 1.5,
    minWidth: 70,
  },
  {
    field: "team_name",
    headerName: "TEAM",
    flex: 1.5,
    minWidth: 110,
    renderCell: (teamDetails) => {
      const history = useHistory();

      const teamClickHandler = (team_id) => {
        history.push(`/Teams/${team_id}`);
      };
      return (
        <Button
          sx={{
            color: "black",
            fontSize: "0.7rem",
            justifyContent: "flex-start",
          }}
          size={"small"}
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            teamClickHandler(teamDetails.row.team_id);
          }}
        >
          {teamDetails.row.team_name}
        </Button>
      );
    },
  },
  {
    field: "player_name",
    headerName: "PLAYER",
    flex: 2.5,
    minWidth: 150,
    renderCell: (playerDetails) => {
      const history = useHistory();

      const playerClickHandler = (player_id) => {
        history.push(`/players/${player_id}`);
      };
      return (
        <Button
          sx={{
            color: "black",
            fontSize: "0.7rem",
            justifyContent: "flex-start",
          }}
          size={"small"}
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            playerClickHandler(playerDetails.row.player_id);
          }}
        >
          {playerDetails.row.player_name}
        </Button>
      );
    },
  },
  {
    field: "GP",
    headerName: "GP",
    flex: 0.9,
    minWidth: 50,
    align: "right",
    type: "number",
  },
  {
    field: "PTS",
    headerName: "PTS",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "FGM",
    headerName: "FGM",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "FGA",
    headerName: "FGA",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "FG%",
    headerName: "FG%",
    flex: 1,
    minWidth: 60,
    align: "right",
    headerAlign: "right",
    type: "number",
  },
  {
    field: "3PA",
    headerName: "3PA",
    flex: 1,
    minWidth: 60,
    align: "right",
    headerAlign: "right",
    type: "number",
  },
  {
    field: "3PM",
    headerName: "3PM",
    flex: 1,
    minWidth: 60,
    align: "right",
    headerAlign: "right",
    type: "number",
  },
  {
    field: "3P%",
    headerName: "3P%",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "FTM",
    headerName: "FTM",
    flex: 1,
    minWidth: 60,
    headerAlign: "right",
    align: "right",
    type: "number",
  },
  {
    field: "FTA",
    headerName: "FTA",
    flex: 1,
    minWidth: 60,
    headerAlign: "right",
    align: "right",
    type: "number",
  },
  {
    field: "FT%",
    headerName: "FT%",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "OREB",
    headerName: "OFF",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "DREB",
    headerName: "DEF",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "REB",
    headerName: "REB",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "AST",
    headerName: "AST",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "STL",
    headerName: "STL",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "BLK",
    headerName: "BLK",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "TOV",
    headerName: "TOV",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "EFF",
    headerName: "EFF",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
  {
    field: "TSP",
    headerName: "TS%",
    headerAlign: "right",
    flex: 1,
    minWidth: 60,
    align: "right",
    type: "number",
  },
];

export { matchStatDefaultHeader, statPageDefaultHeader };
