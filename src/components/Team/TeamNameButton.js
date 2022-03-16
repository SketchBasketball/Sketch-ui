import React from "react";
import "./TeamNameButton.scss";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

const TeamNameButton = ({ ButtonStyle, ButtonSize, TeamName, TeamId }) => {
  const history = useHistory();

  const teamClickHandler = (team_id) => {
    history.push(`/Teams/${team_id}`);
  };

  return (
    <div>
      <Button
        sx={ButtonStyle}
        size={ButtonSize}
        variant="text"
        onClick={(e) => {
          e.stopPropagation();
          teamClickHandler(TeamId);
        }}
      >
        {TeamName}
      </Button>
    </div>
  );
};

export default TeamNameButton;
