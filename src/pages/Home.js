import React from "react";
import "./Home.scss";
import HomeSchedule from "../components/Home/HomeSchedule";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import YoutubeEmbed from "../components/Common/YoutubeEmbed";
import StandingTable from "../components/StandingTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getBanners,
  getMainNextGames,
  getMainPrevGames,
  getVideo,
  getAllLeagueStandings,
} from "../store/actions/mainPage";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const {
    banners,
    video,
    next_games,
    next_loading,
    prev_games,
    prev_loading,
    season_standings,
  } = useSelector((store) => store.mainPageReducer);
  useEffect(() => {
    dispatch(getBanners());
    dispatch(getMainNextGames());
    dispatch(getMainPrevGames());
    dispatch(getAllLeagueStandings());
    dispatch(getVideo());
  }, []);
  return (
    <div className="home-wrapper">
      <HomeSchedule
        title="Upcoming Matches"
        games={next_games}
        isLoading={next_loading}
      />
      <div className="home-carousel-wrapper">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          {banners.map((item, index) => {
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
        isLoading={prev_loading}
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
                    <span>{item.league_name}</span>
                    <StandingTable standings={item.league_standings} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <YoutubeEmbed embedId={video} />
        </div>
      </div>
    </div>
  );
}

export default Home;
