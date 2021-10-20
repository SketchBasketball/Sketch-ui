import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMatchDetails } from "../store/actions/match";
import YoutubeEmbed from "../components/YoutubeEmbed";
import bball from "../logo/bball.png";
import pogSample from "../logo/pog_sample.png";
import matchStatDefaultHeader from "../const/matchStatDefaultHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Match = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { matchDetails } = useSelector((store) => store.matchReducer);

  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, []);

  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          <YoutubeEmbed embedId="P5aaWMKD8IQ" />
        </div>
        <div className="images-wrapper">
          <div className="grid-item-wrapper">
            <span>
              Shooting Chart -{" "}
              {matchDetails ? matchDetails.home_team.name : null}
            </span>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
              {temp.map((item) => {
                return (
                  <div key={item}>
                    <img
                      src="https://cdn.discordapp.com/attachments/886552888254529598/900225239177363486/team.jpeg"
                      className="carousel-item"
                      alt="carousel-item"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="grid-item-wrapper">
            <span>MVP</span>
            <img src={pogSample} className="mvp-image" alt="home-logo" />
          </div>
          <div className="grid-item-wrapper">
            <span>
              Shooting Chart -{" "}
              {matchDetails ? matchDetails.away_team.name : null}
            </span>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
              {temp.map((item) => {
                return (
                  <div key={item}>
                    <img
                      src="https://cdn.discordapp.com/attachments/886552888254529598/900225239177363486/team.jpeg"
                      className="carousel-item"
                      alt="carousel-item"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
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
