import React from "react";
import "./Match.scss";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMatchDetails } from "../store/actions/match";
import matchStatDefaultHeader from "../const/matchStatDefaultHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import GameResult from "../components/GameResult";
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
        <GameResult matchDetails={matchDetails} />
        <div className="images-wrapper">
          <div className="grid-item-wrapper">
            <span>
              Shooting Chart -{" "}
              {matchDetails?.home_team ? matchDetails.home_team.name : null}
            </span>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
              {matchDetails?.home_shooting_chart
                ? matchDetails.home_shooting_chart.map((item) => {
                    return (
                      <div key={item}>
                        <img
                          src={item.shooting_chart}
                          className="carousel-item"
                          alt="carousel-item"
                        />
                      </div>
                    );
                  })
                : null}
            </Carousel>
          </div>
          <div className="grid-item-wrapper">
            <span>MVP</span>
            <img
              src={matchDetails?.mvp ? matchDetails.mvp.mvp_photo : null}
              className="mvp-image"
              alt="home-logo"
            />
          </div>
          <div className="grid-item-wrapper">
            <span>
              Shooting Chart -{" "}
              {matchDetails?.away_team ? matchDetails.away_team.name : null}
            </span>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
              {matchDetails?.away_shooting_chart
                ? matchDetails.away_shooting_chart.map((item) => {
                    return (
                      <div key={item}>
                        <img
                          src={item.shooting_chart}
                          className="carousel-item"
                          alt="carousel-item"
                        />
                      </div>
                    );
                  })
                : null}
            </Carousel>
          </div>
        </div>
        <div className="box-score-wrapper">
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
        <div className="box-score-wrapper">
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
