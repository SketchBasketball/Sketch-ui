import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMatchDetails } from "../store/actions/match";
import YoutubeEmbed from "../components/YoutubeEmbed";
import bball from "../logo/bball.png";
import matchStatDefaultHeader from "../const/matchStatDefaultHeader";

const Match = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { matchDetails } = useSelector((store) => store.matchReducer);

  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, []);

  return (
    <div className="match-container">
      <div className="match-content-wrapper">
        <div className="game-result-wrapper">
          <div className="game-result">
            <div className="game-score-wrapper">
              <div className="team-wrapper">
                <img src={bball} className="home-logo" alt="home-logo" />
                <span>{matchDetails ? matchDetails.home_team.name : null}</span>
              </div>
              <div className="game-score">12 : 44</div>
              <div className="team-wrapper">
                <img src={bball} className="away-logo" alt="away-logo" />
                <span>{matchDetails ? matchDetails.away_team.name : null}</span>
              </div>
            </div>
            <div className="game-mvp"></div>
          </div>
          <YoutubeEmbed embedId="brYFEuj7asU" />
        </div>
        <div className="data-grid-wrapper">
          <span>{matchDetails ? matchDetails.home_team.name : null}</span>
          <DataGrid
            rows={matchDetails ? matchDetails.home_team.match_stats : []}
            columns={matchStatDefaultHeader}
            autoHeight={true}
            rowHeight={30}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div>
        <div className="data-grid-wrapper">
          <span>{matchDetails ? matchDetails.away_team.name : null}</span>
          <DataGrid
            rows={matchDetails ? matchDetails.away_team.match_stats : []}
            columns={matchStatDefaultHeader}
            autoHeight={true}
            rowHeight={30}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div>
      </div>
    </div>
  );
};

export default Match;
