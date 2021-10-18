import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import { DataGrid } from "@mui/x-data-grid";

const Match = () => {
  const { id } = useParams();

  const rows = [
    {
      id: 1,
      name: "Bobby L",
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 2,
      name: "Taemin Ha",
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 3,
      name: "Michael Jordan",
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 4,
      name: 0,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 5,
      name: 0,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 6,
      name: 11,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 7,
      name: 0,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 8,
      name: 11,
      minutes: "Example",
      points: 1,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 9,
      name: 0,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
    {
      id: 10,
      name: 11,
      minutes: "Example",
      points: 10,
      assists: "int",
      def_rebound: "int",
      off_rebounds: "int",
      rebounds: "int",
      field_goal_try: "int",
      field_goal_made: "int",
      three_point_try: "int",
      three_point_made: "int",
      steals: "int",
      blocks: "int",
      fouls: "int",
      turnovers: "int",
    },
  ];

  const columns = [
    { field: "name", headerName: "PLAYER", flex: 2, minWidth: 160 },
    { field: "minutes", headerName: "MIN", flex: 1, minWidth: 80 },
    { field: "points", headerName: "PTS", flex: 1, minWidth: 80 },
    { field: "assists", headerName: "AST", flex: 1, minWidth: 80 },
    { field: "def_rebound", headerName: "DREB", flex: 1, minWidth: 80 },
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
        <ContentBox title="Team A">
          <div>
            <h3>{id}</h3>
            <DataGrid
              style={{ width: "100%" }}
              rows={rows}
              columns={columns}
              autoHeight={true}
              rowHeight={30}
            />
          </div>
        </ContentBox>
        <ContentBox title="Team B">
          <div>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
          </div>
        </ContentBox>
      </div>
    </div>
  );
};

export default Match;
