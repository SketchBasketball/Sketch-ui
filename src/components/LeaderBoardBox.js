import React from "react";
import "./LeaderBoardBox.scss";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

function LeaderBoardBox({ index, leaders }) {
  const history = useHistory();

  const playerClickHandler = (player_id) => {
    history.push(`/players/${player_id}`);
  };
  return (
    <div className="leader-board-item" key={index}>
      <div className="leader-board-title-wrapper">
        <span className="leader-board-title">{leaders.title}</span>
      </div>
      <table className="leader-board-table">
        <tbody>
          {leaders?.leader_boards.map((item, index) => {
            return (
              <tr key={index} className={index == 0 ? "leader-row" : null}>
                <td className="leader-board-small-column">{index + 1}.</td>
                <td className="name">
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
                      playerClickHandler(item.player_id);
                    }}
                  >
                    {item.name}
                  </Button>
                </td>
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
