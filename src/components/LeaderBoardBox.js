import React from "react";
import "./LeaderBoardBox.scss";

function LeaderBoardBox({ index, leaders }) {
  return (
    <div className="leader-board-item" key={index}>
      <div className="leader-board-title-wrapper">
        <span className="leader-board-title">{leaders.title}</span>
      </div>
      <table className="leader-board-table">
        <tbody>
          {leaders.leader_boards.map((item, index) => {
            return (
              <tr key={index} className={index == 0 ? "leader-row" : null}>
                <td className="leader-board-small-column">{index + 1}.</td>
                <td className="name">{item.name}</td>
                <td className="leader-board-small-column">{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoardBox;
