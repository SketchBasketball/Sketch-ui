import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import { DataGrid } from "@mui/x-data-grid";

const Match = () => {
  const { id } = useParams();

  const rows = [
    {
      id: 0,
      name: "Vic PS Chan",
      minutes: 0,
      points: 3,
      assists: 0,
      def_rebounds: 2,
      off_rebounds: 0,
      rebounds: 2,
      field_goal_try: 6,
      field_goal_made: 1,
      three_point_try: 0,
      three_point_made: 1,
      steals: 2,
      blocks: 1,
      fouls: 3,
      turnovers: 4,
      is_starter: false,
      is_mvp: false,
    },
    {
      id: 1,
      name: "Dan PS Zhao",
      minutes: 0,
      points: 8,
      assists: 1,
      def_rebounds: 9,
      off_rebounds: 1,
      rebounds: 10,
      field_goal_try: 12,
      field_goal_made: 2,
      three_point_try: 0,
      three_point_made: 0,
      steals: 0,
      blocks: 1,
      fouls: 2,
      turnovers: 1,
      is_starter: false,
      is_mvp: false,
    },
    {
      id: 2,
      name: "John PS Koshy",
      minutes: 0,
      points: 4,
      assists: 1,
      def_rebounds: 0,
      off_rebounds: 0,
      rebounds: 0,
      field_goal_try: 4,
      field_goal_made: 2,
      three_point_try: 0,
      three_point_made: 0,
      steals: 0,
      blocks: 0,
      fouls: 3,
      turnovers: 2,
      is_starter: false,
      is_mvp: false,
    },
    {
      id: 3,
      name: "Way PS Chang",
      minutes: 0,
      points: 8,
      assists: 1,
      def_rebounds: 6,
      off_rebounds: 0,
      rebounds: 6,
      field_goal_try: 8,
      field_goal_made: 3,
      three_point_try: 0,
      three_point_made: 0,
      steals: 1,
      blocks: 0,
      fouls: 4,
      turnovers: 1,
      is_starter: false,
      is_mvp: false,
    },
    {
      id: 4,
      name: "Samuel PS Song",
      minutes: 0,
      points: 16,
      assists: 0,
      def_rebounds: 9,
      off_rebounds: 0,
      rebounds: 9,
      field_goal_try: 13,
      field_goal_made: 6,
      three_point_try: 0,
      three_point_made: 0,
      steals: 0,
      blocks: 0,
      fouls: 0,
      turnovers: 2,
      is_starter: false,
      is_mvp: false,
    },
    {
      id: 5,
      name: "Kiwan PS Chung",
      minutes: 0,
      points: 4,
      assists: 0,
      def_rebounds: 3,
      off_rebounds: 0,
      rebounds: 3,
      field_goal_try: 3,
      field_goal_made: 2,
      three_point_try: 0,
      three_point_made: 0,
      steals: 1,
      blocks: 0,
      fouls: 2,
      turnovers: 0,
      is_starter: false,
      is_mvp: false,
    },
  ];

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
        <ContentBox title="Team A">
          <h3>{id}</h3>
          <div className="data-grid-wrapper">
            <DataGrid
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
