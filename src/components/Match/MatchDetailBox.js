import React from "react";
import "./MatchDetailBox.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MatchDetailBox({ matchDetails }) {
  return (
    <div className="images-wrapper">
      <div className="grid-item-wrapper">
        <span>
          Shooting Chart -{" "}
          {matchDetails?.home_team ? matchDetails.home_team.name : null}
        </span>
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
          {matchDetails?.home_team.match_stats
            ? matchDetails.home_team.match_stats.map((item) => {
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
          {matchDetails?.away_team.match_stats
            ? matchDetails.away_team.match_stats.map((item) => {
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
  );
}

export default MatchDetailBox;
