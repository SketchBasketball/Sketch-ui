import React from "react";
import "./GameResult.scss";
import bball from "../logo/bball.png";
import YoutubeEmbed from "../components/YoutubeEmbed";

const GameResult = ({ matchDetails }) => {
  return (
    <div className="game-result-wrapper">
      <div className="game-result">
        <span className="match-title">
          {matchDetails?.season} -{" "}
          {matchDetails ? matchDetails.match_type : null}
        </span>
        <span className="match-sub-title">
          {matchDetails ? matchDetails.scheduled_at.date : "--"}{" "}
          {matchDetails ? matchDetails.scheduled_at.day : "--"}
        </span>
        <div className="game-score-wrapper">
          <div className="team-wrapper">
            <img
              src={
                matchDetails?.home_team?.logo
                  ? matchDetails.home_team.logo
                  : bball
              }
              className="home-logo"
              alt="home-logo"
            />
            <span>
              {matchDetails?.home_score ? matchDetails.home_team.name : null}
            </span>
          </div>
          <div className="game-score">
            {matchDetails?.home_score ? matchDetails.home_score : "--"} :{" "}
            {matchDetails?.away_team ? matchDetails.away_score : "--"}
          </div>
          <div className="team-wrapper">
            <img
              src={
                matchDetails?.away_team?.logo
                  ? matchDetails.away_team.logo
                  : bball
              }
              className="away-logo"
              alt="away-logo"
            />
            <span>
              {matchDetails?.away_team ? matchDetails.away_team.name : null}
            </span>
          </div>
        </div>
        <span className="match-sub-title">
          {matchDetails ? matchDetails.scheduled_at.time : "--"}
          {" @ "}
          {matchDetails ? matchDetails.location : "--"}
        </span>
      </div>
      <YoutubeEmbed
        embedId={matchDetails ? matchDetails.match_videos : "P5aaWMKD8IQ"}
      />
    </div>
  );
};

export default GameResult;
