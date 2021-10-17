import React from "react";
import "./Home.scss";
import ContentBox from "../components/ContentBox";
import mainTitlesAndRoutes from "../const/mainTitlesAndRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getMainSchedules } from "../store/actions/main";
import { useEffect } from "react";
import Error from "./Error";

function Home() {
  const dispatch = useDispatch();
  const { schedules, isLoading, isError } = useSelector(
    (store) => store.mainReducer
  );

  useEffect(() => {
    if (isError) return <Error />;
  }, [isError]);

  useEffect(() => {
    dispatch(getMainSchedules());
  }, []);
  return (
    <div className="home-wrapper">
      <div className="schedule-bar-wrapper">
        <div className="schedule-title">Upcoming Matches</div>
        <div className="schedule-bar">
          {isLoading ? (
            <div className="schedule-content">Loading...</div>
          ) : (
            schedules.map((item, index) => {
              return (
                <div className="schedule-content" key={index}>
                  <div className="league-name">
                    <div>{item.league_name}</div>
                    <div>League</div>
                    {/* <div>{item.match_type}</div> */}
                  </div>

                  <div className="team-info">
                    <div className="team-name">{item.home_team_name}</div>
                    <div>{item.home_team_score}</div>
                  </div>
                  <div className="team-info">
                    <div className="team-name">{item.away_team_name}</div>
                    <div>{item.away_team_score}</div>
                  </div>
                  <div className="match-etc">📍 {item.location}</div>
                  <div className="match-etc">
                    @ {item.scheduled_at.substr(0, 10)}{" "}
                    {item.scheduled_at.substr(11, 5)}
                  </div>
                </div>
              );
            })
          )}
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
