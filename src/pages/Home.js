import React from "react";
import "./Home.scss";
import HomeSchedule from "../components/HomeSchedule";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import YoutubeEmbed from "../components/YoutubeEmbed";
import StandingTable from "../components/StandingTable";
import { useDispatch, useSelector } from "react-redux";
import { getMainPage } from "../store/actions/mainPage";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const {
    main_images,
    main_video,
    next_games,
    prev_games,
    season_standings,
    isLoading,
  } = useSelector((store) => store.mainPageReducer);
  useEffect(() => {
    dispatch(getMainPage());
  }, []);
  return (
    <div className="home-wrapper">
      <HomeSchedule
        title="Upcoming Matches"
        games={next_games}
        isLoading={isLoading}
      />
      <div className="home-carousel-wrapper">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          {main_images.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item}
                  className="main-carousel-item"
                  alt="main-carousel-item"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <HomeSchedule
        title="Game Results"
        games={prev_games}
        isLoading={isLoading}
      />
      <div className="content-wrapper">
        <div className="main-content-box">
          <div className="main-grid-item-wrapper">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
            >
              {season_standings.map((item, index) => {
                return (
                  <div className="main-carousel-item" key={index}>
                    <span>{item.league}</span>
                    <StandingTable standings={item.standings} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <YoutubeEmbed embedId={main_video} />
        </div>
      </div>
    </div>
  );
}

export default Home;
