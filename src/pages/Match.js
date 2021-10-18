import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import DataGrid from "react-data-grid";

const Match = () => {
  const { id } = useParams();
  const columns = [
    { key: "name", name: "PLAYER" },
    { key: "minutes", name: "MIN" },
    { key: "points", name: "PTS" },
    { key: "assists", name: "AST" },
    { key: "def_rebound", name: "DREB" },
    { key: "off_rebounds", name: "OREB" },
    { key: "rebounds", name: "REB" },
    { key: "field_goal_try", name: "FGA" },
    { key: "field_goal_made", name: "FGM" },
    { key: "three_point_try", name: "3PA" },
    { key: "three_point_made", name: "3PM" },
    { key: "steals", name: "STL" },
    { key: "blocks", name: "BLK" },
    { key: "fouls", name: "PF" },
    { key: "turnovers", name: "TO" },
  ];

  const rows = [
    {
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 11,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 11,
      minutes: "Example",
      points: "10",
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
      name: 0,
      minutes: "Example",
      points: "10",
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
      name: 11,
      minutes: "Example",
      points: "10",
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
  return (
    <div className="match-container">
      <div className="match-content-wrapper">
        <ContentBox title="Team A">
          <div>
            <h3>{id}</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <div className="data-grid-wrapper">
              <DataGrid
                style={{ height: "15rem" }}
                className="rdg-light"
                columns={columns}
                rows={rows}
              ></DataGrid>
            </div>
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
