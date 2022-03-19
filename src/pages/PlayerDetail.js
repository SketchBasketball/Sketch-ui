import React /*, { useEffect, useState }*/ from "react";
import "./PlayerDetail.scss";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import PlayerBanner from "../components/Player/PlayerBanner";
import PlayerCareerHigh from "../components/Player/PlayerCareerHigh";
import PlayerCurrentSeasonAvg from "../components/Player/PlayerCurrentSeasonAvg";
import PlayerSeasonStats from "../components/Player/PlayerSeasonStats";

const PlayerDetail = () => {
  const { playerId } = useParams();
  console.log(playerId);
  // const dispatch = useDispatch();

  return (
    <div className="player-wrapper">
      <PlayerBanner />
      <div className="player-careerhigh-currentseason-container">
        <PlayerCareerHigh />
        <PlayerCurrentSeasonAvg />
      </div>
      <PlayerSeasonStats />
    </div>
  );
};

export default PlayerDetail;
