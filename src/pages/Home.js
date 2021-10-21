import React from "react";
import "./Home.scss";
import ContentBox from "../components/ContentBox";
import mainTitlesAndRoutes from "../const/mainTitlesAndRoutes";
// import { useDispatch, useSelector } from "react-redux";
// import { getMainSchedules } from "../store/actions/main";
// import { useEffect } from "react";
// import Error from "./Error";
// import Loader from "react-loader-spinner";
// import HomeScheduleItem from "../components/HomeScheduleItem";
import HomeSchedule from "../components/HomeSchedule";

function Home() {
  return (
    <div className="home-wrapper">
      <HomeSchedule />

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
