import React from "react";

const matchTestStatDefaultHeader = [
  {
    key: "name",
    name: "PLAYER",
    resizable: true,
    frozen: true,
    sortable: true,
    summaryFormatter() {
      return <strong>Total</strong>;
    },
  },
  {
    key: "minutes",
    name: "MIN",
    width: "5%",
    resizable: true,
    summaryFormatter({ row }) {
      console.log(row);
      return <>{row.totalMin}</>;
    },
  },
  {
    key: "points",
    name: "PTS",
    width: "5%",
    resizable: true,
    summaryFormatter({ row }) {
      console.log(row);
      return <>{row.totalPoints}</>;
    },
  },
  { key: "assists", name: "AST", width: "5%", resizable: true },
  { key: "def_rebounds", name: "DREB", width: "6%", resizable: true },
  { key: "off_rebounds", name: "OREB", width: "6%", resizable: true },
  { key: "rebounds", name: "REB", width: "5%", resizable: true },
  { key: "field_goal_try", name: "FGA", width: "5%", resizable: true },
  { key: "field_goal_made", name: "FGM", width: "5%", resizable: true },
  { key: "three_point_try", name: "3PA", width: "5%", resizable: true },
  { key: "three_point_made", name: "3PM", width: "5%", resizable: true },
  { key: "free_throw_try", name: "FTA", width: "5%", resizable: true },
  { key: "free_throw_made", name: "FTM", width: "5%", resizable: true },
  { key: "steals", name: "STL", width: "5%", resizable: true },
  { key: "blocks", name: "BLK", width: "5%", resizable: true },
  { key: "fouls", name: "PF", width: "5%", resizable: true },
  { key: "turnovers", name: "TO", width: "5%", resizable: true },
];

export default matchTestStatDefaultHeader;
