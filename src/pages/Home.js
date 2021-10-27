import React from "react";
import "./Home.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import HomeSchedule from "../components/HomeSchedule";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner3 from "../logo/banner3.png";
import YoutubeEmbed from "../components/YoutubeEmbed";
import {
  defaultStandingTableHeader,
  sampleTableData,
} from "../const/leagueDetailConsts";
function Home() {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="home-wrapper">
      <HomeSchedule title="Upcoming Matches" />
      <div className="home-carousel-wrapper">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          <div>
            <img
              src={banner3}
              className="main-carousel-item"
              alt="main-carousel-item"
            />
          </div>
          {/* {temp.map((item) => {
            return (
              <div key={item}>
                <img
                  src={banner3}
                  className="main-carousel-item"
                  alt="main-carousel-item"
                />
              </div>
            );
          })} */}
        </Carousel>
      </div>
      <HomeSchedule title="Game Results" />
      <div className="content-wrapper">
        <div className="main-content-box">
          <div className="main-grid-item-wrapper">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
            >
              {temp.map((item) => {
                return (
                  <div className="main-carousel-item" key={item}>
                    <span>league name</span>
                    <table className="main-team-standing-table" key={item}>
                      <thead className="team-standing-table-header">
                        <tr>
                          {defaultStandingTableHeader.map((item, index) => {
                            return <th key={index}>{item}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {sampleTableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.rank}.</td>
                              <td className="name">{item.name}</td>
                              <td>{item.win}</td>
                              <td>{item.loss}</td>
                              <td>{item.winRate}</td>
                              <td>{item.gb}</td>
                              <td>{item.goalDiff}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <YoutubeEmbed embedId="P5aaWMKD8IQ" />
        </div>
      </div>
    </div>
  );
}

export default Home;
