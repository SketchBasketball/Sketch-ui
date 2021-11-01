import React from "react";
import "./StandingTable.scss";
import { defaultStandingTableHeader } from "../const/leagueDetailConsts";

const StandingTable = ({ standings }) => {
  return (
    <div className="team-standing-table-wrapper">
      <table className="team-standing-table">
        <thead className="team-standing-table-header">
          <tr>
            {defaultStandingTableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {standings.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.rank}</td>
                <td className="name">{item.name}</td>
                <td>{item.win}</td>
                <td>{item.loss}</td>
                <td>{item.win_percentage}</td>
                <td>{item.games_behind}</td>
                <td>{item.win_streak}</td>
                <td>{item.points_plus_minus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StandingTable;
