import React from "react";
import "./Home.scss";
import ContentBox from "../components/ContentBox";
import mainTitlesAndRoutes from "../const/mainTitlesAndRoutes";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="coming-schedule-wrapper">
        <div>Upcoming Events In 7 days</div>
        <div>schedule1</div>
        <div>schedule2</div>
        <div>schedule3</div>
        <div>schedule4</div>
        <div>schedule5</div>
        <div>schedule6</div>
        <div>schedule7</div>
        <div>schedule8</div>
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
