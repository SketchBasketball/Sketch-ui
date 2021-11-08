const matchStatDefaultHeader = [
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

const statDefaultHeader = [
  { field: "name", headerName: "PLAYER", flex: 2 },
  { field: "PTS", headerName: "PTS", flex: 1 },

  { field: "FGA", headerName: "FGA", flex: 1 },
  { field: "FGM", headerName: "FGM", flex: 1 },
  { field: "FG%", headerName: "FG%", flex: 1 },

  { field: "3PA", headerName: "3PA", flex: 1 },
  { field: "3PM", headerName: "3PM", flex: 1 },
  { field: "3P%", headerName: "3P%", flex: 1 },

  { field: "FTM", headerName: "FTM", flex: 1 },
  { field: "FTA", headerName: "FTA", flex: 1 },
  { field: "FT%", headerName: "FT%", flex: 1 },

  { field: "OREB", headerName: "OREB", flex: 1 },
  { field: "DREB", headerName: "DREB", flex: 1 },
  { field: "REB", headerName: "REB", flex: 1 },

  { field: "AST", headerName: "AST", flex: 1 },
  { field: "STL", headerName: "STL", flex: 1 },
  { field: "BLK", headerName: "BLK", flex: 1 },
  { field: "TOV", headerName: "TOV", flex: 1 },
  { field: "EFF", headerName: "EFF", flex: 1 },
  { field: "TSP", headerName: "TSP", flex: 1 },
];

export { matchStatDefaultHeader, statDefaultHeader };
