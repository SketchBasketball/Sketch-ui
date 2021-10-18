import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import ContentBox from "../components/ContentBox";

const Match = () => {
  const { id } = useParams();

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
