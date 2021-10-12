import React from "react";
import "./Home.scss";
import ContentBox from "../components/ContentBox";
import mainTitlesAndRoutes from "../const/mainTitlesAndRoutes";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="schedule-bar-wrapper">
        <div className="schedule-title">Upcoming Matches</div>
        <div className="schedule-bar">
          <div className="schedule-content">schedule1111</div>
          <div className="schedule-content">schedule2</div>
          <div className="schedule-content">schedule3</div>
          <div className="schedule-content">schedule4</div>
          <div className="schedule-content">schedule5</div>
          <div className="schedule-content">schedule6</div>
          <div className="schedule-content">schedule7</div>
          <div className="schedule-content">schedule8</div>
          <div className="schedule-content">schedule6</div>
          <div className="schedule-content">schedule7</div>
          <div className="schedule-content">schedule8</div>
          <div className="schedule-content">schedule6</div>
          <div className="schedule-content">schedule7</div>
          <div className="schedule-content">schedule8</div>
        </div>
      </div>

      <div className="content-wrapper">
        {mainTitlesAndRoutes.map((item, index) => {
          return (
            <ContentBox key={index} title={item.title} path={item.path}>
              <div>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
              </div>
            </ContentBox>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
